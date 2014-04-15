var restify = require('restify');

var server = restify.createServer(),
    articleSave = require('save')('articlj');

restify.CORS.ALLOW_HEADERS.push('accept');
restify.CORS.ALLOW_HEADERS.push('sid');
restify.CORS.ALLOW_HEADERS.push('lang');
restify.CORS.ALLOW_HEADERS.push('origin');
restify.CORS.ALLOW_HEADERS.push('withcredentials');
restify.CORS.ALLOW_HEADERS.push('x-requested-with');

server
    .use(restify.fullResponse())
    .use(restify.bodyParser())
    .use(restify.CORS());

// search
server.get('/articles', function(req, res, next) {
    articleSave.find({}, function(error, articles) {

        if (error) {
            return next(new restify.InvalidArgumentError(JSON.stringify(error.errors)));
        }

        res.send(articles);
    })
});

// show
server.get('/articles/:id', function(req, res, next) {
    articleSave.find({
        _id: req.params.id
    }, function(error, articles) {

        if (error) {
            return next(new restify.InvalidArgumentError(JSON.stringify(error.errors)));
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

    articleSave.create({
        title: req.params.title,
        content: req.params.content
    }, function(error, article) {

        if (error) {
            return next(new restify.InvalidArgumentError(JSON.stringify(error.errors)));
        }

        res.send(201, article)
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

    articleSave.update({
        _id: req.params.id,
        title: req.params.title,
        content: req.params.content
    }, function(error, article) {

        if (error) {
            return next(new restify.InvalidArgumentError(JSON.stringify(error.errors)));
        }

        res.send(201, article)
    })
});

server.del('/articles/:id', function(req, res, next) {

    if (req.params.id === undefined) {
        return next(new restify.InvalidArgumentError('Id must be supplied'))
    }
        
    articleSave.delete(req.params.id, function(error, article) {
    
        if (error) {
            return next(new restify.InvalidArgumentError(JSON.stringify(error.errors)));
        }
        
        res.send()
    })
})

server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});
