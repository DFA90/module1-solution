(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.lunchMenu = '';


  $scope.checkLunch = function(){
    var lunchItems = $scope.lunchMenu.split(',');
    console.log(lunchItems.length);
    console.log(lunchItems.length < 4);
    console.log(lunchItems != '');
    if(lunchItems != ''){
      if(lunchItems.length < 4){
        $scope.lunchCheckResult = 'Enjoy!';
      }else {
        $scope.lunchCheckResult = 'Too much!';
      }
    }else {
      $scope.lunchCheckResult = 'Please enter data first';
    }
  };

}

})();
