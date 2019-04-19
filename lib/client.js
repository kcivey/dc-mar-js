const request = require('request-promise-native');
const baseUrl = 'https://citizenatlas.dc.gov/newwebservices/locationverifier.asmx/';
const Address = require('./address');
const clientDefaultOptions = {
    baseUrl,
    request,
};
const timeBetweenRequests = 3000; // 3 sec, as requested by DC OCTO: https://octo.dc.gov/node/1166991
let previousRequestTime = 0;

// Wait long enough between requests
function pause(result) {
    const now = Date.now();
    const delay = Math.min(timeBetweenRequests - now + previousRequestTime, 0);
    previousRequestTime = now;
    return new Promise(function (resolve) {
        setTimeout(() => resolve(result), delay);
    });
}

class Client {

    constructor(options = {}) {
        for (const name in Object.keys(options)) {
            if (!clientDefaultOptions.hasOwnProperty(name)) {
                throw new Error(`Invalid client option "${name}"`);
            }
        }
        this.options = Object.assign({}, clientDefaultOptions, options);
    }

    request(operation, parameters) {
        if (operation.substr(-1) !== '2') {
            operation += '2'; // the REST versions of the operations all end in '2'
        }
        const requestOptions = {
            url: baseUrl + operation,
            qs: Object.assign({}, parameters, {f: 'json'}), // avoid modifying argument
            simple: true,
            json: true,
        };
        return pause()
            .then(() => this.options.request(requestOptions));
    }

    findLocation(str, raw = false) {
        return this.request('findLocation', {str})
            .then(function (body) {
                return raw ? body : body.returnDataset.Table1
                    .map(properties => new Address(properties));
            });
    }

}

module.exports = Client;
