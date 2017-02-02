angular
  .module('napApp')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', 'CurrentUserService', '$state', '$scope'];
function MainCtrl($rootScope, CurrentUserService, $state, $scope) {
  const vm = this;

  $rootScope.$on('loggedIn', () => {
    vm.user  = CurrentUserService.currentUser;
  });

  $rootScope.$on('loggedOut', () => {
    vm.user  = null;
    $state.go('login');
  });

  vm.logout = () => {
    CurrentUserService.removeUser();
  };
}
