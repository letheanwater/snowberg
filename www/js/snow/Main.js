/**
 * module后面的参数，还是要加，不加在其他的js文件引用的时候识别不到。
 * 要查一查这个原理，需要一个API的文档。
 */
angular.module('snow_berg', ['ionic','snow_berg.controllers'])
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
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('tabs', {
        url: "/tab",
        abstract: true,
        templateUrl: "view/tabs.html"
      })
      .state('tabs.home', {
        url: "/home",
        views: {
          'home-tab': {
            templateUrl: "view/home.html",
            controller: 'HomeTabCtrl'
          }
        }
      })
      .state('tabs.facts', {
        url: "/facts",
        views: {
          'home-tab': {
            templateUrl: "view/facts.html"
          }
        }
      })
      .state('tabs.facts2', {
        url: "/facts2",
        views: {
          'home-tab': {
            templateUrl: "view/facts2.html"
          }
        }
      })
      .state('tabs.flightclub', {
        url: "/flightclub",
        views: {
          'flightclub-tab': {
            templateUrl: "view/flightclub.html"
          }
        }
      })
      .state('tabs.setting', {
        url: "/setting",
        views: {
          'setting-tab': {
            templateUrl: "view/setting.html"
          }
        }
      });
    $urlRouterProvider.otherwise("/tab/home");
  });
