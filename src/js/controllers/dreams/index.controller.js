angular
.module('napApp')
.controller('DreamsIndexCtrl', DreamsIndexCtrl);

DreamsIndexCtrl.$inject= ['Dream'];
function DreamsIndexCtrl(Dream) {
  const vm = this;

  Dream
    .query()
    .$promise
    .then(data => {
      console.log(data);
      vm.dreams = data;
    });
}
