(function() {
'use strict';

angular.module('spinner')
.component('loadingSpinner', {
  templateUrl: 'src/spinner/templates/loadingspinner.template.html',
  controller: 'SpinnerController'
});

})();
