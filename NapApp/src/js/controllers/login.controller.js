angular
.module('napApp')
.controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['User','CurrentUserService', '$auth'];
function LoginCtrl(User, CurrentUserService, $auth) {
  const vm = this;

  vm.authenticate = function(provider) {
    $auth.authenticate(provider)
    .then(function(res) {
      console.log( 'success', res);
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
}
