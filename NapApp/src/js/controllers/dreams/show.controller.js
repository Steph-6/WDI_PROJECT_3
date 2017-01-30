angular
  .module('napApp')
  .controller('DreamsShowCtrl', DreamsShowCtrl);

DreamsShowCtrl.$inject = ['CurrentUserService'];
function DreamsShowCtrl(CurrentUserService) {
  const vm = this;
  vm.user  = CurrentUserService.currentUser;
}
