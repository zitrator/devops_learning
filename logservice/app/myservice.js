/**
 * hello express nodejs
 */


let fs = require('fs');
let express = require('express');
let app = express();
let fname = process.env.LOG_FNAME;

app.get('/', function (req, res) {
    fs.readFile('/common_logs/man.txt', 'utf8', function(err, data) {
        if (err) 
            throw err;
        console.log('OK: ');
        console.log(data)
        res.send(data);
    });   
});

app.listen(3000, function () {
    console.log('on port 3000!!');
});