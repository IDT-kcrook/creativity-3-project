/* global angular */
angular.module('MadLib', [])
    .factory('wordFactory', [function() {
        var data = {};
        return data;
    }])
    .controller('MainCtrl', [
        '$scope',
        'wordFactory',
        function($scope, wordFactory) {
            $scope.test = 'Hello World!';
        }
    ]);
