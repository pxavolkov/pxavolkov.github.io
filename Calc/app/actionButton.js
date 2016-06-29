(function () {

    'use strict';

    //in order to simplify directive, we use parent scope
    function actionButton() {
        return {
            restrict: 'E',
            replace: true,
            template: function(elem, attr){
              return '<button ng-click=\'action("'+attr.type+'")\'>'+attr.type+'</button>';
            }
          };
    };
    angular.module('CalcApp').directive('actionButton', actionButton);
})();