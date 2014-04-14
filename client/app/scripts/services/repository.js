'use strict';

angular.module('clientApp')
  .factory('repository', function ($resource) {

    return {

        getDummyError: function() {
            return $resource('/unknown', {}, {
                'query': {method: 'GET', isArray: true}
            }).query();
        },

        queryArticles: function() {
   
            return $resource('/articles', {}, {
                'query': {method: 'GET', isArray: true}
            }).query();
        }
    
    };

  });
