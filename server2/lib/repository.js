var http = require('http');
var request = require('superagent');

function Repository(name) {
    this.host = 'localhost';
    this.port = 10041;
    this.name = 'hoge';
};

Repository.prototype.getRequest = function(command) {
    return request.get('http://' + this.host + ':' + this.port + '/d/' + command);
};

Repository.prototype.find = Repository.prototype.select = function(params, callback) {

    this.getRequest('select').query({
        table: 'Article'
    }).query(params).end(function(err, response) {

        if (err) {
            return callback(err);
        }

//        var count = response.body[1][0].shift()[0];
//        var keys = response.body[1][0].shift();
//        var keysLength = keys.length;
//        var valuesList = response.body[1][0];
//
//        var articles = [];
//        for (var i = 0; i < count; i++) {
//            var article = {};
//            for (var j = 0; j < keysLength; j++) {
//                article[keys[j][0]] = valuesList[i][j];     
//            }
//            articles.push(article);
//        }

        return callback(null, response.body);
    });
};

Repository.prototype.create =
    Repository.prototype.save =
    Repository.prototype.load = function(params, callback) {

        this.getRequest('load').query({
            table: 'Article',
            values: JSON.stringify(params)
        }).end(function(err, response) {

            if (err) {
                return callback(err);
            }

            if (response.statusCode !== 200) {
                return callback('status code is invalid: ' + response.statusCode);
            }

            return callback(null, response);
        });
};

Repository.prototype.delete = function(params, callback) {

    this.getRequest('delete').query({
        table: 'Article',
    }).query(params).end(function(err, response) {

        if (err) {
            return callback(err);
        }
        return callback(null, response);
    });
};

module.exports = new Repository();
