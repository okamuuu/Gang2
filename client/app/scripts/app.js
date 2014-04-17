'use strict';

angular
  .module('clientApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
//    'ngMockE2E',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
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
        redirectTo: '/articles'
      });
  })
// .run(function($httpBackend) {
//        // No need to deal with tempaltes
//        $httpBackend.whenGET(/^views\//).passThrough();
//            
//        var articles = [{
//            id: 1,
//            title: 'title1',
//            content: 'content1'
//        }, {
//            id: 2,
//            title: 'title2',
//            content: 'content2'
//        }, {
//            id: 3,
//            title: 'title3',
//            content: 'content3'
//        }];
//        
////        $httpBackend.whenGET('/articles').respond(articles);
//       
//        $httpBackend.whenGET('/unknown').respond(500, ['error']);
//    })
//;
