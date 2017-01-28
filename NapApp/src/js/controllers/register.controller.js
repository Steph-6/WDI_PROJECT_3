angular
  .module('napApp')
  .controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['User'];
function RegisterCtrl(User){
  const vm = this;

  vm.register = () => {
    console.log('registering');
    User
      .register(vm.user)
      .$promise
      .then(data => {
        console.log(data);
      }, err => {
        console.log(err);
      });
  };
}
