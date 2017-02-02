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
  vm.rating    = 0;
  vm.entryDate = vm.day + ' ' + vm.month + ' ' + vm.year;

  vm.dreamsCreate = function dreamsCreate(){
    return Dream
    .save({ dream: { entry: vm.dream.entry, date: vm.entryDate, totalSleep: vm.totalSleep, noSleeps: vm.noOfSleeps, timeInBed: vm.timeInBed, rating: vm.colours }})
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
    .get(`https://api.fitbit.com/1/user/-/sleep/date/2017-01-31.json`, {
      headers: {'Authorization': `Bearer ${vm.access}`}
    })
    .then(response => {
      vm.totalSleep = ((response.data.summary.totalMinutesAsleep)/60).toFixed(1);
      vm.noOfSleeps = response.data.summary.totalSleepRecords;
      vm.timeInBed  = ((response.data.summary.totalTimeInBed)/60).toFixed(1);
    });
  };

  $scope.slider = {
    value: 0,
    options: {
      id: 'slider',
      floor: -40,
      ceil: 40,
      onStart: function(id) {
        console.log(id + ' is average');
      },
      onChange: function(id, value) {
        if (value >= -40 && value <= -20) {
          console.log(id + ' is unhappy' + ' ' + value);
          vm.rating = value;
        } else if (value <= 20 && value > -20) {
          console.log(id + ' is average' + ' ' + value);
          vm.rating = value;
        } else if (value > 20 && value <= 40){
          console.log(id + ' is happy' + ' ' + value);
          vm.rating = value;
        }
      },
      showSelectionBar: true,
      hidePointerLabels: false,
      hideLimitLabels: true,
      showSelectionBarFromValue: 0,
      getSelectionBarColor: function(value) {
        if (value >= -40 && value <= -20) {
          vm.colours = '#AD343E';
          return '#AD343E';
        } else if (value <= 20 && value > -20) {
          vm.colours = '#DCA026';
          return '#DCA026';
        } else if (value > 20 && value <= 40) {
          vm.colours = '#94BFA7';
          return '#94BFA7';
        }
        return '#2AE02A';
      },
      getPointerColor: function(value) {
        if (value >= -40 && value <= -20) {
          vm.colours = '#AD343E';
          return '#AD343E';
        } else if (value <= 20 && value > -20) {
          vm.colours = '#DCA026';
          return '#DCA026';
        } else if (value > 20 && value <= 40) {
          vm.colours = '#94BFA7';
          return '#94BFA7';
        }
        return '#2AE02A';
      }
    }
  };
}
