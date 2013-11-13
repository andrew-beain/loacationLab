var express = require('express');
var app = express();
var x =
{
    "name": "Andrew Beain",
    "vacation": {
        "places": ["38.6833, 109.5667", "55.7500, 37.6167"]
    }
};

app.get('/', function (req, res) {
    res.send({ name: x });
});

var port = process.env.PORT || 5000;
app.listen(port);