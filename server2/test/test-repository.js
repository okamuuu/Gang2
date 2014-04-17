/*global describe, beforeEach, it*/
'use strict';

var assert  = require('assert');
var repository = require('../lib/repository');

describe('repotisoty', function () {

    it('can request to groonga server', function () {
        
        repository.get('select', 'Article', function(err, response) {
            console.log(response);
            assert(response.statusCode == 200);
        });

        repository.get('select', 'Article', function(err, response) {
            assert(response.statusCode == 200);
        });


    });

});
