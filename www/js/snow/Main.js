angular.module('snow_berg', ['ionic'])

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

  })

  .controller('HomeTabCtrl', function($scope) {
    $scope.flightNews = [
      {
        "src":"img/avatar.jpg",
        "title":"国庆飞行任务重",
        "desc":"超负荷运转下如何保证安全飞行"
      },
      {
        "src":"img/avatar.jpg",
        "title":"国庆飞行任务重",
        "desc":"超负荷运转下如何保证安全飞行"
      },
      {
        "src":"img/avatar.jpg",
        "title":"国庆飞行任务重",
        "desc":"超负荷运转下如何保证安全飞行"
      }
    ];
  });
