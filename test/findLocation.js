require('./nock');
const expect = require('chai').expect;
const {Client, Address} = require('..');
const options = {};

if (process.env.NOCK_OFF !== 'true') {
    options.minInterval = 0; // for testing, when no real HTTP requests are being made
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
                                expect(wh.latitude().toFixed(6)).to.equal('38.897668');
                                expect(wh.longitude().toFixed(6)).to.equal('-77.036545');
                                expect(wh.confidenceLevel()).to.equal(70);
                                expect(wh.policeDistrict()).to.equal(2);
                                expect(wh.psa()).to.equal(207);
                                expect(JSON.parse(JSON.stringify(wh))).to.deep.equal(wh.properties);
                                done();
                            })
                            .catch(done);
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
                            })
                            .catch(done);
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
                            })
                            .catch(done);
                    }
                );
            }
        );
    }
);
