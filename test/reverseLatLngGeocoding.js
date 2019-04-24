require('./nock');
const expect = require('chai').expect;
const {Client, Address} = require('..');
const options = {};

if (process.env.NOCK_OFF !== 'true') {
    options.minInterval = 0; // for testing, when no real HTTP requests are being made
}

describe(
    'reverseLatLngGeocoding',
    function () {
        this.timeout(5000); // allow for pauses between requests in live testing
        describe(
            'return values',
            function () {
                it(
                    'Basic',
                    function (done) {
                        const client = new Client(options);
                        client.reverseLatLngGeocoding(38.8866, -76.9958)
                            .then(function (addresses) {
                                expect(addresses).has.length(5);
                                const address = addresses[0];
                                expect(address).is.instanceof(Address);
                                expect(address.quadrant()).to.equal('SE');
                                expect(address.ward()).to.equal(6);
                                expect(address.anc()).to.equal('6B');
                                expect(address.smd()).to.equal('6B02');
                                expect(address.precinct()).to.equal(89);
                                expect(address.zip()).to.equal('20003');
                                expect(address.fullAddress()).to.equal('222 7TH STREET SE');
                                expect(address.imageUrl()).to.be.null;
                                expect(address.latitude().toFixed(6)).to.equal('38.886607');
                                expect(address.longitude().toFixed(6)).to.equal('-76.995848');
                                expect(address.policeDistrict()).to.equal(1);
                                expect(address.psa()).to.equal(107);
                                expect(address.distance()).to.equal(4.22);
                                done();
                            });
                    }
                );
            }
        );
    }
);
