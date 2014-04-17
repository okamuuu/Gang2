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

Repository.prototype.get = function(command, params, callback) {

    this.getRequest(command).query({table: 'Article'}).end(function(err, response) {

        if (err) {
            return callback(err);
        }
        return callback(null, response);
    });
};

module.exports = new Repository();
