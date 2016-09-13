angular.module('app').controller('gymInfoController', function ($scope, $mdDialog, $interval, $routeParams, gymInfoFactory) {
    $scope.gym = [];



    gymInfoFactory.searchGym($routeParams, function(gymResult){
        $scope.gym = gymResult
        console.log($scope.gym)
    })

})
