'use strict';

angular.module('clientApp')

    .config(['$httpProvider',
        function($httpProvider) {
            $httpProvider.interceptors.push(function($q, $log, $rootScope) {
                        
                return {
                    responseError: function(reason) {
                        $rootScope.$broadcast('showDialog', 'message');
                        return $q.reject(reason);
                    }
                };
            });
        }
    ])
    .controller('dialogCtrl', function($scope) {

        $scope.alerts = [];

        $scope.$on('showDialog', function(event, message) {

            $scope.alerts.push({
                type: 'danger',
                msg: message
            });
        });

        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
        };

    })
    .directive('dialog', function() {
        return {
            template: '<div style="z-index:99;position:absolute;top:15px;left:50%;margin-left:-300px;width:600px;text-align:center;">' +
                '<alert ng-repeat="alert in alerts" type="alert.type" close="closeAlert($index)">' +
                '{{alert.msg}}' +
                '</alert>' +
                '</div>',
            restrict: 'A'
        };
    });
