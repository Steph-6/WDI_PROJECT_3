angular
  .module('napApp')
  .controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['User', 'TokenService', 'CurrentUserService'];
function RegisterCtrl(User, TokenService, CurrentUserService){
  const vm = this;

  vm.register = () => {
    console.log('registering');
    User
      .register(vm.user)
      .$promise
      .then(() => {
        CurrentUserService.getUser();
      }, err => {
        console.log(err);
      });
  };
}
