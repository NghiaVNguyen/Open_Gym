var app = angular.module('app', ['ngRoute', 'ngMessages', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'ngMaterial', 'angular-scroll-animate', 'angular-flippy'])


.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'partials/homePartial.html'
    })
    .when('/search', {
        templateUrl: 'partials/searchPartial.html'
    })
    .when('/newGym', {
        templateUrl: 'partials/newGymPartial.html'
    })
    .when('/gymInfo/:_id', {
        templateUrl: 'partials/gymInfo.html'
    })
    .otherwise({
        redirectTo:'/'
    })
})
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('teal', {
        'default': '300',
    })
    .accentPalette('teal', {
        'default': '800',
    });


});
