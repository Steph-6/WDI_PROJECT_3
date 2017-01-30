angular
  .module('napApp')
  .config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
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
  .state('dreamsIndex', {
    url: '/dreams',
    templateUrl: '/js/views/dreams/index.html',
    controller: 'DreamsIndexCtrl',
    controllerAs: 'dreamsIndex'
  })
  .state('dreamsNew', {
    url: '/:id/new',
    templateUrl: '/js/views/dreams/new.html',
    controller: 'DreamsNewCtrl',
    controllerAs: 'dreamsNew'
  })
  .state('dreamsEdit', {
    url: '/:id/edit',
    templateUrl: '/js/views/dreams/edit.html',
    controller: 'DreamsEditCtrl',
    controllerAs: 'dreamsEdit'
  });

  $urlRouterProvider.otherwise('/');
}
