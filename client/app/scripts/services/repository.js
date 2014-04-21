'use strict';

angular.module('clientApp')
    .factory('repository', function($resource) {

        return {

            getDummyError: function() {
                return $resource('/unknown', {}, {
                    'query': {
                        method: 'GET',
                        isArray: true
                    }
                }).query();
            },

            queryArticles: function(successCallback) {

                $resource('http://localhost:8080/articles', {
                    'query': {
                        method: 'GET',
                        isArray: true
                    }
                }).query(successCallback);
            },

            getArticle: function(id, successCallback) {

                $resource('http://localhost:8080/articles', {
                    _id: id
                }, {
                    'query': {
                        method: 'GET',
                        isArray: true
                    }
                }).query(successCallback);
            }

        };

    });
