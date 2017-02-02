angular
.module('napApp')
.controller('DreamsShowCtrl', DreamsShowCtrl);

DreamsShowCtrl.$inject = ['CurrentUserService', 'Dream', '$stateParams', '$state'];
function DreamsShowCtrl(CurrentUserService, Dream, $stateParams, $state) {
  const vm = this;
  dreamsShow();

  function dreamsShow() {
    Dream
    .get($stateParams)
    .$promise
    .then(data => {
      vm.dream = data;
      // $(function() {
      //   $('.typeThisPlease').typed({
      //     strings: [vm.dream.entry],
      //     typeSpeed: 0
      //   });
      // });
    });
  }

  vm.delete = function dreamsDelete() {
    Dream
    .delete($stateParams)
    .$promise
    .then(() => {
      $state.go('dreamsIndex');
    });
  };
}
