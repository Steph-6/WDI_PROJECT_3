angular
.module('napApp')
.controller('DreamsIndexCtrl', DreamsIndexCtrl);

DreamsIndexCtrl.$inject= ['User', '$stateParams', 'CurrentUserService'];
//
function DreamsIndexCtrl(User, $stateParams, CurrentUserService) {
  const vm = this;
  vm.user = CurrentUserService.currentUser;
  //loop through dreamEntry array
  console.log(vm.user.dreamEntry[0].entry);
  // vm.dreams = User.query();
  // console.log(vm.dreams[0]);

  // function dreamsDelete(dream){
  //   User
  //     .delete({ id: dream._id })??
  //     .$promise
  //     .then(() => {
  //       dreamsIndex();
  //     });
  // }(or User.dream.query)
}
