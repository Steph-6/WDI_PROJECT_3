angular
.module('napApp')
.config(oauth);

oauth.$inject = ['$authProvider'];

function oauth($authProvider) {
  $authProvider.oauth2({
    name: 'fitbit',
    url: 'http://localhost:7000/login',
    clientId: '2284H4',
    requiredUrlParams: ['scope'],
    responseType: 'token',
    redirectUri: 'http://localhost:7000/dreams',
    scopeDelimiter: ' ',
    scope: ['sleep'],
    authorizationEndpoint: 'https://www.fitbit.com/oauth2/authorize'
  });
}
