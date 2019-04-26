const Address = require('./lib/address');
const Client = require('./lib/client');

module.exports = {
    Address,
    Client,
    createClient(options) {
        return new Client(options);
    },
};
