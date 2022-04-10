/**
 * hello express nodejs
 */


let express = require('express');
let app = express();
let fname = process.env.LOG_FNAME;

app.get('/', function (req, res) {
    res.send("hello world " + toString(fname));
});

app.listen(3000, function () {
    console.log('on port 3000!!');
});