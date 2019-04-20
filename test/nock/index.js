/* eslint max-len: off, quotes: off, key-spacing: off, comma-spacing: off, array-bracket-spacing: off, indent: off */

const nock = require('nock');

nock('https://citizenatlas.dc.gov:443', {"encodedQueryParams":true})
    .get('/newwebservices/locationverifier.asmx/findLocation2')
    .query({"str":"1600%20Penn","f":"json"})
    .reply(200, {"returnCodes":null,"details":"<STRONG>Normalized:</STRONG> 1600 PENN</br><STRONG>Parsed:</STRONG></br><EM>Address Number: </EM>1600</br><EM>Address Number Suffix: </EM></br><EM>Street Name: </EM>PENN</br><EM>Street Type: </EM></br><EM>Quad: </EM></br><STRONG>Possible Standard Street Names: </STRONG></br>PENN,PENNSYLVANIA</br>","returnDataset":{"Table1":[{"ADDRESS_ID":293211,"MARID":293211,"STATUS":"ACTIVE","FULLADDRESS":"1600 PENNSYLVANIA AVENUE NW","ADDRNUM":1600,"ADDRNUMSUFFIX":null,"STNAME":"PENNSYLVANIA","STREET_TYPE":"AVENUE","QUADRANT":"NW","CITY":"WASHINGTON","STATE":"DC","XCOORD":396829.87,"YCOORD":136646.99,"SSL":"0187S   0800","ANC":"ANC 2A","PSA":"Police Service Area 207","WARD":"Ward 2","NBHD_ACTION":" ","CLUSTER_":null,"POLDIST":"Police District - Second District","ROC":"Police Sector 2D3","CENSUS_TRACT":"006202","VOTE_PRCNCT":"Precinct 2","SMD":"SMD 2A01","ZIPCODE":20500,"NATIONALGRID":"18S UJ 23390 07392","ROADWAYSEGID":2522,"FOCUS_IMPROVEMENT_AREA":"NA","HAS_ALIAS":"Y","HAS_CONDO_UNIT":"N","HAS_RES_UNIT":"N","HAS_SSL":"Y","LATITUDE":38.89766766,"LONGITUDE":-77.03654468,"STREETVIEWURL":null,"RES_TYPE":"MIXED USE","WARD_2002":"Ward 2","WARD_2012":"Ward 2","ANC_2002":"ANC 2A","ANC_2012":"ANC 2A","SMD_2002":"SMD 2A05","SMD_2012":"SMD 2A01","IMAGEURL":"http://citizenatlas.dc.gov/mobilevideo","IMAGEDIR":"NO_IMAGE","IMAGENAME":"No_Image_Available.JPG","ConfidenceLevel":70},{"ADDRESS_ID":311021,"MARID":311021,"STATUS":"ACTIVE","FULLADDRESS":"1600 PENNSYLVANIA AVENUE SE","ADDRNUM":1600,"ADDRNUMSUFFIX":null,"STNAME":"PENNSYLVANIA","STREET_TYPE":"AVENUE","QUADRANT":"SE","CITY":"WASHINGTON","STATE":"DC","XCOORD":401572.31,"YCOORD":134589.58,"SSL":"1077    0130","ANC":"ANC 6B","PSA":"Police Service Area 107","WARD":"Ward 6","NBHD_ACTION":" ","CLUSTER_":"Cluster 26","POLDIST":"Police District - First District","ROC":"Police Sector 1D2","CENSUS_TRACT":"006802","VOTE_PRCNCT":"Precinct 91","SMD":"SMD 6B09","ZIPCODE":20003,"NATIONALGRID":"18S UJ 28087 05231","ROADWAYSEGID":9549,"FOCUS_IMPROVEMENT_AREA":"NA","HAS_ALIAS":"N","HAS_CONDO_UNIT":"N","HAS_RES_UNIT":"Y","HAS_SSL":"Y","LATITUDE":38.87913804,"LONGITUDE":-76.98187941,"STREETVIEWURL":null,"RES_TYPE":"RESIDENTIAL","WARD_2002":"Ward 6","WARD_2012":"Ward 6","ANC_2002":"ANC 6B","ANC_2012":"ANC 6B","SMD_2002":"SMD 6B09","SMD_2012":"SMD 6B09","IMAGEURL":"http://citizenatlas.dc.gov/mobilevideo","IMAGEDIR":null,"IMAGENAME":null,"ConfidenceLevel":70}]},"returnBlkAddrDataset":null,"returnCDDataSet":{"Address Return Codes":[{"Component":"Street Type","Parsed & Normalized":"","Assessment":"Missing"},{"Component":"Quad","Parsed & Normalized":"","Assessment":"Missing"},{"Component":"Street Name","Parsed & Normalized":"PENN,PENNSYLVANIA","Assessment":"Valid"},{"Component":"Address Number/Street Name","Parsed & Normalized":"1600 PENN,PENNSYLVANIA","Assessment":"Valid"}]},"UNIT":null,"UNITNUMBER":null,"sourceOperation":"DC Address","processTime":"0 seconds and 0 milliseconds"}, [ 'Cache-Control',
          'no-cache,no-cache,no-Store',
          'Pragma',
          'no-cache,no-cache',
          'Transfer-Encoding',
          'chunked',
          'Content-Type',
          'application/json; charset=utf-8',
          'Expires',
          '-1,-1',
          'Server',
          'Microsoft-IIS/8.5',
          'X-AspNet-Version',
          '4.0.30319',
          'X-Powered-By',
          'ASP.NET',
          'Date',
          'Fri, 19 Apr 2019 23:51:02 GMT',
          'Connection',
          'close' ]);

