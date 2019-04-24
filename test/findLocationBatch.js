require('./nock');
const expect = require('chai').expect;
const {Client, Address} = require('..');
const options = {};

if (process.env.NOCK_OFF !== 'true') {
    options.minInterval = 0; // for testing, when no real HTTP requests are being made
}

describe(
    'findLocationBatch',
    function () {
        this.timeout(5000); // allow for pauses between requests in live testing
        describe(
            'return values',
            function () {
                it(
                    'Basic',
                    function (done) {
                        const client = new Client(options);
                        client.findLocationBatch(['1600 Penn', '1726 Connecticut', '401 K St'])
                            .then(function (addressSets) {
                                expect(addressSets).has.length(3);
                                const set = addressSets[1];
                                expect(set).has.length(1);
                                const address = set[0];
                                expect(address).is.instanceof(Address);
                                expect(address.quadrant()).to.equal('NW');
                                expect(address.ward()).to.equal(2);
                                expect(address.anc()).to.equal('2B');
                                expect(address.smd()).to.equal('2B01');
                                expect(address.precinct()).to.equal(14);
                                expect(address.zip()).to.equal('20009');
                                expect(address.fullAddress()).to.equal('1726 CONNECTICUT AVENUE NW');
                                expect(address.imageUrl()).to
                                    .equal('http://citizenatlas.dc.gov/mobilevideo/20040822/QM095023.jpg');
                                expect(address.confidenceLevel()).to.equal(70);
                                expect(address.policeDistrict()).to.equal(2);
                                expect(address.psa()).to.equal(208);
                                done();
                            });
                    }
                );
            }
        );
    }
);
