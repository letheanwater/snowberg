/**
 * Created by SevenLiu on 16/10/2.
 */
angular.module('snow_berg.controllers', [])
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
