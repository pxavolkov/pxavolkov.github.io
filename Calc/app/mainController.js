(function () {

    'use strict';

    function mainController($scope) {
        var allOperations = new Array();
        
        //initialize model and dictionary of operations
        $scope.init = function() {
            //cast operand to int and perform operation
            allOperations["+"] = function(a, b){return (+a) + (+b);};
            allOperations["-"] = function(a, b){return (+a) - (+b);};
            allOperations["*"] = function(a, b){return (+a) * (+b);};
            allOperations["/"] = function(a, b){return (+a) / (+b);};
            $scope.clear();
        };

        //clear model
        $scope.clear = function() {
            $scope.currentExpr = "0";
            $scope.operand = 0;
            $scope.result = 0;
            $scope.operation = null;
        };

        //reaction to action button click
        $scope.action = function(sign) {
            //if operation is already started - complete it
            if ($scope.operation) {
                $scope.eq();
            }
            else {
                $scope.result = $scope.operand;
                $scope.operand = 0;
            }
                        
            $scope.currentExpr = $scope.result + sign;
            $scope.operation = allOperations[sign];
        };

        //complete operation
        $scope.eq = function() {
            if ($scope.operation) {
                $scope.result = $scope.operation($scope.result, $scope.operand);
                $scope.currentExpr = $scope.result;
                $scope.operand = 0;
                $scope.operation = null;
            }
        };

        $scope.init();
    };
;
    mainController.$inject = ['$scope'];
    angular.module('CalcApp').controller('mainController', mainController);
})();