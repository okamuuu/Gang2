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

            $scope.articles = articles;
        });

        $scope.getDummyError = function() {
            repository.getDummyError();
        };

    })
    .controller('ArticleDetailCtrl',
        function($scope, $route, $routeParams, $location, repository) {

            //    $scope.articles = repository.queryArticles();
            repository.getArticle($routeParams.id, function(result) {

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

                $scope.article = articles[0];
            });

            $scope.remove = function() {
                console.log('remove');
                console.log($routeParams.id);
                repository.deleteArticle($routeParams.id, function(result) {
                    $location.path('/#/articles');
                }); 
            };
        })
    .controller('ArticleEditCtrl',
        function($scope, $route, $routeParams, $location, repository) {

            //    $scope.articles = repository.queryArticles();
            repository.getArticle($routeParams.id, function(result) {

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

                $scope.article = articles[0];
            });

            $scope.update = function() {
                //    $scope.articles = repository.queryArticles();
                repository.updateArticle({
//                    id: $routeParams.id,
                    key: $scope.article._key,
                    title: $scope.article.title,
                    content: $scope.article.content
                }, function(result) {
                    $location.path('/#/articles/' + $routeParams.id);
                });
            };
        })
    .controller('ArticleNewCtrl',
        function($scope, $route, $routeParams, $location, repository) {

            $scope.title = '';
            $scope.content = '';

            $scope.create = function() {
                //    $scope.articles = repository.queryArticles();
                repository.createArticle({
//                    id: $routeParams.id,
//                    key: $scope.article._key,
                    title: $scope.title,
                    content: $scope.content
                }, function(result) {
                    $location.path('/#/articles');
                });
            };
        });
