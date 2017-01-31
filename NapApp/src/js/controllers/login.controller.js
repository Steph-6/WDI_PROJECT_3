angular
.module('napApp')
.controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['User', 'CurrentUserService', '$auth', '$http'];
function LoginCtrl(User, CurrentUserService, $auth, $http) {
  const vm = this;

  vm.authenticate = function(provider) {
    $auth.authenticate(provider)
    .then(function(res) {
      console.log( 'success', res);
      vm.getFitbitData(res);
    })
    .catch(function(res) {
      console.log( 'error', res);
    });
  };

  vm.login = () => {
    User
    .login(vm.user)
    .$promise
    .then(() => {
      CurrentUserService.getUser();
    }, err => {
      console.log(err);
    });
  };

  vm.getFitbitData = (token) => {
    vm.access = token.access_token;
    $http
    .get(`https://api.fitbit.com/1/user/-/sleep/date/2017-01-30.json`, {
      headers: {'Authorization': `Bearer ${vm.access}`}
    })
    .then(response => {
      console.log(response);
    });
  };
}
