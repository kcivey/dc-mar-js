const nock = require('./nock');
const expect = require('chai').expect;
const {Client, Address} = require('..');
const options = {};

if (process.env.NOCK_OFF !== 'true') {
    nock.disableNetConnect();
    options.minInterval = 0; // for testing, when no real HTTP requests are being made
}
else {
    // nock.recorder.rec();
}

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
                                expect(wh.anc()).to.equal('2A');
                                expect(wh.smd()).to.equal('2A01');
                                expect(wh.precinct()).to.equal(2);
                                expect(wh.zip()).to.equal('20500');
                                expect(wh.fullAddress()).to.equal('1600 PENNSYLVANIA AVENUE NW');
                                expect(wh.imageUrl()).to.be.null;
                                expect(wh.confidenceLevel()).to.equal(70);
                                done();
                            });
                    }
                );
                it(
                    'No results (null dataset)',
                    function (done) {
                        const client = new Client(options);
                        client.findLocation('****')
                            .then(function (addresses) {
                                expect(addresses).has.length(0);
                                done();
                            });
                    }
                );
                it(
                    'No results (empty dataset)',
                    function (done) {
                        const client = new Client(options);
                        client.findLocation('1600')
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
