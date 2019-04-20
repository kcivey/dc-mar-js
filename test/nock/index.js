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

nock('https://citizenatlas.dc.gov:443', {"encodedQueryParams":true})
    .get('/newwebservices/locationverifier.asmx/findLocationBatch2')
    .query({"addr_base64":"MTYwMCBQZW5ufDE3MjYgQ29ubmVjdGljdXR8NDAxIEsgU3Q%3D","addr_separator":"%7C","chunkSequnce_separator":"%7F","f":"json"})
    .reply(200, [0,{"returnCodes":null,"details":"<STRONG>Normalized:</STRONG> 1600 PENN</br><STRONG>Parsed:</STRONG></br><EM>Address Number: </EM>1600</br><EM>Address Number Suffix: </EM></br><EM>Street Name: </EM>PENN</br><EM>Street Type: </EM></br><EM>Quad: </EM></br><STRONG>Possible Standard Street Names: </STRONG></br>PENN,PENNSYLVANIA</br>","returnDataset":{"Table1":[{"ADDRESS_ID":293211,"MARID":293211,"STATUS":"ACTIVE","FULLADDRESS":"1600 PENNSYLVANIA AVENUE NW","ADDRNUM":1600,"ADDRNUMSUFFIX":null,"STNAME":"PENNSYLVANIA","STREET_TYPE":"AVENUE","QUADRANT":"NW","CITY":"WASHINGTON","STATE":"DC","XCOORD":396829.87,"YCOORD":136646.99,"SSL":"0187S   0800","ANC":"ANC 2A","PSA":"Police Service Area 207","WARD":"Ward 2","NBHD_ACTION":" ","CLUSTER_":null,"POLDIST":"Police District - Second District","ROC":"Police Sector 2D3","CENSUS_TRACT":"006202","VOTE_PRCNCT":"Precinct 2","SMD":"SMD 2A01","ZIPCODE":20500,"NATIONALGRID":"18S UJ 23390 07392","ROADWAYSEGID":2522,"FOCUS_IMPROVEMENT_AREA":"NA","HAS_ALIAS":"Y","HAS_CONDO_UNIT":"N","HAS_RES_UNIT":"N","HAS_SSL":"Y","LATITUDE":38.89766766,"LONGITUDE":-77.03654468,"STREETVIEWURL":null,"RES_TYPE":"MIXED USE","WARD_2002":"Ward 2","WARD_2012":"Ward 2","ANC_2002":"ANC 2A","ANC_2012":"ANC 2A","SMD_2002":"SMD 2A05","SMD_2012":"SMD 2A01","IMAGEURL":"http://citizenatlas.dc.gov/mobilevideo","IMAGEDIR":"NO_IMAGE","IMAGENAME":"No_Image_Available.JPG","ConfidenceLevel":70},{"ADDRESS_ID":311021,"MARID":311021,"STATUS":"ACTIVE","FULLADDRESS":"1600 PENNSYLVANIA AVENUE SE","ADDRNUM":1600,"ADDRNUMSUFFIX":null,"STNAME":"PENNSYLVANIA","STREET_TYPE":"AVENUE","QUADRANT":"SE","CITY":"WASHINGTON","STATE":"DC","XCOORD":401572.31,"YCOORD":134589.58,"SSL":"1077    0130","ANC":"ANC 6B","PSA":"Police Service Area 107","WARD":"Ward 6","NBHD_ACTION":" ","CLUSTER_":"Cluster 26","POLDIST":"Police District - First District","ROC":"Police Sector 1D2","CENSUS_TRACT":"006802","VOTE_PRCNCT":"Precinct 91","SMD":"SMD 6B09","ZIPCODE":20003,"NATIONALGRID":"18S UJ 28087 05231","ROADWAYSEGID":9549,"FOCUS_IMPROVEMENT_AREA":"NA","HAS_ALIAS":"N","HAS_CONDO_UNIT":"N","HAS_RES_UNIT":"Y","HAS_SSL":"Y","LATITUDE":38.87913804,"LONGITUDE":-76.98187941,"STREETVIEWURL":null,"RES_TYPE":"RESIDENTIAL","WARD_2002":"Ward 6","WARD_2012":"Ward 6","ANC_2002":"ANC 6B","ANC_2012":"ANC 6B","SMD_2002":"SMD 6B09","SMD_2012":"SMD 6B09","IMAGEURL":"http://citizenatlas.dc.gov/mobilevideo","IMAGEDIR":null,"IMAGENAME":null,"ConfidenceLevel":70}]},"returnBlkAddrDataset":null,"returnCDDataSet":{"Address Return Codes":[{"Component":"Street Type","Parsed & Normalized":"","Assessment":"Missing"},{"Component":"Quad","Parsed & Normalized":"","Assessment":"Missing"},{"Component":"Street Name","Parsed & Normalized":"PENN,PENNSYLVANIA","Assessment":"Valid"},{"Component":"Address Number/Street Name","Parsed & Normalized":"1600 PENN,PENNSYLVANIA","Assessment":"Valid"}]},"UNIT":null,"UNITNUMBER":null,"sourceOperation":"DC Address","processTime":"0 seconds and 0 milliseconds"},{"returnCodes":null,"details":"<STRONG>Normalized:</STRONG> 1726 CONNECTICUT</br><STRONG>Parsed:</STRONG></br><EM>Address Number: </EM>1726</br><EM>Address Number Suffix: </EM></br><EM>Street Name: </EM>CONNECTICUT</br><EM>Street Type: </EM></br><EM>Quad: </EM></br><STRONG>Possible Standard Street Names: </STRONG></br>CONNECTICUT</br>","returnDataset":{"Table1":[{"ADDRESS_ID":242757,"MARID":242757,"STATUS":"ACTIVE","FULLADDRESS":"1726 CONNECTICUT AVENUE NW","ADDRNUM":1726,"ADDRNUMSUFFIX":null,"STNAME":"CONNECTICUT","STREET_TYPE":"AVENUE","QUADRANT":"NW","CITY":"WASHINGTON","STATE":"DC","XCOORD":396005.04,"YCOORD":138400.04,"SSL":"0092    0030","ANC":"ANC 2B","PSA":"Police Service Area 208","WARD":"Ward 2","NBHD_ACTION":" ","CLUSTER_":"Cluster 6","POLDIST":"Police District - Second District","ROC":"Police Sector 2D3","CENSUS_TRACT":"005500","VOTE_PRCNCT":"Precinct 14","SMD":"SMD 2B01","ZIPCODE":20009,"NATIONALGRID":"18S UJ 22604 09163","ROADWAYSEGID":10807,"FOCUS_IMPROVEMENT_AREA":"NA","HAS_ALIAS":"N","HAS_CONDO_UNIT":"N","HAS_RES_UNIT":"N","HAS_SSL":"Y","LATITUDE":38.91345638,"LONGITUDE":-77.04606336,"STREETVIEWURL":"http://maps.google.com/maps?z=16&layer=c&cbll=38.91345638,-77.04606336&cbp=11,251.596232770211,,0,2.09","RES_TYPE":"NON RESIDENTIAL","WARD_2002":"Ward 2","WARD_2012":"Ward 2","ANC_2002":"ANC 2B","ANC_2012":"ANC 2B","SMD_2002":"SMD 2B02","SMD_2012":"SMD 2B01","IMAGEURL":"http://citizenatlas.dc.gov/mobilevideo","IMAGEDIR":"20040822","IMAGENAME":"QM095023.jpg","ConfidenceLevel":70}]},"returnBlkAddrDataset":null,"returnCDDataSet":{"Address Return Codes":[{"Component":"Street Type","Parsed & Normalized":"","Assessment":"Missing"},{"Component":"Quad","Parsed & Normalized":"","Assessment":"Missing"},{"Component":"Street Name","Parsed & Normalized":"CONNECTICUT","Assessment":"Valid"},{"Component":"Address Number/Street Name","Parsed & Normalized":"1726 CONNECTICUT","Assessment":"Valid"}]},"UNIT":null,"UNITNUMBER":null,"sourceOperation":"DC Address","processTime":"0 seconds and 15 milliseconds"},{"returnCodes":null,"details":"<STRONG>Normalized:</STRONG> 401 K ST</br><STRONG>Parsed:</STRONG></br><EM>Address Number: </EM>401</br><EM>Address Number Suffix: </EM></br><EM>Street Name: </EM>K</br><EM>Street Type: </EM>STREET</br><EM>Quad: </EM></br><STRONG>Possible Standard Street Names: </STRONG></br>K</br>","returnDataset":{"Table1":[{"ADDRESS_ID":28157,"MARID":28157,"STATUS":"ACTIVE","FULLADDRESS":"401 K STREET NE","ADDRNUM":401,"ADDRNUMSUFFIX":null,"STNAME":"K","STREET_TYPE":"STREET","QUADRANT":"NE","CITY":"WASHINGTON","STATE":"DC","XCOORD":399966.35,"YCOORD":137153.7,"SSL":"0807    0813","ANC":"ANC 6C","PSA":"Police Service Area 501","WARD":"Ward 6","NBHD_ACTION":" ","CLUSTER_":"Cluster 25","POLDIST":"Police District - Fifth District","ROC":"Police Sector 5D1","CENSUS_TRACT":"010600","VOTE_PRCNCT":"Precinct 83","SMD":"SMD 6C05","ZIPCODE":20002,"NATIONALGRID":"18S UJ 26537 07830","ROADWAYSEGID":11541,"FOCUS_IMPROVEMENT_AREA":"NA","HAS_ALIAS":"N","HAS_CONDO_UNIT":"N","HAS_RES_UNIT":"N","HAS_SSL":"Y","LATITUDE":38.902238,"LONGITUDE":-77.00038794,"STREETVIEWURL":"http://maps.google.com/maps?z=16&layer=c&cbll=38.902238,-77.00038794&cbp=11,104.70492396722,,0,2.09","RES_TYPE":"RESIDENTIAL","WARD_2002":"Ward 6","WARD_2012":"Ward 6","ANC_2002":"ANC 6C","ANC_2012":"ANC 6C","SMD_2002":"SMD 6C04","SMD_2012":"SMD 6C05","IMAGEURL":"http://citizenatlas.dc.gov/mobilevideo","IMAGEDIR":"20040824","IMAGENAME":"MO111507.jpg","ConfidenceLevel":85},{"ADDRESS_ID":237561,"MARID":237561,"STATUS":"ACTIVE","FULLADDRESS":"401 K STREET NW","ADDRNUM":401,"ADDRNUMSUFFIX":null,"STNAME":"K","STREET_TYPE":"STREET","QUADRANT":"NW","CITY":"WASHINGTON","STATE":"DC","XCOORD":398572.95,"YCOORD":137257.03,"SSL":"0515    0157","ANC":"ANC 6E","PSA":"Police Service Area 101","WARD":"Ward 6","NBHD_ACTION":" ","CLUSTER_":"Cluster 8","POLDIST":"Police District - First District","ROC":"Police Sector 1D1","CENSUS_TRACT":"004701","VOTE_PRCNCT":"Precinct 1","SMD":"SMD 6E05","ZIPCODE":20001,"NATIONALGRID":"18S UJ 25146 07964","ROADWAYSEGID":9675,"FOCUS_IMPROVEMENT_AREA":"NA","HAS_ALIAS":"Y","HAS_CONDO_UNIT":"N","HAS_RES_UNIT":"Y","HAS_SSL":"Y","LATITUDE":38.90316767,"LONGITUDE":-77.01645204,"STREETVIEWURL":"http://maps.google.com/maps?z=16&layer=c&cbll=38.90316767,-77.01645204&cbp=11,278.508037292793,,0,2.09","RES_TYPE":"RESIDENTIAL","WARD_2002":"Ward 6","WARD_2012":"Ward 6","ANC_2002":"ANC 6C","ANC_2012":"ANC 6E","SMD_2002":"SMD 6C01","SMD_2012":"SMD 6E05","IMAGEURL":"http://citizenatlas.dc.gov/mobilevideo","IMAGEDIR":"NO_IMAGE","IMAGENAME":"No_Image_Available.JPG","ConfidenceLevel":85},{"ADDRESS_ID":307677,"MARID":307677,"STATUS":"ACTIVE","FULLADDRESS":"401 K STREET SE","ADDRNUM":401,"ADDRNUMSUFFIX":null,"STNAME":"K","STREET_TYPE":"STREET","QUADRANT":"SE","CITY":"WASHINGTON","STATE":"DC","XCOORD":399965.89,"YCOORD":134490.5,"SSL":"0825    0820","ANC":"ANC 6D","PSA":"Police Service Area 106","WARD":"Ward 6","NBHD_ACTION":" ","CLUSTER_":"Cluster 27","POLDIST":"Police District - First District","ROC":"Police Sector 1D3","CENSUS_TRACT":"007200","VOTE_PRCNCT":"Precinct 131","SMD":"SMD 6D07","ZIPCODE":20003,"NATIONALGRID":"18S UJ 26478 05167","ROADWAYSEGID":37660,"FOCUS_IMPROVEMENT_AREA":"NA","HAS_ALIAS":"N","HAS_CONDO_UNIT":"N","HAS_RES_UNIT":"N","HAS_SSL":"Y","LATITUDE":38.87824689,"LONGITUDE":-77.00039311,"STREETVIEWURL":"http://maps.google.com/maps?z=16&layer=c&cbll=38.87824689,-77.00039311&cbp=11,71.8711548457839,,0,2.09","RES_TYPE":"RESIDENTIAL","WARD_2002":"Ward 6","WARD_2012":"Ward 6","ANC_2002":"ANC 6D","ANC_2012":"ANC 6D","SMD_2002":"SMD 6D07","SMD_2012":"SMD 6D07","IMAGEURL":"http://citizenatlas.dc.gov/mobilevideo","IMAGEDIR":"NO_IMAGE","IMAGENAME":"No_Image_Available.JPG","ConfidenceLevel":85}]},"returnBlkAddrDataset":null,"returnCDDataSet":{"Address Return Codes":[{"Component":"Street Type","Parsed & Normalized":"STREET","Assessment":"Valid"},{"Component":"Quad","Parsed & Normalized":"","Assessment":"Missing"},{"Component":"Street Name","Parsed & Normalized":"K","Assessment":"Valid"},{"Component":"Address Number/Street Name","Parsed & Normalized":"401 K","Assessment":"Valid"},{"Component":"Address Number/Street Name/Street Type","Parsed & Normalized":"401 K STREET","Assessment":"Valid"}]},"UNIT":null,"UNITNUMBER":null,"sourceOperation":"DC Address","processTime":"0 seconds and 15 milliseconds"}], [ 'Cache-Control',
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
          'Sat, 20 Apr 2019 03:49:29 GMT',
          'Connection',
          'close' ]);

module.exports = nock;
