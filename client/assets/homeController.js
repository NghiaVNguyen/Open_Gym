angular.module('app').controller('homeController', function ($scope, $mdDialog, $interval) {
    $scope.myInterval = 5000;
     $scope.noWrapSlides = false;
     $scope.active = 0;
     var currIndex = 0;
     /**
      * handles the behaviour of flipping card.
      */

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


//   (function(d){
//     // load the Facebook javascript SDK
//
//     var js,
//     id = 'facebook-jssdk',
//     ref = d.getElementsByTagName('script')[0];
//
//     if (d.getElementById(id)) {
//       return;
//     }
//
//     js = d.createElement('script');
//     js.id = id;
//     js.async = true;
//     js.src = "//connect.facebook.net/en_US/all.js";
//
//     ref.parentNode.insertBefore(js, ref);
//
//   }(document));
//   $window.fbAsyncInit = function() {
//     FB.init({
//       appId: '{your-app-id}',
//       status: true,
//       cookie: true,
//       xfbml: true,
//       version: 'v2.4'
//     });
// };
//


 //
 //     $scope.cards = [
 //     {
 //         title: "escheresque-dark",
 //         icon:"",
 //         imageUrl:"http://subtlepatterns.com/patterns/escheresque_ste.png",
 //         description:"Sublte Pattern Source image below...",
 //         source: "http://subtlepatterns.com/escheresque-dark/"
 //     },
 //     {
 //         title: "dark sharp edges",
 //         icon:"",
 //         imageUrl:"http://subtlepatterns.com/patterns/footer_lodyas.png",
 //         description:"Sublte Pattern Source image below...",
 //         source: "http://subtlepatterns.com/dark-sharp-edges/"
 //     },
 //     {
 //         title: "Grey Washed Wall",
 //         icon:"",
 //         imageUrl:"http://subtlepatterns.com/patterns/grey_wash_wall.png",
 //         description:"Sublte Pattern Source image below...",
 //         source: "http://subtlepatterns.com/grey-washed-wall/"
 //     }
 // ];
 //     $scope.currentCard = {};
 //
 //     $scope.isCardRevealed = false;
 //     $scope.flipCard = function() {
 //         $scope.isCardRevealed = !$scope.isCardRevealed;
 //         if($scope.isCardRevealed) {
 //             $scope.generateCard();
 //         } else {
 //             $scope.currentCard = {};
 //                setTimeout(function() {
 //                $scope.isBackHidden = !$scope.isCardRevealed;
 //             }, 0.1 * 1000);
 //
 //         }
 //å
 //     }
 //
 //     $interval( function(){ $scope.flipCard(); }, 3000);
 //
 //     $scope.generateCard = function() {
 //         $scope.currentCard = {};
 //         var index = Math.floor((Math.random() * $scope.cards.length) + 0);
 //          $scope.currentCard = $scope.cards[index];
 //     }


})
