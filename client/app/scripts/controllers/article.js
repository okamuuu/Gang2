'use strict';

angular.module('clientApp')
    .controller('ArticleCtrl', function($scope, repository) {

        //    $scope.articles = repository.queryArticles();
        repository.queryArticles(function(result) {

            var count = result[1][0].shift()[0];
            var keys = result[1][0].shift();
            var keysLength = keys.length;
            var valuesList = result[1][0];

            var articles = [];
            for (var i = 0; i < count; i++) {
                var article = {};
                for (var j = 0; j < keysLength; j++) {
                    article[keys[j][0]] = valuesList[i][j];
                }
                articles.push(article);
            }
            console.log('!!!!!');
            console.log(articles);
            $scope.articles = articles;

        });


        $scope.getDummyError = function() {
            repository.getDummyError();
        };

    });
