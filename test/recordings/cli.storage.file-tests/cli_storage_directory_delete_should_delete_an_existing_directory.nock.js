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
  .delete('/directorytestshare/newdir?restype=directory')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'edbdb23d-001a-005a-0239-75b0b2000000',
  'x-ms-version': '2014-02-14',
  date: 'Mon, 23 Mar 2015 23:03:00 GMT' });
 return result; }]];