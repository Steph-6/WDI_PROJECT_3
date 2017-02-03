angular
.module('napApp')
.controller('DreamsShowCtrl', DreamsShowCtrl);

DreamsShowCtrl.$inject = ['CurrentUserService', 'Dream', '$stateParams', '$state', 'DreamData'];
function DreamsShowCtrl(CurrentUserService, Dream, $stateParams, $state, DreamData) {
  const vm = this;

  vm.dream = DreamData;
  vm.dreamEntry = [`${vm.dream.entry}`];

  vm.delete = function dreamsDelete() {
    Dream
    .delete($stateParams)
    .$promise
    .then(() => {
      $state.go('dreamsIndex');
    });
  };
}
