/**
 * Created by SevenLiu on 16/10/2.
 */
angular.module('snow_berg',['ionic'])
  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })
  .config(function($stateProvider,$urlRouteProvider)
{
  $stateProvider
    .state('tabs',{
    url:"/tab",
    abstract:true,
    templateUrl:"view/tabs.html"
  })
    .state('tabs.home',{
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "view/home.html",
          controller: 'HomeTabCtrl'
        }
      }
  });
  $urlRouterProvider.otherwise("/tab/home");
})

.controller('HomeTabCtrl', function($scope) {
  console.log('HomeTabCtrl');
});