nock('https://citizenatlas.dc.gov:443', {"encodedQueryParams":true})
    .get('/newwebservices/locationverifier.asmx/findLocation2')
    .query({"str":"%2A%2A%2A%2A","f":"json"})
    .reply(200, {"returnCodes":"811","details":null,"returnDataset":null,"returnBlkAddrDataset":null,"returnCDDataSet":null,"UNIT":null,"UNITNUMBER":null,"sourceOperation":"DC Place","processTime":null}, [ 'Cache-Control',
          'no-cache,no-cache,no-Store',
          'Pragma',
          'no-cache,no-cache',
          'Transfer-Encoding',
          'chunked',
          'Content-Type',
          'application/json; charset=utf-8',
          'Expires',
          '-1,-1',
          'Server',
          'Microsoft-IIS/8.5',
          'X-AspNet-Version',
          '4.0.30319',
          'X-Powered-By',
          'ASP.NET',
          'Date',
          'Sat, 20 Apr 2019 00:18:26 GMT',
          'Connection',
          'close' ]);

nock('https://citizenatlas.dc.gov:443', {"encodedQueryParams":true})
    .get('/newwebservices/locationverifier.asmx/findLocation2')
    .query({"str":"1600","f":"json"})
    .reply(200, {"returnCodes":"1012","details":null,"returnDataset":{},"returnBlkAddrDataset":null,"returnCDDataSet":null,"UNIT":null,"UNITNUMBER":null,"sourceOperation":"DC AID","processTime":null}, [ 'Cache-Control',
          'no-cache,no-cache,no-Store',
          'Pragma',
          'no-cache,no-cache',
          'Transfer-Encoding',
          'chunked',
          'Content-Type',
          'application/json; charset=utf-8',
          'Expires',
          '-1,-1',
          'Server',
          'Microsoft-IIS/8.5',
          'X-AspNet-Version',
          '4.0.30319',
          'X-Powered-By',
          'ASP.NET',
          'Date',
          'Sat, 20 Apr 2019 01:17:33 GMT',
          'Connection',
          'close' ]);

module.exports = nock;
