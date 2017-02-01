angular
.module('napApp')
.controller('MoodboardCtrl', MoodboardCtrl);

MoodboardCtrl.$inject = ['ngAudio', '$scope'];

function MoodboardCtrl(ngAudio, $scope) {
  const vm = this;
  $scope.rain = ngAudio.load('https://www.soundjay.com/nature/rain-01.mp3');
  $scope.thunder = ngAudio.load('https://ia801409.us.archive.org/12/items/1HourThunderstorm/1HrThunderstorm.mp3');
  $scope.waves = ngAudio.load('../../../sounds/waves.mp3');
  vm.rainPlay = () => {
    $scope.rain.play();
  };
  vm.thunderPlay = () => {
    $scope.thunder.play();
  };
  vm.wavesPlay = () => {
    $scope.waves.play();
  };
}
