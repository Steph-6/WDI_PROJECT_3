angular
  .module('napApp')
  .controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['User', 'TokenService'];
function RegisterCtrl(User, TokenService){
  const vm = this;

  vm.register = () => {
    console.log('registering');
    User
      .register(vm.user)
      .$promise
      .then(data => {
        console.log(data);
        TokenService.setToken(data.token);
      }, err => {
        console.log(err);
      });
  };
}
