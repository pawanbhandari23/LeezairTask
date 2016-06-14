angular.module('starter.controllers', [])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});
  })

  .controller('activityCtrl', function ($scope, $http, $state) {
    $http.get('activities.json').success(function (data) {
      $scope.allData = data;
      $scope.activities = $scope.allData.data.activities;
      $scope.specificActivity = $state.params.activityId;
      $scope.filteredActivity = 'activity-' + $scope.specificActivity;
      if ($scope.specificActivity !== undefined) {
        $http.get('activity-' + $scope.specificActivity + '.json').success(function (data) {
          $scope.detailData = data;
          $scope.detailActivity = $scope.detailData.data;
          $scope.provider = $scope.detailActivity.provider.providerName;
          $scope.description = $scope.detailActivity.description;
        }).error(function (data1, data2) {
          console.log(data1);
          console.log(data2);
        });
      }
    });
  })


