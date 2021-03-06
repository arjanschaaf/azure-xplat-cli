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
    registeredProviders: ['website'],
    registeredResourceNamespaces: ['microsoft.insights', 'successbricks.cleardb', 'microsoft.web', 'microsoft.web', 'microsoft.sql'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'South Central US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://gallery.azure.com:443')
  .get('/Microsoft.Gallery/galleryitems/Microsoft.ASPNETStarterSite.0.2.2-preview')
  .reply(200, "{\"identity\":\"Microsoft.ASPNETStarterSite.0.2.2-preview\",\"publisher\":\"Microsoft\",\"publisherDisplayName\":\"Microsoft\",\"itemName\":\"ASPNETStarterSite\",\"itemDisplayName\":\"ASP.NET Starter Site\",\"version\":\"0.2.2-preview\",\"summary\":\"Get started with this ready-to-use ASP.NET website template including tab interface and login support. This can be further customized to build a website for a small business or a personal website\",\"longSummary\":\"Get started with this ready-to-use ASP.NET website template including tab interface and login support. This can be further customized to build a website for a small business or a personal website\",\"description\":\"<p>Get started with this ready-to-use ASP.NET website template including tab interface and login support. This can be further customized to build a website for a small business or a personal website.</p>\",\"resourceGroupName\":null,\"definitionTemplates\":{\"uiDefinitionFileUrl\":\"https://gallerystoreprodch.blob.core.windows.net/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/UIDefinition.json\",\"defaultDeploymentTemplateId\":\"website_NewHostingPlan-Default\",\"deploymentTemplateFileUrls\":{\"website_ExistingHostingPlan\":\"https://gallerystoreprodch.blob.core.windows.net/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_ExistingHostingPlan.json\",\"website_NewHostingPlan\":\"https://gallerystoreprodch.blob.core.windows.net/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_NewHostingPlan.json\",\"website_NewHostingPlan-Default\":\"https://gallerystoreprodch.blob.core.windows.net/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_NewHostingPlan-Default.json\",\"website_NewHostingPlan_BasicStandard\":\"https://gallerystoreprodch.blob.core.windows.net/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_NewHostingPlan_BasicStandard.json\"}},\"categoryIds\":[\"web\",\"starterSite\"],\"screenshotUrls\":[],\"links\":[{\"id\":\"0\",\"displayName\":\"About Microsoft\",\"uri\":\"http://www.microsoft.com/\"},{\"id\":\"1\",\"displayName\":\"Documentation\",\"uri\":\"http://www.microsoft.com/web/category/all\"}],\"iconFileUrls\":{\"small\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Small.png\",\"medium\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Medium.png\",\"large\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Large.png\",\"wide\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Wide.png\",\"hero\":null}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-content-type-options': 'nosniff',
  'x-xss-protection': '1; mode=block',
  'x-ms-version': '4.14.0.133 (a2a340b.150108-1230)',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'browserId=dfeff71daa2b4c7286c2551bdeda5044; domain=gallery.azure.com; path=/; secure; HttpOnly' ],
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 23 Mar 2015 01:00:54 GMT',
  'content-length': '2978' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.206 (rd_rdfe_stable.150320-1537) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '1c7fba52241a8cb399dcdecb6b4a70dc',
  date: 'Mon, 23 Mar 2015 01:00:54 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplatTestGCreate6620?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGCreate6620' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '31993',
  'x-ms-request-id': '16e09640-951c-4274-86e3-6e5f7754ae4e',
  'x-ms-correlation-request-id': '16e09640-951c-4274-86e3-6e5f7754ae4e',
  'x-ms-routing-request-id': 'WESTUS:20150323T010055Z:16e09640-951c-4274-86e3-6e5f7754ae4e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 23 Mar 2015 01:00:54 GMT',
  'content-length': '112' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.206 (rd_rdfe_stable.150320-1537) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '3dd678f7efbf8982b2c69a4d71bb64de',
  date: 'Mon, 23 Mar 2015 01:00:55 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplatTestGCreate6620?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGCreate6620\",\"name\":\"xplatTestGCreate6620\",\"location\":\"southcentralus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '211',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-request-id': 'd15b3dd4-594c-4fe5-b5d8-307b3f0e1f6a',
  'x-ms-correlation-request-id': 'd15b3dd4-594c-4fe5-b5d8-307b3f0e1f6a',
  'x-ms-routing-request-id': 'WESTUS:20150323T010056Z:d15b3dd4-594c-4fe5-b5d8-307b3f0e1f6a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 23 Mar 2015 01:00:56 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.206 (rd_rdfe_stable.150320-1537) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '788cf34003b385c89e131531351c04a9',
  date: 'Mon, 23 Mar 2015 01:00:57 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplatTestGCreate6620/deployments/fakedDeploymentName/validate?api-version=2014-04-01-preview', '*')
  .reply(200, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGCreate6620/deployments/fakedDeploymentName\",\"name\":\"fakedDeploymentName\",\"properties\":{\"templateLink\":{\"uri\":\"https://gallerystoreprodch.blob.core.windows.net/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_NewHostingPlan-Default.json\",\"contentVersion\":\"1.0.0.0\"},\"parameters\":{\"siteName\":{\"type\":\"String\",\"value\":\"xDeploymentTestSite1238\"},\"hostingPlanName\":{\"type\":\"String\",\"value\":\"xDeploymentTestHost21513\"},\"siteLocation\":{\"type\":\"String\",\"value\":\"West US\"},\"sku\":{\"type\":\"String\",\"value\":\"Free\"},\"workerSize\":{\"type\":\"String\",\"value\":\"0\"}},\"mode\":\"Incremental\",\"provisioningState\":\"Accepted\",\"timestamp\":\"2015-03-23T01:00:58.371556Z\",\"duration\":\"PT0S\",\"correlationId\":\"fc3cda62-720d-4dfa-86c0-22aec2b01a07\",\"providers\":[{\"namespace\":\"Microsoft.Web\",\"resourceTypes\":[{\"resourceType\":\"serverfarms\",\"locations\":[\"westus\"]},{\"resourceType\":\"sites\",\"locations\":[\"westus\"]},{\"resourceType\":\"sites/Extensions\",\"locations\":[null]}]},{\"namespace\":\"microsoft.insights\",\"resourceTypes\":[{\"resourceType\":\"autoscalesettings\",\"locations\":[\"eastus\"]},{\"resourceType\":\"alertrules\",\"locations\":[\"eastus\"]},{\"resourceType\":\"components\",\"locations\":[\"centralus\"]}]}],\"dependencies\":[{\"dependsOn\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGCreate6620/providers/Microsoft.Web/serverfarms/xDeploymentTestHost21513\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost21513\"}],\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGCreate6620/providers/Microsoft.Web/sites/xDeploymentTestSite1238\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite1238\"},{\"dependsOn\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGCreate6620/providers/Microsoft.Web/Sites/xDeploymentTestSite1238\",\"resourceType\":\"Microsoft.Web/Sites\",\"resourceName\":\"xDeploymentTestSite1238\"}],\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGCreate6620/providers/Microsoft.Web/sites/xDeploymentTestSite1238/Extensions/MSDeploy\",\"resourceType\":\"Microsoft.Web/sites/Extensions\",\"resourceName\":\"xDeploymentTestSite1238/MSDeploy\"},{\"dependsOn\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGCreate6620/providers/Microsoft.Web/serverfarms/xDeploymentTestHost21513\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost21513\"}],\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGCreate6620/providers/microsoft.insights/autoscalesettings/xDeploymentTestHost21513-xplatTestGCreate6620\",\"resourceType\":\"microsoft.insights/autoscalesettings\",\"resourceName\":\"xDeploymentTestHost21513-xplatTestGCreate6620\"},{\"dependsOn\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGCreate6620/providers/Microsoft.Web/sites/xDeploymentTestSite1238\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite1238\"}],\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGCreate6620/providers/microsoft.insights/alertrules/ServerErrors xDeploymentTestSite1238\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"ServerErrors xDeploymentTestSite1238\"},{\"dependsOn\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGCreate6620/providers/Microsoft.Web/sites/xDeploymentTestSite1238\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite1238\"}],\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGCreate6620/providers/microsoft.insights/alertrules/ForbiddenRequests xDeploymentTestSite1238\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"ForbiddenRequests xDeploymentTestSite1238\"},{\"dependsOn\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGCreate6620/providers/Microsoft.Web/serverfarms/xDeploymentTestHost21513\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost21513\"}],\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGCreate6620/providers/microsoft.insights/alertrules/CPUHigh xDeploymentTestHost21513\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"CPUHigh xDeploymentTestHost21513\"},{\"dependsOn\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGCreate6620/providers/Microsoft.Web/serverfarms/xDeploymentTestHost21513\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost21513\"}],\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGCreate6620/providers/microsoft.insights/alertrules/LongHttpQueue xDeploymentTestHost21513\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"LongHttpQueue xDeploymentTestHost21513\"},{\"dependsOn\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGCreate6620/providers/Microsoft.Web/sites/xDeploymentTestSite1238\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite1238\"}],\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGCreate6620/providers/microsoft.insights/components/xDeploymentTestSite1238\",\"resourceType\":\"microsoft.insights/components\",\"resourceName\":\"xDeploymentTestSite1238\"}]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-request-id': 'fc3cda62-720d-4dfa-86c0-22aec2b01a07',
  'x-ms-correlation-request-id': 'fc3cda62-720d-4dfa-86c0-22aec2b01a07',
  'x-ms-routing-request-id': 'WESTUS:20150323T010058Z:fc3cda62-720d-4dfa-86c0-22aec2b01a07',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 23 Mar 2015 01:00:58 GMT',
  'content-length': '5474' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.206 (rd_rdfe_stable.150320-1537) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '26bf188587978c81820d684b387ba3f9',
  date: 'Mon, 23 Mar 2015 01:00:58 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplatTestGCreate6620?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFRFU1RHQ1JFQVRFNjYyMC1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-request-id': 'a1fa9b0a-4cd0-439d-be19-2935e4e3d66d',
  'x-ms-correlation-request-id': 'a1fa9b0a-4cd0-439d-be19-2935e4e3d66d',
  'x-ms-routing-request-id': 'WESTUS:20150323T010100Z:a1fa9b0a-4cd0-439d-be19-2935e4e3d66d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 23 Mar 2015 01:00:59 GMT',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.206 (rd_rdfe_stable.150320-1537) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '92325082feb08accb53cf49e150e9d74',
  date: 'Mon, 23 Mar 2015 01:01:16 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFRFU1RHQ1JFQVRFNjYyMC1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFRFU1RHQ1JFQVRFNjYyMC1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '31992',
  'x-ms-request-id': 'aa76ca37-1de1-46e6-a328-9d08aea31829',
  'x-ms-correlation-request-id': 'aa76ca37-1de1-46e6-a328-9d08aea31829',
  'x-ms-routing-request-id': 'WESTUS:20150323T010117Z:aa76ca37-1de1-46e6-a328-9d08aea31829',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 23 Mar 2015 01:01:17 GMT',
  'content-length': '0' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['xplatTestGCreate6620'];};