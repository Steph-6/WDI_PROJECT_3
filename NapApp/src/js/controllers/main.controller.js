angular
  .module('napApp')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', 'CurrentUserService', '$state', 'TokenService'];
function MainCtrl($rootScope, CurrentUserService, $state, TokenService) {
  const vm = this;

  vm.navOpen = false;
  vm.hasUser = TokenService.getToken();

  $rootScope.$on('loggedIn', () => {
    vm.user    = CurrentUserService.currentUser;
    vm.hasUser = true;
  });

  $rootScope.$on('loggedOut', () => {
    vm.user    = null;
    vm.hasUser = null;
    $state.go('login');
  });

  vm.logout = () => {
    CurrentUserService.removeUser();
  };

  $rootScope.$on('$stateChangeSuccess', function () {
    vm.navOpen = false;
  });
}
