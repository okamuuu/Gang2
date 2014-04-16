/*global describe, beforeEach, it*/
'use strict';

var assert  = require('assert');
var repository = require('../lib/repository');

describe('repotisoty', function () {

    it('can request to groonga server', function () {
        
        repository.get('select', 'Article', function(err, response) {

            console.log(response.statusCode);
            console.log(response.headers);
            console.log(response.body);
        });

        assert(true);
    });

});
