angular
  .module('napApp')
  .controller('DreamsNewCtrl', DreamsNewCtrl);

DreamsNewCtrl.$inject = ['$state','User', 'Dream', 'CurrentUserService'];
function DreamsNewCtrl($state, User, Dream, CurrentUserService) {
  const vm     = this;
  const today  = new Date();
  vm.today     = today.toDateString();
  vm.user      = CurrentUserService.currentUser;

  vm.dreamsCreate = function dreamsCreate(){
    return Dream
      .save({ dream: vm.dream })
      .$promise
      .then(dream => {
        console.log(dream);
        $state.go('dreamsIndex');
      });
  };
}
