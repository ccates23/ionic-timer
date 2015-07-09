angular.module("starter")
  .controller("TimerCtrl", ['$scope', '$interval', function($scope, $interval) {
    var _val = 0;
    $scope.hasStarted = false;

    $scope.timer = {
      val: function(newVal){
        return arguments.length ? (_val = newVal) : _val;
      }
    };

    var stop;
    $scope.start = function() {
      if ( angular.isDefined(stop) ) return;

      stop = $interval(function() {
        if ( $scope.timer.val() > 0 ) {
          $scope.decrementTimer();
        } else {
          $scope.stop();
          navigator.notification.vibrate(2500);
        }
      }, 1000);
    };

    $scope.clear = function() {
      debugger;
      $scope.stop();
      $scope.timer.val(0);
    }

    $scope.stop = function() {
      if (angular.isDefined(stop)) {
        $interval.cancel(stop);
        stop = undefined;
      }
    };

    $scope.decrementTimer = function() {
      var newVal = $scope.timer.val()*1 - 1;
      $scope.timer.val(newVal);
    }
  }]);
