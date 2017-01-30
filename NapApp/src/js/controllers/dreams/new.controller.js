angular
  .module('napApp')
  .controller('DreamsNewCtrl', DreamsNewCtrl);

DreamsNewCtrl.$inject = ['$http', 'API', '$state'];
function DreamsNewCtrl() {
  const vm  = this;
  vm.dreamsCreate = function dreamsCreate(){
    
  }
}
