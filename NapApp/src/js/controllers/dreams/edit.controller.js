angular
  .module('napApp')
  .controller('DreamsEditCtrl', DreamsEditCtrl);

DreamsEditCtrl.$inject = ['$state','User', '$stateParams'];
function DreamsEditCtrl($state, User, $stateParams) {
  const vm  = this;

  vm.dreamsUpdate = function dreamsUpdate() {
    console.log('updating dream');
    // User
    //   .update({ id: $stateParams.id }, vm.user)
    //   .$promise
    //   .then(() => {
    //     $state.go('usersIndex');
    //   });
  };
}
