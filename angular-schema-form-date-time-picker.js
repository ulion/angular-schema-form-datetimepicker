angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("directives/decorators/bootstrap/angular-ui/datepicker.html","<div class=\"form-group\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess(), \'has-feedback\': form.feedback !== false }\">\n  <label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label>\n  <div class=\"form-control-date\">\n    <div class=\"input-group\">\n      <input type=\"text\" class=\"form-control\" schema-validate=\"form\" ui-date-picker datepicker-popup ng-model=\"$$value$$\" is-open=\"opened\" datepicker-options=\"form.options.dateOptions\" />\n      <span class=\"input-group-addon\" ng-click=\"open($event)\"><i class=\"fa fa-calendar\"></i></span>\n    </div>\n  </div>\n  <div class=\"help-block\"\n    ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\"\n    ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div>\n</div>\n");
$templateCache.put("directives/decorators/bootstrap/angular-ui/datetimepicker.html","<div class=\"form-group\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess() }\">\n  <label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label>\n  <div class=\"form-control-datetime\">\n    <div class=\"input-group\" ui-date-picker >\n      <input type=\"text\" class=\"form-control\" datetime-picker=\"dd MMM yyyy HH:mm\" schema-validate=\"form\" ng-model=\"$$value$$\" is-open=\"opened\" datepicker-options=\"form.options.dateOptions\" timepicker-options=\"form.options.timeOptions\" />\n      <span class=\"input-group-addon\" ng-click=\"openCalendar($event)\"><i class=\"fa fa-calendar\"></i></span>\n    </div>\n  </div>\n  <div class=\"help-block\"\n    ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\"\n    ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div>\n</div>\n");
$templateCache.put("directives/decorators/bootstrap/angular-ui/timepicker.html","<div class=\"form-group\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess(), \'has-feedback\': form.feedback !== false }\">\n  <label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label>\n  <div class=\"form-control-time\">\n    <timepicker ng-model=\"$$value$$\" minute-step=\"form.options.timeOptions.minuteStep\" show-meridian=\"true\"></timepicker>\n  </div>\n  <div class=\"help-block\"\n    ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\"\n    ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div>\n</div>\n");}]);
angular.module('uiSchemaForm-datepicker', ['schemaForm', 'ui.bootstrap']).config(
['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
  function(schemaFormProvider,  schemaFormDecoratorsProvider, sfPathProvider) {

    var picker = function(name, schema, options) {
      if ((schema.type === 'string' || schema.type === 'number') && schema.format == 'ui-datepicker') {
        var f = schemaFormProvider.stdFormObj(name, schema, options);
        f.key  = options.path;
        f.type = 'ui-datepicker';
        options.lookup[sfPathProvider.stringify(options.path)] = f;
        return f;
      }
    };

    schemaFormProvider.defaults.string.unshift(picker);

  //Add to the bootstrap directive
    schemaFormDecoratorsProvider.addMapping('bootstrapDecorator', 'ui-datepicker',
    'directives/decorators/bootstrap/angular-ui/datepicker.html');
    schemaFormDecoratorsProvider.createDirective('uiDatepicker',
    'directives/decorators/bootstrap/angular-ui/datepicker.html');
  }]);

angular.module('uiSchemaForm-datetimepicker', ['schemaForm', 'ui.bootstrap']).config(
['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
  function(schemaFormProvider,  schemaFormDecoratorsProvider, sfPathProvider) {

    var picker = function(name, schema, options) {
      if (schema.type === 'object' && schema.format == 'ui-datetimepicker') {
        var f = schemaFormProvider.stdFormObj(name, schema, options);
        f.key  = options.path;
        f.type = 'ui-datetimepicker';
        options.lookup[sfPathProvider.stringify(options.path)] = f;
        return f;
      }
    };

    schemaFormProvider.defaults.object.unshift(picker);

  //Add to the bootstrap directive
    schemaFormDecoratorsProvider.addMapping('bootstrapDecorator', 'ui-datetimepicker',
    'directives/decorators/bootstrap/angular-ui/datetimepicker.html');
    schemaFormDecoratorsProvider.createDirective('uiDatetimepicker',
    'directives/decorators/bootstrap/angular-ui/datetimepicker.html');
  }]);

angular.module('uiSchemaForm-timepicker', ['schemaForm', 'ui.bootstrap']).config(
['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
  function(schemaFormProvider,  schemaFormDecoratorsProvider, sfPathProvider) {

    var picker = function(name, schema, options) {
      if ((schema.type === 'string' || schema.type === 'number') && schema.format == 'ui-timepicker') {
        var f = schemaFormProvider.stdFormObj(name, schema, options);
        f.key  = options.path;
        f.type = 'ui-timepicker';
        options.lookup[sfPathProvider.stringify(options.path)] = f;
        return f;
      }
    };

    schemaFormProvider.defaults.string.unshift(picker);

  //Add to the bootstrap directive
    schemaFormDecoratorsProvider.addMapping('bootstrapDecorator', 'ui-timepicker',
    'directives/decorators/bootstrap/angular-ui/timepicker.html');
    schemaFormDecoratorsProvider.createDirective('uiTimepicker',
    'directives/decorators/bootstrap/angular-ui/timepicker.html');
  }]);

angular.module('schemaForm').directive('uiDatePicker', function() {

  return {
    restrict: 'A',
//    require: 'ngModel',
    controller: function($scope) {
      $scope.openCalendar = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
      };
    }/*,
    link: function(scope, element, attrs, ngModel) {

    }*/
  };
});
