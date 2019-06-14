const addressPropertyNames = [
    'ADDRESS_ID',
    'MARID',
    'STATUS',
    'FULLADDRESS',
    'ADDRNUM',
    'ADDRNUMSUFFIX',
    'STNAME',
    'STREET_TYPE',
    'QUADRANT',
    'CITY',
    'STATE',
    'XCOORD',
    'YCOORD',
    'SSL',
    'ANC',
    'PSA',
    'WARD',
    'NBHD_ACTION',
    'CLUSTER_',
    'POLDIST',
    'ROC',
    'CENSUS_TRACT',
    'VOTE_PRCNCT',
    'SMD',
    'ZIPCODE',
    'NATIONALGRID',
    'ROADWAYSEGID',
    'FOCUS_IMPROVEMENT_AREA',
    'HAS_ALIAS',
    'HAS_CONDO_UNIT',
    'HAS_RES_UNIT',
    'HAS_SSL',
    'LATITUDE',
    'LONGITUDE',
    'STREETVIEWURL',
    'RES_TYPE',
    'WARD_2002',
    'WARD_2012',
    'ANC_2002',
    'ANC_2012',
    'SMD_2002',
    'SMD_2012',
    'IMAGEURL',
    'IMAGEDIR',
    'IMAGENAME',
    'ConfidenceLevel',
    'DISTANCE',
];

function finalNumber(s) {
    const m = s && s.match(/(\d+)$/);
    return m ? Number(m[1]) : s;
}

function finalString(s) {
    const m = s && s.match(/(\S+)$/);
    return m ? m[1] : s;
}

class Address {

    constructor(properties) {
        for (const name of Object.keys(properties)) {
            if (!addressPropertyNames.includes(name)) {
                throw new Error(`Invalid address property "${name}"`);
            }
        }
        this.properties = properties;
    }

    get(name) {
        let rawName = name.toUpperCase();
        if (rawName === 'CONFIDENCELEVEL') {
            rawName = 'ConfidenceLevel';
        }
        if (!addressPropertyNames.includes(rawName)) {
            throw new Error(`Invalid address property "${name}"`);
        }
        return this.properties[rawName];
    }

    ward() {
        return finalNumber(this.get('WARD'));
    }

    anc() {
        return finalString(this.get('ANC'));
    }

    smd() {
        return finalString(this.get('SMD'));
    }

    imageUrl() {
        const dir = this.get('IMAGEDIR');
        return dir && dir !== 'NO_IMAGE' ? [this.get('IMAGEURL'), dir, this.get('IMAGENAME')].join('/') : null;
    }

    quadrant() {
        return this.get('QUADRANT');
    }

    latitude() {
        return this.get('LATITUDE');
    }

    longitude() {
        return this.get('LONGITUDE');
    }

    fullAddress() {
        return this.get('FULLADDRESS');
    }

    precinct() {
        return finalNumber(this.get('VOTE_PRCNCT'));
    }

    zip() {
        const zip = this.get('ZIPCODE');
        return zip ? String(zip) : zip;
    }

    policeDistrict() {
        const fullText = this.get('POLDIST');
        let m;
        if (fullText && (m = fullText.match(/(\w+)\s+District$/))) {
            return {
                First: 1,
                Second: 2,
                Third: 3,
                Fourth: 4,
                Fifth: 5,
                Sixth: 6,
                Seventh: 7,
            }[m[1]];
        }
        return fullText;
    }

    psa() {
        return finalNumber(this.get('PSA'));
    }

    // Only for addresses from findLocation*
    confidenceLevel() {
        return this.get('CONFIDENCELEVEL');
    }

    // Only for addresses from reverseLatLngGeocoding
    distance() {
        return this.get('DISTANCE');
    }

    toJSON() {
        return this.properties;
    }

}

module.exports = Address;
