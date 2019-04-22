const request = require('request-promise-native');
const Address = require('./address');
const clientDefaultOptions = {
    request,
    baseUrl: 'https://citizenatlas.dc.gov/newwebservices/locationverifier.asmx/',
    minInterval: 3000, // 3 sec, as requested by DC OCTO: https://octo.dc.gov/node/1166991
};
let previousRequestTime = 0;

class Client {

    constructor(options = {}) {
        for (const name of Object.keys(options)) {
            if (!clientDefaultOptions.hasOwnProperty(name)) {
                throw new Error(`Invalid client option "${name}"`);
            }
        }
        this.options = Object.assign({}, clientDefaultOptions, options);
    }

    // Wait long enough between requests (not useful except privately)
    pause(result) {
        const now = Date.now();
        const delay = Math.max(this.options.minInterval - now + previousRequestTime, 0);
        previousRequestTime = now;
        return new Promise(function (resolve) {
            setTimeout(() => resolve(result), delay);
        });
    }

    request(operation, parameters) {
        if (operation.substr(-1) !== '2') {
            operation += '2'; // the REST versions of the operations all end in '2'
        }
        const requestOptions = {
            url: this.options.baseUrl + operation,
            qs: Object.assign({}, parameters, {f: 'json'}), // avoid modifying argument
            simple: true,
            json: true,
        };
        return this.pause()
            .then(() => this.options.request(requestOptions));
    }

    findLocation(searchString, raw = false) {
        return this.request('findLocation', {str: searchString})
            .then(function (body) {
                if (raw) {
                    return body;
                }
                return extractAddresses(body);
            });
    }

    findLocationBatch(searchStrings, raw) {
        const separator = '|';
        const separatorRe = new RegExp('\\' + separator, 'g');
        const parameters = {
            addr_base64: Buffer.from(searchStrings.map(s => s.replace(separatorRe, ' ')).join(separator))
                .toString('base64'),
            addr_separator: separator,
            chunkSequnce_separator: '\x7F', // don't know what this is supposed to do
        };
        return this.request('findLocationBatch', parameters)
            .then(function (body) {
                if (raw) {
                    return body;
                }
                return body.filter(o => typeof o === 'object').map(extractAddresses);
            });
    }

}

function extractAddresses(obj) {
    const r = obj.returnDataset;
    return r && r.Table1 ? r.Table1.map(properties => new Address(properties)) : [];
}

module.exports = Client;
