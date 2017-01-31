angular
.module('napApp')
.controller('DreamsNewCtrl', DreamsNewCtrl);

DreamsNewCtrl.$inject = ['$state','User', 'Dream', 'CurrentUserService', '$auth', '$http'];
function DreamsNewCtrl($state, User, Dream, CurrentUserService, $auth, $http) {
  const vm     = this;
  const today  = new Date();
  vm.today     = today.toDateString();
  vm.user      = CurrentUserService.currentUser;

  vm.dreamsCreate = function dreamsCreate(){
    return Dream
    .save({ dream: { entry: vm.dream.entry, totalSleep: vm.totalSleep, noSleeps: vm.noOfSleeps, timeInBed: vm.timeInBed }})
    .$promise
    .then(dream => {
      console.log(dream);
      $state.go('dreamsIndex');
    });
  };

  vm.authenticate = function(provider) {
    $auth.authenticate(provider)
    .then(function(res) {
      console.log( 'success', res);
      vm.getFitbitData(res);
    })
    .catch(function(res) {
      console.log( 'error', res);
    });
  };

  vm.getFitbitData = (token) => {
    vm.access = token.access_token;
    $http
    .get(`https://api.fitbit.com/1/user/-/sleep/date/2017-01-30.json`, {
      headers: {'Authorization': `Bearer ${vm.access}`}
    })
    .then(response => {
      console.log(response);
      vm.totalSleep = response.data.summary.totalMinutesAsleep;
      vm.noOfSleeps = response.data.summary.totalSleepRecords;
      vm.timeInBed = response.data.summary.totalTimeInBed;
    });
  };
}
