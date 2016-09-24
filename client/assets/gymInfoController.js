angular.module('app').controller('gymInfoController', function ($scope, $mdDialog, $interval, $routeParams, gymInfoFactory) {
    $scope.gym = [];
    $scope.user = [];


    
    gymInfoFactory.searchGym($routeParams, function(gymResult){
        $scope.gym = gymResult
        console.log($scope.gym)
    })

    $scope.makeReview = function(comment, gymID){
        gymInfoFactory.makeReview(comment, gymID);
    }

})
