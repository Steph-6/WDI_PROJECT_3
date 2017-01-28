angular
  .module('napApp')
  .factory('AuthInterceptor', AuthInterceptor);

AuthInterceptor.$inject = ['API'];
function AuthInterceptor(API) {
  return {
    request: function(config) {
      console.log(config);
      return config;
    },
    response: function(res) {
      console.log(res);
      if (res.config.url.indexOf(API) === 0 && res.data.token) {
        console.log(res.data.token);
      }
      return res;
    }
  };
}
