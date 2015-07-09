angular.module("starter")
  .controller("TimerCtrl", ['$scope', function($scope) {
   var _val = 0;
   $scope.timer = {
   	val: function(newVal){
   		return arguments.length ? (_val = newVal) : _val;
   	}
   };
  }]);
