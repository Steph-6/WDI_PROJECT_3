angular
.module('napApp')
.controller('DreamsNewCtrl', DreamsNewCtrl);

DreamsNewCtrl.$inject = ['$state','User', 'Dream', 'CurrentUserService', '$auth', '$http', '$scope'];
function DreamsNewCtrl($state, User, Dream, CurrentUserService, $auth, $http, $scope) {
  const vm       = this;
  const today    = new Date();
  vm.today       = today.toDateString();
  vm.user        = CurrentUserService.currentUser;
  vm.month       = vm.today.substr(4, 3);
  vm.day         = vm.today.substr(8, 2);
  vm.year        = vm.today.substr(11, 4);
  vm.sleepDay    = (vm.day - 1);
  vm.entryDate   = vm.day + ' ' + vm.month + ' ' + vm.year;
  vm.fitbitMonth = monthSelector(vm.month);
  vm.showCircles = false;
  vm.ratingValue = 'Zzz';

  vm.dreamsCreate = function dreamsCreate(){
    return Dream
    .save({ dream: { entry: vm.dream.entry, date: vm.entryDate, totalSleep: vm.totalSleep, noSleeps: vm.noOfSleeps, timeInBed: vm.timeInBed, ratingValue: vm.ratingValue }})
    .$promise
    .then(() => {
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
    .get(`https://api.fitbit.com/1/user/-/sleep/date/${vm.year}-${vm.fitbitMonth}-${vm.sleepDay}.json`, {
      headers: {'Authorization': `Bearer ${vm.access}`}
    })
    .then(response => {
      vm.totalSleep  = ((response.data.summary.totalMinutesAsleep)/60).toFixed(1);
      vm.noOfSleeps  = response.data.summary.totalSleepRecords;
      vm.timeInBed   = ((response.data.summary.totalTimeInBed)/60).toFixed(1);
      vm.showCircles = true;
    });
  };

  $scope.slider = {
    value: 0,
    options: {
      id: 'slider',
      floor: 0,
      ceil: 10,
      onStart: function(id) {
        console.log(id + ' is average');
      },
      onChange: function(id, value) {
        if (value >= 0 && value <= 2) {
          console.log(id + ' is unhappy' + ' ' + value);
          vm.ratingValue = 'z';
        } else if (value <= 4 && value > 2) {
          console.log(id + ' is average' + ' ' + value);
          vm.ratingValue = 'Zz';
        } else if (value > 4 && value <= 6){
          console.log(id + ' is happy' + ' ' + value);
          vm.ratingValue = 'Zzz';
        } else if (value > 6 && value <= 8){
          console.log(id + ' is happy' + ' ' + value);
          vm.ratingValue = 'Zzzz';
        } else if (value > 8 && value <= 10){
          console.log(id + ' is happy' + ' ' + value);
          vm.ratingValue = 'Zzzzz';
        }
      },
      showSelectionBar: false,
      hidePointerLabels: false,
      hideLimitLabels: true,
      showSelectionBarFromValue: 0
    }
  };

  function monthSelector(dates) {
    var months;
    switch (dates) {
      case 'Jan':
        return '01';
      case 'Feb':
        return '02';
      case 'Mar':
        return '03';
      case 'Apr':
        return '04';
      case 'May':
        return '05';
      case 'Jun':
        return '06';
      case 'Jul':
        return '07';
      case 'Aug':
        return '08';
      case 'Sep':
        return '09';
      case 'Oct':
        return '10';
      case 'Nov':
        return '11';
      case 'Dec':
        return '12';
      default:
        console.log('no month found!');
        return months;
    }
  }
}
