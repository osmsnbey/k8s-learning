const express = require('express')
const app = express()

app.get('/helloworld/:id', function (request, response) {
 response.send('Hello World! ' + request.params.id);
});

app.get('/foo/:id', function (request, response) {
 response.send('Testing foo:  ' + request.params.id);
});

app.listen(9080, function () {
 console.log('Example app listening on port 9080!')
});