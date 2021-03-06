// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: ['mobileservice', 'mobileservice', 'website', 'mobileservice', 'mobileservice', 'mobileservice'],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/mobileservices/mobileservices/mamaso-domain-test/certificates', '*')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  server: '1.0.6198.205 (rd_rdfe_stable.150316-1043) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '015372415c0a8d95924edf407028460c',
  date: 'Fri, 20 Mar 2015 19:53:15 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/mobileservices/mobileservices/mamaso-domain-test/certificates')
  .reply(200, "[{\"expirationDate\":\"2039-12-31T23:59:59+00:00\",\"issueDate\":\"2015-02-06T20:11:48+00:00\",\"hostNames\":[\"domaintest.mattmason.me\"],\"issuer\":\"Root Agency\",\"subjectName\":\"domaintest.mattmason.me\",\"thumbprint\":\"EC5A24CCE1BA72AE74ADEA2683728ECB3026A7BB\"}]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '247',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: '1.0.6198.205 (rd_rdfe_stable.150316-1043) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '0faa17cb10958ff3b0784f37508eb123',
  date: 'Fri, 20 Mar 2015 19:53:16 GMT' });
 return result; }]];