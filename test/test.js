const expect = require('chai').expect;
const {Client, Address} = require('..');

describe(
    'findLocation',
    function () {
        describe(
            'return values',
            function () {
                it(
                    '1600 Penn',
                    function (done) {
                        const client = new Client();
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
            }
        );
    }
);
