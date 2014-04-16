var http = require('http');
var request = require('request');

function Repository(name) {
    this.host = 'localhost';
    this.port = 10041;
    this.name = 'hoge';
};

Repository.prototype.getUrl = function(command) {
    return 'http://' + this.host + ':' + this.port + '/d/' + command;
};

Repository.prototype.get = function(command, table, callback) {

    request( this.getUrl(command) + '?table=' + table, function(err, response, body) {
        
        if (err) {
            return callback(err);
        }
        return callback(null, response);
    });
};

module.exports = new Repository();
