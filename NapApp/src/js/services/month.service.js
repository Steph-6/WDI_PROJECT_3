angular
.module('napApp')
.service('monthService', monthService);

monthService.$inject = [];


function monthService(dates) {
  var months;
  switch (dates) {
    case 'Jan':
      months = '01';
      break;
    case 'Feb':
      months = '02';
      break;
    case 'Mar':
      months = '03';
      break;
    case 'Apr':
      months = '04';
      break;
    case 'May':
      months = '05';
      break;
    case 'Jun':
      months = '06';
      break;
    case 'Jul':
      months = '07';
      break;
    case 'Aug':
      months = '08';
      break;
    case 'Sep':
      months = '09';
      break;
    case 'Oct':
      months = '10';
      break;
    case 'Nov':
      months = '11';
      break;
    case 'Dec':
      months = '12';
      break;
    default:
      console.log('no month found!');
      return months;
  }
}
