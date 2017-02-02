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
      file: '../sounds/rain-01.mp3'
    }, {
      // name: 'thunderstorm',
      image: '../images/thunder.png',
      file: '../sounds/thunderstorm.mp3'
    }, {
      // name: 'waves',
      image: '../images/wave.png',
      file: '../sounds/waves.mp3'
    }, {
      // name: 'fire',
      image: '../images/fire.png',
      file: '../sounds/fire.mp3'
    }, {
      // name: 'singingbowl',
      image: '../images/singingbowl.png',
      file: '../sounds/singingbowl.mp3'
    }, {
      // name: 'crickets',
      image: '../images/crickets.png',
      file: '../sounds/crickets.mp3'
    }
  ];

  function playSound(index) {
    console.log(index);
    var sound = document.getElementById('sound' + index);
    console.log(sound);
    var initialVolume = Math.round(document.getElementById(index).value/50 * 10)/10;
    sound.volume = initialVolume;
    if(!sound.paused) {
      sound.pause();
    } else {
      // sound.currentTime = 0;
      sound.play();
    }
  }

  $scope.adjustVolume = adjustVolume;

  function adjustVolume(input){
    $scope.$apply(function($scope) {
      // console.log(input.value);
      // console.log(input.id);
      var newVolume = Math.round(input.value/50 * 10)/10;
      console.log(newVolume);
      var sound = document.getElementById('sound' + input.id);
      sound.volume = newVolume;
      var image = document.getElementById('img' + input.id);
      image.style.opacity = newVolume;
    });

  }

}
