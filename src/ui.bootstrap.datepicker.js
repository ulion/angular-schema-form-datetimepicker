angular.module('schemaForm').directive('uiDatePicker', function() {

  return {
    restrict: 'A',
    require: 'ngModel',
    controller: function($scope) {
      $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
      };
    },
    link: function(scope, element, attrs, ngModel) {

    }
  };
});
