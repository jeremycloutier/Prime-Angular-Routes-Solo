var app = angular.module('candidatesApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
        .when('/bernie', {
            templateUrl: 'views/bernie.html',
            controller: 'bernieController'
        })
        .when('/hillary', {
            templateUrl: 'views/hillary.html',
            controller: 'hillaryController'
        })
        .when('/donald', {
            templateUrl: 'views/donald.html',
            controller: 'donaldController'
        });
    $locationProvider.html5Mode(true);
}]);

app.controller('bernieController', ['$scope', function($scope){

}]);

app.controller('hillaryController', ['$scope', function($scope){

}]);

app.controller('donaldController', ['$scope', function($scope){

}]);