angular
.module('napApp')
.controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['User', 'TokenService', 'CurrentUserService', '$state'];
function RegisterCtrl(User, TokenService, CurrentUserService, $state){
  const vm = this;

  vm.register = () => {
    User
    .register(vm.user)
    .$promise
    .then(() => {
      CurrentUserService.getUser();
      $state.go('dreamsIndex');
    }, err => {
      console.log(err);
    });
  };
}
