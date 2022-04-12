/**
 * express nodejs
 * any_service.js
 */


let fs = require('fs');
let express = require('express');
let app = express();
let fname = process.env.LOG_FNAME;

app.get('/', function (req, res) {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let today  = new Date();
    let str = "Last Sync: " + today.getDate() + "/" + (today.getMonth()+1)  + "/" 
                + today.getFullYear() + " @ " + today.getHours() + ":"  
                + today.getMinutes() + ":" + today.getSeconds() + "\n";

    fs.appendFile('/common_logs/man.txt', str, function (err) {
    if (err) throw err;
        res.writeHead(200, {'Content-type': 'text/plain'});
        res.end(str);
    });
});

app.listen(3001, function () {
    console.log('js_app on port 3001');
});