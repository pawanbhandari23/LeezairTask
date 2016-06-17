angular.module('starter.controllers', [])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {
  })

  .controller('activityCtrl', function ($scope, $http, $state, $sce) {
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
          $scope.description = $scope.detailActivity.description.split("â??").join("'");
          $scope.titleDescription = $scope.detailActivity.title.longDescription;
        }).error(function (data1, data2) {
          console.log(data1);
          console.log(data2);
        });
      }

      $scope.getCity = function (a) {
        var lastStr = a.lastIndexOf('/');
        var finalStr = a.substring(lastStr + 1);
        return finalStr;
      }
    });
  })




