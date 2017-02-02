angular
  .module('napApp')
  .config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('moodboard', {
    url: '/dreams/moodboard',
    templateUrl: '/js/views/dreams/moodboard.html',
    controller: 'MoodboardCtrl',
    controllerAs: 'Moodboard'
  })
  .state('home', {
    url: '/',
    templateUrl: '/js/views/home.html'
  })
  .state('register', {
    url: '/register',
    templateUrl: '/js/views/register.html',
    controller: 'RegisterCtrl',
    controllerAs: 'register'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/js/views/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'login'
  })
  .state('usersIndex', {
    url: '/users',
    templateUrl: '/js/views/users/index.html',
    controller: 'UsersIndexCtrl',
    controllerAs: 'usersIndex'
  })
  .state('dreamsNew', {
    url: '/dreams/new',
    templateUrl: '/js/views/dreams/new.html',
    controller: 'DreamsNewCtrl',
    controllerAs: 'dreamsNew'
  })
  .state('dreamsIndex', {
    url: '/dreams',
    templateUrl: '/js/views/dreams/index.html',
    controller: 'DreamsIndexCtrl',
    controllerAs: 'dreamsIndex'
  })
  .state('dreamsEdit', {
    url: '/dreams/:id/edit',
    templateUrl: '/js/views/dreams/edit.html',
    controller: 'DreamsEditCtrl',
    controllerAs: 'dreamsEdit'
  })
  .state('dreamsShow', {
    url: '/dreams/:id',
    templateUrl: '/js/views/dreams/show.html',
    controller: 'DreamsShowCtrl',
    controllerAs: 'dreamsShow',
    resolve: {
      DreamData: function(Dream, $stateParams) {
        return Dream.get($stateParams).$promise;
      }
    }
  })
  ;

  $urlRouterProvider.otherwise('/');
}
