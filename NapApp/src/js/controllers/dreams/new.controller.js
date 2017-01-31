angular
.module('napApp')
.controller('DreamsNewCtrl', DreamsNewCtrl);

DreamsNewCtrl.$inject = ['$state','User', 'Dream', 'CurrentUserService', '$auth', '$http', 'monthService'];
function DreamsNewCtrl($state, User, Dream, CurrentUserService, $auth, $http, monthService) {
  const vm     = this;
  const today  = new Date();
  vm.today     = today.toDateString();
  vm.user      = CurrentUserService.currentUser;
  console.log(vm.today);
  vm.month     = vm.today.substr(4, 3);
  vm.day       = vm.today.substr(8, 2);
  vm.year      = vm.today.substr(11, 4);
  vm.sleepDay  = (vm.day - 1);
  // vm.monthNo   = monthService(vm.month);

  vm.entryDate = vm.day + ' ' + vm.month + ' ' + vm.year;

  // console.log(today);
  console.log(vm.month);
  // console.log(vm.day);
  // console.log(vm.sleepDay);
  // console.log(vm.year);
  // console.log(vm.entryDate);
  console.log(vm.monthNo);

  vm.dreamsCreate = function dreamsCreate(){
    return Dream
    .save({ dream: { entry: vm.dream.entry, date: vm.entryDate, totalSleep: vm.totalSleep, noSleeps: vm.noOfSleeps, timeInBed: vm.timeInBed }})
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
