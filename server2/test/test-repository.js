/*global describe, beforeEach, it*/
'use strict';

var assert = require('assert');
var repository = require('../lib/repository');

describe('repotisoty', function() {

    it('can request to select', function() {

        repository.select(function(err, response) {
            assert(response.statusCode == 200);
        });
    });

    it('can request to load', function() {
        repository.load([{
            "keywords": ["perl", "javascript", "php"],
            "_key": "new_record",
            "content": "this is new record.",
            "display_fg": "0",
            "title": "new record",
        }], function(err, response) {
            assert(response.statusCode == 200);
        });
    });

    it('can request to delete', function() {
        repository.delete({
            "key": "new_record",
        }, function(err, response) {
            console.log(response);
            assert(response.statusCode == 200);
        });
    });


});
