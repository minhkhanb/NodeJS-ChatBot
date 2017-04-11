var express = require('express')
var app = express()

app.get('/hello', function(req, res) {
    res.send('word');
});

app.post('/webhook', function (req, res) {
    res.send('Hello World');
});