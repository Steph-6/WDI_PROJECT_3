angular
.module('napApp')
.controller('DreamsNewCtrl', DreamsNewCtrl);

DreamsNewCtrl.$inject = ['$state','User', 'Dream', 'CurrentUserService', '$auth', '$http', 'monthService', '$scope'];
function DreamsNewCtrl($state, User, Dream, CurrentUserService, $auth, $http, monthService, $scope) {
  const vm     = this;
  const today  = new Date();
  vm.today     = today.toDateString();
  vm.user      = CurrentUserService.currentUser;
  vm.month     = vm.today.substr(4, 3);
  vm.day       = vm.today.substr(8, 2);
  vm.year      = vm.today.substr(11, 4);
  vm.sleepDay  = (vm.day - 1);
  // vm.monthNo   = monthService(vm.month);

  vm.entryDate = vm.day + ' ' + vm.month + ' ' + vm.year;

  vm.dreamsCreate = function dreamsCreate(){
    return Dream
    .save({ dream: { entry: vm.dream.entry, date: vm.entryDate, totalSleep: vm.totalSleep, noSleeps: vm.noOfSleeps, timeInBed: vm.timeInBed }})
    .$promise
    .then(dream => {
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
      vm.totalSleep = response.data.summary.totalMinutesAsleep;
      vm.noOfSleeps = response.data.summary.totalSleepRecords;
      vm.timeInBed  = response.data.summary.totalTimeInBed;
    });
  };

  $scope.slider = {
    value: 0,
    options: {
      floor: -50,
      ceil: 50,
      showSelectionBar: true,
      selectionBarGradient: {
        from: 'red',
        to: 'green'
      }
    }
  };

}
