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
  vm.colours   = 0;
  vm.rating    = 0;
  vm.entryDate = vm.day + ' ' + vm.month + ' ' + vm.year;

  vm.dreamsCreate = function dreamsCreate(){
    return Dream
    .save({ dream: { entry: vm.dream.entry, date: vm.entryDate, totalSleep: vm.totalSleep, noSleeps: vm.noOfSleeps, timeInBed: vm.timeInBed, rating: vm.colours, ratingValue: vm.rating }})
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
    value: 5,
    options: {
      id: 'slider',
      floor: 0,
      ceil: 10,
      onStart: function(id) {
        console.log(id + ' is average');
      },
      onChange: function(id, value) {
        if (value >= 0 && value <= 3) {
          console.log(id + ' is unhappy' + ' ' + value);
          vm.rating = value;
        } else if (value <= 7 && value > 3) {
          console.log(id + ' is average' + ' ' + value);
          vm.rating = value;
        } else if (value > 7 && value <= 10){
          console.log(id + ' is happy' + ' ' + value);
          vm.rating = value;
        }
      },
      showSelectionBar: true,
      hidePointerLabels: false,
      hideLimitLabels: true,
      showSelectionBarFromValue: 5,
      getSelectionBarColor: function(value) {
        if (value >= 0 && value <= 3) {
          vm.colours = '#AD343E';
          return '#AD343E';
        } else if (value <= 7 && value > 3) {
          vm.colours = '#DCA026';
          return '#DCA026';
        } else if (value > 7 && value <= 10) {
          vm.colours = '#94BFA7';
          return '#94BFA7';
        }
        return '#FFFFFF';
      },
      getPointerColor: function(value) {
        if (value >= 0 && value <= 3) {
          vm.colours = '#AD343E';
          return '#AD343E';
        } else if (value <= 7 && value > 3) {
          vm.colours = '#DCA026';
          return '#DCA026';
        } else if (value > 7 && value <= 10) {
          vm.colours = '#94BFA7';
          return '#94BFA7';
        }
        return '#FFFFFF';
      }
    }
  };
}
