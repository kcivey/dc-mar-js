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
];

function finalNumber(s) {
    const m = s && s.match(/(\d+)$/);
    return m ? Number(m[1]) : s;
}
function address(properties) {
    return new Address(properties);
}


function finalString(s) {
    const m = s && s.match(/(\S+)$/);
    return m ? m[1] : s;
}

class Address {

    constructor(properties) {
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
        const base = this.get('IMAGEURL');
        return base ? [base, this.get('IMAGEDIR'), this.get('IMAGENAME')].join('/') : base;
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

}

module.exports = Address;
