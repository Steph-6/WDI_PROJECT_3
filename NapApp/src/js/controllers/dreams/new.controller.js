angular
  .module('napApp')
  .controller('DreamsNewCtrl', DreamsNewCtrl);

DreamsNewCtrl.$inject = ['$state','User','CurrentUserService'];
function DreamsNewCtrl($state, User, CurrentUserService) {
  const vm     = this;
  vm.user      = CurrentUserService.currentUser;
  const today  = new Date();
  vm.today     = today.toDateString();

  vm.dreamsCreate = function dreamsCreate(){
    console.log('creating dreams');
    // return User
    //   .save(vm.user)
    //   .$promise
    //   .then(() => {
    //     $state.go('usersIndex');
    //    });
  };
}
