angular
  .module('napApp')
  .factory('AuthInterceptor', AuthInterceptor);

AuthInterceptor.$inject = [];
function AuthInterceptor() {
  return {
    request: function(config) {
      console.log(config);
      return config;
    },
    response: function(res) {
      console.log(res);
      return res;
    }
  };
}
