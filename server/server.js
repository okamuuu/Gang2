var restify = require('restify'),
    http = require('http');

var server = restify.createServer(),
//    repository = require('save')('articlj');
    repository = require('./lib/repository');

server
    .use(restify.fullResponse())
    .use(restify.bodyParser())
    .use(restify.CORS({'origins': ['http://localhost']}));

server.get('/articles', function(req, res, next) {
    
    repository.find({}, function(error, response) {

        if (error) {
            return next(new restify.InternalError(JSON.stringify(error.errors)));
        }

        res.send(response.body);
    })
});

// show
server.get('/articles/:id', function(req, res, next) {
    repository.find({
        _id: req.params.id
    }, function(error, articles) {

        if (error) {
            return next(new restify.InternalError(JSON.stringify(error.errors)));
        }

        res.send(articles);
    })
});

server.post('/articles', function(req, res, next) {

    if (req.params.title === undefined) {
        return next(new restify.InvalidArgumentError('Name must be supplied'))
    } else if (req.params.content === undefined) {
        return next(new restify.InvalidArgumentError('Content must be supplied'))
    }

    repository.create({
        title: req.params.title,
        content: req.params.content
    }, function(error, response) {

        if (error) {
            return next(new restify.InternalError(JSON.stringify(error.errors)));
        }

        res.send(201, response.body)
    })
});

server.put('/articles/:id', function(req, res, next) {

    if (req.params.id === undefined) {
        return next(new restify.InvalidArgumentError('Id must be supplied'))
    } else if (req.params.title === undefined) {
        return next(new restify.InvalidArgumentError('Title must be supplied'))
    } else if (req.params.content === undefined) {
        return next(new restify.InvalidArgumentError('Content must be supplied'))
    }

    repository.update({
        _id: req.params.id,
        title: req.params.title,
        content: req.params.content
    }, function(error, resonse) {

        if (error) {
            return next(new restify.InternalError(JSON.stringify(error.errors)));
        }

        res.send(201, response.body)
    })
});

server.del('/articles/:id', function(req, res, next) {

    if (req.params.id === undefined) {
        return next(new restify.InvalidArgumentError('Id must be supplied'))
    }
        
    repository.delete(req.params.id, function(error, response) {
    
        if (error) {
            return next(new restify.InternalError(JSON.stringify(error.errors)));
        }
        
        res.send()
    })
})

server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});
