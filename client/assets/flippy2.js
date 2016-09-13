

/**
 * handles the behaviour of flipping card.
 */
angular.module('angular-flippy2', []).directive('flippy2', function () {
	return {
		restrict: 'E',
		scope: {
			flip: '=',
			flipBack: '=',
			duration: '@',
			timingFunction: '@'
		},
		link: function link($scope, $elem, $attrs, $interval) {


			var CUSTOM_PREFIX = 'custom:';

			var state = {
				flipped: false
			};
			var options = {
				duration: 800,
				timingFunction: 'ease-in-out'
			};


			// assign new options
			angular.forEach(['duration', 'timingFunction'], function (item) {
				options[item] = $scope.item ? $scope.item : options[item];
			});

			angular.forEach({ flip: flip, flipBack: flipBack }, function (flipFunc, evt) {
				angular.forEach($scope[evt], function (eventName) {
					if (eventName.indexOf(CUSTOM_PREFIX) === -1) {
						// directly register event listener to avoid having to start off angular's digest cycle
						angular.element($elem)[0].addEventListener(eventName, flipFunc);

					} else {
						$scope.$on(eventName.substr(eventName.indexOf(CUSTOM_PREFIX)), flipFunc);
					}
				});
			});
			// set flip duration
			angular.forEach(['flippy-front2', 'flippy-back2'], function (name) {
				var el = $elem.find(name);
				var fancy = document.getElementsByClassName("fancy");
				if (el.length == 1) {
					angular.forEach(['', '-ms-', '-webkit-'], function (prefix) {
						angular.element(el[0]).css(prefix + 'transition', 'all ' + options.duration / 1000 + 's ' + options.timingFunction);
					});
				}

			});

			/**
    * flips the card.
    * will be ignored, if the state is already the same as the target state.
    *
    * @param boolean isBack
    */

			function _flip() {
				var isBack = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

				if (!isBack && !state.flipped || isBack && state.flipped) {
					// to avoid toggling it right back if flip-back is the same event
					setTimeout(function () {
						$elem.toggleClass('flipped');
						state.flipped = !state.flipped;
					}, 0);



				}
			}


			function flip() {
				_flip();
			}


			var fancy = document.getElementsByClassName("fancy");

			setInterval(function(){
				_flip()
				_flip(true);
			}, 3000)


			function flipBack() {
				_flip(true);
			}

		} ///link///



	};
});
