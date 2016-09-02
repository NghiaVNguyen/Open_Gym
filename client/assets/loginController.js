angular.module('app').controller('loginController', function ($scope, $mdDialog, loginFactory) {
    $scope.status = '  ';
    $scope.customFullscreen = false;


        $scope.showTabDialog = function(ev) {
           $mdDialog.show({
             templateUrl: 'tabDialog.tmpl.html',
             parent: angular.element(document.body),
             targetEvent: ev,
             clickOutsideToClose:true
           })
         };
         $scope.submitCheck = function(data){
             loginFactory.createUser(data);

            //  $mdDialog.hide()
         }
         $scope.cancel = function(){
             $mdDialog.hide()
         }




 });
