'use strict';

angular
  .module('clientApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/articles', {
        templateUrl: 'views/article/list.html',
        controller: 'ArticleCtrl'
      })
      .when('/articles', {
        templateUrl: 'views/article/list.html',
        controller: 'ArticleCtrl'
      })
      .when('/articles/create', {
        templateUrl: 'views/article/create.html',
        controller: 'ArticleCtrl'
      })
      .when('/articles/:id', {
        templateUrl: 'views/article/view.html',
        controller: 'ArticleCtrl'
      })
      .when('/articles/:id/edit', {
        templateUrl: 'views/article/edit.html',
        controller: 'ArticleCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
