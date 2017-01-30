angular
  .module('napApp')
  .controller('DreamsNewCtrl', DreamsNewCtrl);

DreamsNewCtrl.$inject = ['$http', 'API', '$state','User','CurrentUserService'];
function DreamsNewCtrl(http, API, $state, User, CurrentUserService) {
  const vm  = this;
  vm.user = CurrentUserService.currentUser;
  vm.dreamsCreate = function dreamsCreate(){
    
  };
}
//
// return $http
//       .post(`${API}/users`, vm.user)
//       .then(() => {
//         $state.go('usersIndex');
//       });
