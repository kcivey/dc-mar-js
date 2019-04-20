const nock = require('./nock');
const expect = require('chai').expect;
const {Client, Address} = require('..');
const options = {};

if (process.env.NOCK_OFF !== 'true') {
    nock.disableNetConnect();
    options.minInterval = 0; // for testing, when no real HTTP requests are being made
}
// nock.recorder.rec();

describe(
    'findLocation',
    function () {
        this.timeout(5000); // allow for pauses between requests in live testing
        describe(
            'return values',
            function () {
                it(
                    '1600 Penn',
                    function (done) {
                        const client = new Client(options);
                        client.findLocation('1600 Penn')
                            .then(function (addresses) {
                                expect(addresses).has.length(2);
                                const wh = addresses[0];
                                expect(wh).is.instanceof(Address);
                                expect(wh.quadrant()).to.equal('NW');
                                expect(wh.ward()).to.equal(2);
                                expect(wh.fullAddress()).to.equal('1600 PENNSYLVANIA AVENUE NW');
                                done();
                            });
                    }
                );
                it(
                    'No results',
                    function (done) {
                        const client = new Client(options);
                        client.findLocation('****')
                            .then(function (addresses) {
                                expect(addresses).has.length(0);
                                done();
                            });
                    }
                );
            }
        );
    }
);
