// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'db1ab6f0-4769-4b27-930e-01e2ef9c123c',
    name: 'Azure SDK sandbox',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=https;AccountName=testmongo101;AccountKey=null';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://testmongo101.file.core.windows.net:443')
  .get('/filetestshare?restype=directory&comp=list')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults ServiceEndpoint=\"https://testmongo101.file.core.windows.net/\" ShareName=\"filetestshare\" DirectoryPath=\"\"><Entries><File><Name>0remotefile</Name><Properties><Content-Length>9</Content-Length></Properties></File><File><Name>1remotefile</Name><Properties><Content-Length>9</Content-Length></Properties></File><File><Name>2remotefile</Name><Properties><Content-Length>9</Content-Length></Properties></File><Directory><Name>newdir</Name><Properties /></Directory></Entries><NextMarker /></EnumerationResults>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '771963ec-001a-00e5-5762-ee41d9000000',
  'x-ms-version': '2014-02-14',
  date: 'Mon, 23 Mar 2015 23:03:15 GMT' });
 return result; }]];