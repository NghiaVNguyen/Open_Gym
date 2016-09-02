angular.module('app').controller('homeController', function ($scope, $mdDialog) {
    $scope.myInterval = 5000;
     $scope.noWrapSlides = false;
     $scope.active = 0;
     var currIndex = 0;
     var slides = $scope.slides = [
         {
             image: './images/volleyball2.jpg',
             id: currIndex++
         },
        {
            image: './images/basketball.png',
            id: currIndex++
        },
        {
            image: './images/soccer.png',
            id: currIndex++
        },
        {
            image: './images/football.jpg',
            id: currIndex++
        }
    ];

     $scope.addSlide = function() {
       var newWidth = 600 + slides.length + 1;
       slides.push({
           image: './images/volleyball.jpg',
           id: currIndex++
       });
     };

     $scope.randomize = function() {
       var indexes = generateIndexesArray();
       assignNewIndexesToSlides(indexes);
     };


    //  for (var i = 0; i < 4; i++) {
    //    $scope.addSlide();
    //  }

     // Randomize logic below

     function assignNewIndexesToSlides(indexes) {
       for (var i = 0, l = slides.length; i < l; i++) {
         slides[i].id = indexes.pop();
       }
     }

     function generateIndexesArray() {
       var indexes = [];
       for (var i = 0; i < currIndex; ++i) {
         indexes[i] = i;
       }
       return shuffle(indexes);
     }

     // http://stackoverflow.com/questions/962802#962890
     function shuffle(array) {
       var tmp, current, top = array.length;

       if (top) {
         while (--top) {
           current = Math.floor(Math.random() * (top + 1));
           tmp = array[current];
           array[current] = array[top];
           array[top] = tmp;
         }
       }

       return array;
  }


  $scope.searchQuery = function(data){
      console.log(data)
  }



});
