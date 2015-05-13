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
