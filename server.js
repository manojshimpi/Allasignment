let app = require('express')(),
server = require('http').Server(app),
bodyParser = require('body-parser')
const api = require('./router');
express = require('express'),
http = require('http'),
path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));
 

app.use('/api',api);
 
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './dist/allment/index.html'));
})

server.listen(3000, function () {
    console.log('Example listening on port 3000!');
});

