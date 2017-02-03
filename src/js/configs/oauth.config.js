angular
.module('napApp')
.config(oauth);

oauth.$inject = ['$authProvider'];

function oauth($authProvider) {
  $authProvider.oauth2({
    name: 'fitbit',
    url: 'http://localhost:7000/dreams/new',
    clientId: '2284H4',
    requiredUrlParams: ['scope', 'display'],
    responseType: 'token',
    redirectUri: 'http://localhost:7000/dreams/new',
    scopeDelimiter: ' ',
    scope: ['sleep', 'activity', 'nutrition', 'heartrate', 'location'],
    authorizationEndpoint: 'https://www.fitbit.com/oauth2/authorize'
  });
}
