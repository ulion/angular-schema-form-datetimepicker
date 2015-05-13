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
