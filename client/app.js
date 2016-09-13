var app = angular.module('app', ['ngRoute']);


(function(d){
  // load the Facebook javascript SDK

  var js,
  id = 'facebook-jssdk',
  ref = d.getElementsByTagName('script')[0];

  if (d.getElementById(id)) {
    return;
  }

  js = d.createElement('script');
  js.id = id;
  js.async = true;
  js.src = "//connect.facebook.net/en_US/all.js";

  ref.parentNode.insertBefore(js, ref);

}(document));
$window.fbAsyncInit = function() {
  FB.init({
    appId: '{your-app-id}',
    status: true,
    cookie: true,
    xfbml: true,
    version: 'v2.4'
  });
