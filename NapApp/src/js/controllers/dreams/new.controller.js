angular
  .module('napApp')
  .controller('DreamsNewCtrl', DreamsNewCtrl);

DreamsNewCtrl.$inject = ['$state','User','CurrentUserService'];
function DreamsNewCtrl($state, User, CurrentUserService) {
  const vm  = this;
  vm.user   = CurrentUserService.currentUser;
  vm.today  = new Date();

  vm.dreamsCreate = function dreamsCreate(){
    console.log('creating dreams');
    // return User
    //   .save(vm.user)
    //   .$promise
    //   .then(() => {
    //     $state.go('usersIndex');
    //    });
  };
}
//
// return $http
//       .post(`${API}/users`, vm.user)
//       .then(() => {
//         $state.go('usersIndex');
//       });
