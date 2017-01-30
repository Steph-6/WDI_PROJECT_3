angular
  .module('napApp')
  .controller('DreamsEditCtrl', DreamsEditCtrl);

DreamsEditCtrl.$inject = ['$state','User'];
function DreamsEditCtrl($state, User) {
  const vm  = this;
  vm.dreamsUpdate = function dreamsUpdate() {
    console.log('updating dream');
  };
}
