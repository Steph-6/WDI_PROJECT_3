angular
  .module('napApp')
  .controller('DreamsShowCtrl', DreamsShowCtrl);

DreamsShowCtrl.$inject = ['CurrentUserService', 'Dream', '$stateParams'];
function DreamsShowCtrl(CurrentUserService, Dream, $stateParams) {
  const vm = this;

  Dream
    .get($stateParams)
    .$promise
    .then(data => {
      vm.dream = data;
    });

}
