angular
.module('napApp')
.controller('DreamsEditCtrl', DreamsEditCtrl);

DreamsEditCtrl.$inject = ['$state','Dream', 'CurrentUserService', '$stateParams'];
function DreamsEditCtrl($state, Dream, CurrentUserService, $stateParams) {
  const vm  = this;

  Dream
  .get($stateParams)
  .$promise
  .then(data => {
    vm.dream = data;
  });


  vm.dreamsUpdate = function dreamsUpdate() {
    console.log(vm.dream);
    Dream
    .update($stateParams, vm.dream)
    .$promise
    .then(data => {
      console.log(data);
      $state.go('dreamsIndex');
    });
  };
}
