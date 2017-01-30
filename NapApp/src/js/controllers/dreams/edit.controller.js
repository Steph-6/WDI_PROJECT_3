angular
  .module('napApp')
  .controller('DreamsEditCtrl', DreamsEditCtrl);

DreamsEditCtrl.$inject = ['$state','User', 'CurrentUserService'];
function DreamsEditCtrl($state, User, CurrentUserService) {
  const vm  = this;
  vm.user   = CurrentUserService.currentUser;

  vm.dreamsUpdate = function dreamsUpdate() {
    console.log('updating dream');
    // User
    //   .update({ id: ???.id }, vm.user)
    //   .$promise
    //   .then(() => {
    //     $state.go('usersIndex');
    //   });
  };
}
