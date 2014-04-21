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

                $resource('http://localhost:8080/articles/' + id, {}, {
                    'query': {
                        method: 'GET',
                        isArray: true
                    }
                }).query(successCallback);
            },

            updateArticle: function(params, successCallback) {

                $resource('http://localhost:8080/articles/' + params.id, {
                    key: params.key,
                    title: params.title,
                    content: params.content
                }, {
                    'query': {
                        method: 'PUT',
                        isArray: true
                    }
                }).query(successCallback);
            },

            createArticle: function(params, successCallback) {

                $resource('http://localhost:8080/articles', {
                    title: params.title,
                    content: params.content
                }, {
                    'query': {
                        method: 'POST',
                        isArray: true
                    }
                }).query(successCallback);
            },




        };

    });
