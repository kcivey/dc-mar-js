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

## Exports

### Client

This is the main class you'll want to use.

#### constructor

```js
const client = new Client(options);
```

The optional `options` argument is an object with the following properties, which
you probably won't want to change from the defaults unless you have unusual needs:

* `request`: a function that accepts a URL or options object and returns a promise that
resolves to an object derived from the JSON in the body of the HTTP response.
It defaults to the function exported by
[`request-promise-native`](https://www.npmjs.com/package/request-promise-native`).

* `baseUrl`: a string to be used as the base URL for the Master Address Repository API.
It defaults to `https://citizenatlas.dc.gov/newwebservices/locationverifier.asmx/`.

* `minInterval`: an integer setting the minimum interval between API requests in
milliseconds.
It defaults to 3000, which is the interval DC OCTO asks users to adhere to.
Use a lower value only if you're doing testing in which you're mocking the HTTP 
requests so that you're not actually hitting the server.

#### request(operation, parameters)

A utility method used by the methods for 
[the various API operations](http://citizenatlas.dc.gov/newwebservices/locationverifier.asmx).
The `operation` argument is a string, the name of the API operation.
The `parameters` argument is an object, the parameters to be passed to the operation
endpoint.
You won't need this method unless you want to call a method that doesn't (yet) have its
own method defined. The operations called are always the REST versions, which end in
`2` (meaning that `2` is appended to the operation name if it's not already there).
The `request` method returns a promise returned by the `request` function as defined
in the options from the constructor.

#### findLocation(searchString, raw = false)

When given a string representing an address in Washington, DC, returns a promise that resolves
to an array of `Address` objects corresponding to that string. If the optional `raw` argument is
true, the promise instead resolves to the entire object derived from the JSON response, which
may be useful for debugging.

#### findLocationBatch(searchStrings, raw = false)

When given an array of strings representing addresses in Washington, DC, returns a promise
that resolves to an array of arrays of `Address` objects corresponding to those strings, in order.
Like `findLocation`, it has an optional `raw` argument.

### Address

This is the class of the objects returned by `findLocation` and `findLocationBatch`. You probably
won't need to use the constructor directly, but it is exported in case it's needed
(for `instanceof` tests, for example).

#### constructor

```js
const address = new Address(properties);
```

The `properties` argument (required) is an object containing the properties described in the
[MAR data dictionary](https://octo.dc.gov/sites/default/files/dc/sites/octo/publication/attachments/DCGIS_MarDataDictionary_0.pdf),
plus a `ConfidenceLevel` property.

#### properties

An object containing the properties provided in the constructor.
These values should mostly be accessed through other methods like `.ward()` or through `.get()`
if no specific method exists.

#### anc()

Method to get the advisory neighborhood commission, or ANC (string).

#### confidenceLevel()

Method to get the confidenceLevel (integer).

#### fullAddress()

Method to get the fullAddress (string).

#### get(propertyName)

Method to get the value of a property. The `propertyName` argument is a string. The return value is
a string or number, depending on the property, or null.

#### imageUrl()

Method to get the image URL (string).

#### latitude()

Method to get the latitude (float).

#### longitude()

Method to get the longitude (float).

#### precinct()

Method to get the voting precinct (integer).

#### quadrant()

Method to get the quadrant (string).

#### smd()

Method to get the single member district within the ANC (string).

#### ward()

Method to get the ward (integer).

#### zip()

Method to get the ZIP code (string).
