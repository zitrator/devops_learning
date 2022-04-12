/**
 * express nodejs
 * log_view_service.js
 */


let fs = require('fs');
let express = require('express');
let app = express();
let fname = process.env.LOG_FNAME;

app.get('/', function (req, res) {
    fs.readFile('/common_logs/man.txt', 'utf8', function(err, data) {
        if (err) {
            res.send('no logs');
        }
        console.log('get on 3000');
        res.send(data);
    });   
});

app.listen(3000, function () {
    console.log('log_view_service.js on port 3000');
});