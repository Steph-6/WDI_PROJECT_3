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

  vm.playSound = playSound;

  vm.sounds = [
    {
      // name: 'rain',
      image: '../images/rain.png',
      file: new Audio('../sounds/rain-01.mp3')
    }, {
      // name: 'thunderstorm',
      image: '../images/thunder.png',
      file: new Audio('../sounds/thunderstorm.mp3')
    }, {
      // name: 'waves',
      image: '../images/wave.png',
      file: new Audio('../sounds/waves.mp3')
    }
  ];

  function playSound(sound) {
    if(!sound.paused) {
      sound.pause();
    } else {
      // sound.currentTime = 0;
      sound.play();
    }
  }
}
