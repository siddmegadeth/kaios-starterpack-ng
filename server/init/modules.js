(function() {
    express = module.exports = require("express");
    app = module.exports =  express();
    // http = module.exports = require("http");
    http  = module.exports = require('http').Server(app);
    io  = module.exports = require('socket.io')(http);
    log = console.log.bind(console);
    bodyParser = module.exports = require('body-parser');

})()
