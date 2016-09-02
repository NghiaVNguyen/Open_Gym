// angular.module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])

app.controller('searchController', function($scope, $element, $mdDialog, searchFactory) {
    $scope.status = '  ';
    $scope.customFullscreen = false;


    $scope.searchResults = [];

    $scope.showAdvanced = function(ev) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'dialog1.tmpl.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
      })
      .then(function(answer) {
        $scope.status = 'You said the information was "' + answer + '".';
      }, function() {
        $scope.status = 'You cancelled the dialog.';
      });
    };



    function DialogController($scope, $mdDialog) {
      $scope.hide = function() {
        $mdDialog.hide();
      };

      $scope.cancel = function() {
        $mdDialog.cancel();
      };

      $scope.answer = function(answer) {
        $mdDialog.hide(answer);
      };
      $scope.days = [];
      $scope.createGym = function(data){
          console.log(data, "createGym data");
          if(data){
              if(data.Monday){
                  $scope.days.push("Monday")
                  console.log('its monday', $scope.days)
              }
              if(data.Tuesday){
                  $scope.days.push("Tuesday")
              }
              if(data.Wednesday){
                  $scope.days.push("Wednesday")
              }
              if(data.Thursday){
                  $scope.days.push("Thursday")
              }
              if(data.Friday){
                  $scope.days.push("Friday")
              }
              if(data.Saturday){
                  $scope.days.push("Saturday")
              }
              if(data.Sunday){
                  $scope.days.push("Sunday")
              }
              console.log($scope.days)
          }
          data.day = $scope.days;
          searchFactory.createGym(data);
      }
    }

    $scope.searchGyms = function(data, callback){
        searchFactory.searchGym(data, function(searchResults){
            $scope.searchResults = searchResults;
            console.log($scope.searchResults);
            console.log("*&*&*&*&*&*&*&*&*&*&*&*&*&*&*&**&*&*&*&*&*&*&* ")
        })

    }


    $scope.animation = {};
    $scope.animation.current = 'fadeInLeft';
    $scope.animateElementIn = function($el) {
		$el.removeClass('not-visible');
		$el.addClass('animated ' + $scope.animation.current);
	};

	$scope.animateElementOut = function($el) {
		$el.addClass('not-visible');
		$el.removeClass('animated ' + $scope.animation.current);
	};


});


/**
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that can be foundin the LICENSE file at http://material.angularjs.org/HEAD/license.
**/
