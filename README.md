# dc-mar

[![Build Status](https://travis-ci.org/kcivey/dc-mar-js.svg?branch=master)](https://travis-ci.org/kcivey/dc-mar-js)

## Description

Node.js module for using the [DC Master Address Repository API](https://opendata.dc.gov/pages/mar-webservices).

## Installation

    npm install dc-mar

## Usage example

```js
const Client = require('dc-mar').Client;
const client = new Client();
client.findLocation('1600 Penn')
    .then(function (addresses) {
        const address = addresses[0];
        console.log([
            address.fullAddress(),
            address.smd(),
            address.latitude(),
            address.longitude(),
        ]);
    });

/*
[ '1600 PENNSYLVANIA AVENUE NW',
  '2A01',
  38.89766766,
  -77.03654468 ]
*/
```
