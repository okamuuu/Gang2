'use strict';

angular.module('clientApp')
  .controller('ArticleCtrl', function ($scope, repository) {

    $scope.articles = repository.queryArticles();

    $scope.getDummyError = function() {
        repository.getDummyError();
    };

  });
