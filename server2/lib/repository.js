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

Repository.prototype.select = function(callback) {

    this.getRequest('select').query({
        table: 'Article'
    }).end(function(err, response) {

        if (err) {
            return callback(err);
        }
        return callback(null, response);
    });
};

Repository.prototype.load = function(params, callback) {

    this.getRequest('load').query({
        table: 'Article',
        values: JSON.stringify(params)
    }).end(function(err, response) {

        if (err) {
            return callback(err);
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
