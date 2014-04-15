PORT=8080
curl -i -X POST -d 'title=test-title&content=test-content' http://localhost:${PORT}/articles
curl -i http://localhost:${PORT}/articles
curl -i -X PUT -d 'title=testtest&content=hogehogehoge' http://localhost:${PORT}/articles/1
curl -i http://localhost:${PORT}/articles
curl -i -X DELETE http://localhost:${PORT}/articles/1
curl -i http://localhost:${PORT}/articles

