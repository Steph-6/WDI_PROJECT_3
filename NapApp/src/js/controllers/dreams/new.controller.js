angular
  .module('napApp')
  .controller('DreamsNewCtrl', DreamsNewCtrl);

DreamsNewCtrl.$inject = ['$state','User', 'Dream','CurrentUserService'];
function DreamsNewCtrl($state, User, Dream, CurrentUserService) {
  const vm     = this;
  vm.user      = CurrentUserService.currentUser;
  const today  = new Date();
  vm.today     = today.toDateString();
  //save today into dream model

  vm.dreamsCreate = function dreamsCreate(){


    return Dream
      .new(vm.user)
      .$promise
      .then(() => {
        $state.go('dreamsIndex');
      });
  };
}
