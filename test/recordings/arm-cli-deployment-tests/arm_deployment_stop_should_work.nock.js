// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '3ca49042-782a-4cc9-89b5-ee1b487fe115',
    name: 'AzSdkCore1',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '1449d5b7-8a83-47db-ae4c-9b03e888bad0',
    registeredProviders: ['website'],
    registeredResourceNamespaces: ['microsoft.insights', 'successbricks.cleardb', 'microsoft.web'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'South Central US';
}

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
  'set-cookie': [ 'browserId=93d2bdae8f3f4afc81ea297da259ca29; domain=gallery.azure.com; path=/; secure; HttpOnly' ],
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  date: 'Thu, 12 Mar 2015 17:52:25 GMT',
  'content-length': '2978' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '5f49719063497407a157df8cc8896be2',
  date: 'Thu, 12 Mar 2015 17:52:26 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/xDeploymentTestGroup5956?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xDeploymentTestGroup5956' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '31991',
  'x-ms-request-id': '490010c4-d5e9-4395-86cb-96e22436afdb',
  'x-ms-correlation-request-id': '490010c4-d5e9-4395-86cb-96e22436afdb',
  'x-ms-routing-request-id': 'WESTUS:20150312T175226Z:490010c4-d5e9-4395-86cb-96e22436afdb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 12 Mar 2015 17:52:26 GMT',
  'content-length': '116' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'c170d6af597d7bca978f672ee9d14dcb',
  date: 'Thu, 12 Mar 2015 17:52:26 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/xDeploymentTestGroup5956?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xDeploymentTestGroup5956\",\"name\":\"xDeploymentTestGroup5956\",\"location\":\"southcentralus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '219',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-request-id': '59ba2ab9-4558-4e95-b466-c4dde4f2cea1',
  'x-ms-correlation-request-id': '59ba2ab9-4558-4e95-b466-c4dde4f2cea1',
  'x-ms-routing-request-id': 'WESTUS:20150312T175227Z:59ba2ab9-4558-4e95-b466-c4dde4f2cea1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 12 Mar 2015 17:52:27 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'f39d4b7261df7484be962f4c4fe5d23c',
  date: 'Thu, 12 Mar 2015 17:52:27 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/xDeploymentTestGroup5956/deployments/Deploy1399/validate?api-version=2014-04-01-preview', '*')
  .reply(200, "{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xDeploymentTestGroup5956/deployments/Deploy1399\",\"name\":\"Deploy1399\",\"properties\":{\"templateLink\":{\"uri\":\"https://gallerystoreprodch.blob.core.windows.net/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_NewHostingPlan-Default.json\",\"contentVersion\":\"1.0.0.0\"},\"parameters\":{\"siteName\":{\"type\":\"String\",\"value\":\"xDeploymentTestSite11163\"},\"hostingPlanName\":{\"type\":\"String\",\"value\":\"xDeploymentTestHost24978\"},\"siteLocation\":{\"type\":\"String\",\"value\":\"West US\"},\"sku\":{\"type\":\"String\",\"value\":\"Free\"},\"workerSize\":{\"type\":\"String\",\"value\":\"0\"}},\"mode\":\"Incremental\",\"provisioningState\":\"Accepted\",\"timestamp\":\"2015-03-12T17:52:29.0106577Z\",\"duration\":\"PT0S\",\"correlationId\":\"e0911b11-0e38-4856-8e7b-caec78ee7fbc\",\"providers\":[{\"namespace\":\"Microsoft.Web\",\"resourceTypes\":[{\"resourceType\":\"serverfarms\",\"locations\":[\"westus\"]},{\"resourceType\":\"sites\",\"locations\":[\"westus\"]},{\"resourceType\":\"sites/Extensions\",\"locations\":[null]}]},{\"namespace\":\"microsoft.insights\",\"resourceTypes\":[{\"resourceType\":\"autoscalesettings\",\"locations\":[\"eastus\"]},{\"resourceType\":\"alertrules\",\"locations\":[\"eastus\"]},{\"resourceType\":\"components\",\"locations\":[\"centralus\"]}]}],\"dependencies\":[{\"dependsOn\":[{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xDeploymentTestGroup5956/providers/Microsoft.Web/serverfarms/xDeploymentTestHost24978\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost24978\"}],\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xDeploymentTestGroup5956/providers/Microsoft.Web/sites/xDeploymentTestSite11163\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite11163\"},{\"dependsOn\":[{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xDeploymentTestGroup5956/providers/Microsoft.Web/Sites/xDeploymentTestSite11163\",\"resourceType\":\"Microsoft.Web/Sites\",\"resourceName\":\"xDeploymentTestSite11163\"}],\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xDeploymentTestGroup5956/providers/Microsoft.Web/sites/xDeploymentTestSite11163/Extensions/MSDeploy\",\"resourceType\":\"Microsoft.Web/sites/Extensions\",\"resourceName\":\"xDeploymentTestSite11163/MSDeploy\"},{\"dependsOn\":[{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xDeploymentTestGroup5956/providers/Microsoft.Web/serverfarms/xDeploymentTestHost24978\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost24978\"}],\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xDeploymentTestGroup5956/providers/microsoft.insights/autoscalesettings/xDeploymentTestHost24978-xDeploymentTestGroup5956\",\"resourceType\":\"microsoft.insights/autoscalesettings\",\"resourceName\":\"xDeploymentTestHost24978-xDeploymentTestGroup5956\"},{\"dependsOn\":[{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xDeploymentTestGroup5956/providers/Microsoft.Web/sites/xDeploymentTestSite11163\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite11163\"}],\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xDeploymentTestGroup5956/providers/microsoft.insights/alertrules/ServerErrors xDeploymentTestSite11163\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"ServerErrors xDeploymentTestSite11163\"},{\"dependsOn\":[{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xDeploymentTestGroup5956/providers/Microsoft.Web/sites/xDeploymentTestSite11163\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite11163\"}],\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xDeploymentTestGroup5956/providers/microsoft.insights/alertrules/ForbiddenRequests xDeploymentTestSite11163\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"ForbiddenRequests xDeploymentTestSite11163\"},{\"dependsOn\":[{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xDeploymentTestGroup5956/providers/Microsoft.Web/serverfarms/xDeploymentTestHost24978\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost24978\"}],\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xDeploymentTestGroup5956/providers/microsoft.insights/alertrules/CPUHigh xDeploymentTestHost24978\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"CPUHigh xDeploymentTestHost24978\"},{\"dependsOn\":[{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xDeploymentTestGroup5956/providers/Microsoft.Web/serverfarms/xDeploymentTestHost24978\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost24978\"}],\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xDeploymentTestGroup5956/providers/microsoft.insights/alertrules/LongHttpQueue xDeploymentTestHost24978\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"LongHttpQueue xDeploymentTestHost24978\"},{\"dependsOn\":[{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xDeploymentTestGroup5956/providers/Microsoft.Web/sites/xDeploymentTestSite11163\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite11163\"}],\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xDeploymentTestGroup5956/providers/microsoft.insights/components/xDeploymentTestSite11163\",\"resourceType\":\"microsoft.insights/components\",\"resourceName\":\"xDeploymentTestSite11163\"}]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-request-id': 'e0911b11-0e38-4856-8e7b-caec78ee7fbc',
  'x-ms-correlation-request-id': 'e0911b11-0e38-4856-8e7b-caec78ee7fbc',
  'x-ms-routing-request-id': 'WESTUS:20150312T175229Z:e0911b11-0e38-4856-8e7b-caec78ee7fbc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 12 Mar 2015 17:52:29 GMT',
  'content-length': '5552' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'fd7579e7a85b71d6b38f4e98b145a056',
  date: 'Thu, 12 Mar 2015 17:52:28 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/xDeploymentTestGroup5956/deployments/Deploy1399?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xDeploymentTestGroup5956/deployments/Deploy1399\",\"name\":\"Deploy1399\",\"properties\":{\"templateLink\":{\"uri\":\"https://gallerystoreprodch.blob.core.windows.net/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_NewHostingPlan-Default.json\",\"contentVersion\":\"1.0.0.0\"},\"parameters\":{\"siteName\":{\"type\":\"String\",\"value\":\"xDeploymentTestSite11163\"},\"hostingPlanName\":{\"type\":\"String\",\"value\":\"xDeploymentTestHost24978\"},\"siteLocation\":{\"type\":\"String\",\"value\":\"West US\"},\"sku\":{\"type\":\"String\",\"value\":\"Free\"},\"workerSize\":{\"type\":\"String\",\"value\":\"0\"}},\"mode\":\"Incremental\",\"provisioningState\":\"Accepted\",\"timestamp\":\"2015-03-12T17:52:30.7651337Z\",\"duration\":\"PT0.2893721S\",\"correlationId\":\"0f8d5950-65b9-4431-9962-9bc2417be24e\",\"providers\":[{\"namespace\":\"Microsoft.Web\",\"resourceTypes\":[{\"resourceType\":\"serverfarms\",\"locations\":[\"westus\"]},{\"resourceType\":\"sites\",\"locations\":[\"westus\"]},{\"resourceType\":\"sites/Extensions\",\"locations\":[null]}]},{\"namespace\":\"microsoft.insights\",\"resourceTypes\":[{\"resourceType\":\"autoscalesettings\",\"locations\":[\"eastus\"]},{\"resourceType\":\"alertrules\",\"locations\":[\"eastus\"]},{\"resourceType\":\"components\",\"locations\":[\"centralus\"]}]}],\"dependencies\":[{\"dependsOn\":[{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xDeploymentTestGroup5956/providers/Microsoft.Web/serverfarms/xDeploymentTestHost24978\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost24978\"}],\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xDeploymentTestGroup5956/providers/Microsoft.Web/sites/xDeploymentTestSite11163\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite11163\"},{\"dependsOn\":[{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xDeploymentTestGroup5956/providers/Microsoft.Web/Sites/xDeploymentTestSite11163\",\"resourceType\":\"Microsoft.Web/Sites\",\"resourceName\":\"xDeploymentTestSite11163\"}],\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xDeploymentTestGroup5956/providers/Microsoft.Web/sites/xDeploymentTestSite11163/Extensions/MSDeploy\",\"resourceType\":\"Microsoft.Web/sites/Extensions\",\"resourceName\":\"xDeploymentTestSite11163/MSDeploy\"},{\"dependsOn\":[{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xDeploymentTestGroup5956/providers/Microsoft.Web/serverfarms/xDeploymentTestHost24978\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost24978\"}],\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xDeploymentTestGroup5956/providers/microsoft.insights/autoscalesettings/xDeploymentTestHost24978-xDeploymentTestGroup5956\",\"resourceType\":\"microsoft.insights/autoscalesettings\",\"resourceName\":\"xDeploymentTestHost24978-xDeploymentTestGroup5956\"},{\"dependsOn\":[{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xDeploymentTestGroup5956/providers/Microsoft.Web/sites/xDeploymentTestSite11163\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite11163\"}],\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xDeploymentTestGroup5956/providers/microsoft.insights/alertrules/ServerErrors xDeploymentTestSite11163\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"ServerErrors xDeploymentTestSite11163\"},{\"dependsOn\":[{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xDeploymentTestGroup5956/providers/Microsoft.Web/sites/xDeploymentTestSite11163\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite11163\"}],\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xDeploymentTestGroup5956/providers/microsoft.insights/alertrules/ForbiddenRequests xDeploymentTestSite11163\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"ForbiddenRequests xDeploymentTestSite11163\"},{\"dependsOn\":[{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xDeploymentTestGroup5956/providers/Microsoft.Web/serverfarms/xDeploymentTestHost24978\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost24978\"}],\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xDeploymentTestGroup5956/providers/microsoft.insights/alertrules/CPUHigh xDeploymentTestHost24978\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"CPUHigh xDeploymentTestHost24978\"},{\"dependsOn\":[{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xDeploymentTestGroup5956/providers/Microsoft.Web/serverfarms/xDeploymentTestHost24978\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost24978\"}],\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xDeploymentTestGroup5956/providers/microsoft.insights/alertrules/LongHttpQueue xDeploymentTestHost24978\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"LongHttpQueue xDeploymentTestHost24978\"},{\"dependsOn\":[{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xDeploymentTestGroup5956/providers/Microsoft.Web/sites/xDeploymentTestSite11163\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite11163\"}],\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xDeploymentTestGroup5956/providers/microsoft.insights/components/xDeploymentTestSite11163\",\"resourceType\":\"microsoft.insights/components\",\"resourceName\":\"xDeploymentTestSite11163\"}]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1192',
  'x-ms-request-id': '0f8d5950-65b9-4431-9962-9bc2417be24e',
  'x-ms-correlation-request-id': '0f8d5950-65b9-4431-9962-9bc2417be24e',
  'x-ms-routing-request-id': 'WESTUS:20150312T175230Z:0f8d5950-65b9-4431-9962-9bc2417be24e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 12 Mar 2015 17:52:30 GMT',
  'content-length': '5560' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '49be8ea26e4470298479087f127c7db8',
  date: 'Thu, 12 Mar 2015 17:52:30 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/xDeploymentTestGroup5956/deployments/Deploy1399/cancel?api-version=2014-04-01-preview')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-request-id': '65c557ef-87de-4ecc-b11a-22bf8ddbd74d',
  'x-ms-correlation-request-id': '65c557ef-87de-4ecc-b11a-22bf8ddbd74d',
  'x-ms-routing-request-id': 'WESTUS:20150312T175231Z:65c557ef-87de-4ecc-b11a-22bf8ddbd74d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 12 Mar 2015 17:52:31 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '21f579f2f73979178569bfa115d8cbb7',
  date: 'Thu, 12 Mar 2015 17:52:32 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/xDeploymentTestGroup5956?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDU5NTYtU09VVEhDRU5UUkFMVVMiLCJqb2JMb2NhdGlvbiI6InNvdXRoY2VudHJhbHVzIn0?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1192',
  'x-ms-request-id': '50796697-b5d8-4a7b-a43d-49eeda0dd640',
  'x-ms-correlation-request-id': '50796697-b5d8-4a7b-a43d-49eeda0dd640',
  'x-ms-routing-request-id': 'WESTUS:20150312T175233Z:50796697-b5d8-4a7b-a43d-49eeda0dd640',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 12 Mar 2015 17:52:33 GMT',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'befce9d0f2e5731ca96628652e2bcb41',
  date: 'Thu, 12 Mar 2015 17:52:48 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDU5NTYtU09VVEhDRU5UUkFMVVMiLCJqb2JMb2NhdGlvbiI6InNvdXRoY2VudHJhbHVzIn0?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDU5NTYtU09VVEhDRU5UUkFMVVMiLCJqb2JMb2NhdGlvbiI6InNvdXRoY2VudHJhbHVzIn0?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '31990',
  'x-ms-request-id': '6176a23e-03bd-4ea7-97b3-64171256b653',
  'x-ms-correlation-request-id': '6176a23e-03bd-4ea7-97b3-64171256b653',
  'x-ms-routing-request-id': 'WESTUS:20150312T175249Z:6176a23e-03bd-4ea7-97b3-64171256b653',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 12 Mar 2015 17:52:48 GMT',
  'content-length': '0' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['xDeploymentTestSite11163','xDeploymentTestHost24978','xDeploymentTestGroup5956','Deploy1399'];};