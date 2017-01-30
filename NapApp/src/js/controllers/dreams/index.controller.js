angular
.module('napApp')
.controller('DreamsIndexCtrl', DreamsIndexCtrl);

DreamsIndexCtrl.$inject= ['Dream'];

function DreamsIndexCtrl(Dream) {
  const vm = this;
  vm.dreams = Dream.query();
}
