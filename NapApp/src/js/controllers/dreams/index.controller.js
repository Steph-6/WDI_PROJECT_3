angular
.module('napApp')
.controller('DreamsIndexCtrl', DreamsIndexCtrl);

DreamsIndexCtrl.$inject= ['User', '$stateParams', 'CurrentUserService', 'Dream'];
function DreamsIndexCtrl(User, $stateParams, CurrentUserService, Dream) {
  const vm = this;

  Dream
  .query({user: CurrentUserService.currentUser._id})
  .$promise
  .then(data => {
    vm.dreams = data;
  });
}
