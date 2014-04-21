PORT=8080
curl -v -H "Accept: application/json" -H "Content-type: application/json" -X POST -d '{"title":"test","content":"content"}' http://localhost:8080/articles
curl -i http://localhost:${PORT}/articles
curl -i -X PUT -d 'title=testtest&content=hogehogehoge' http://localhost:${PORT}/articles/1
curl -v -H "Accept: application/json" -H "Content-type: application/json" -X POST -d '{"title":"test!!","content":"content!!"}' http://localhost:8080/articles
curl -i http://localhost:${PORT}/articles
curl -i -X DELETE http://localhost:${PORT}/articles/1
curl -i http://localhost:${PORT}/articles

