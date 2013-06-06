#!/usr/bin/env node

var http = require('http');
var WebSocket = require('faye-websocket');

var server = http.createServer(function (req, res) {
    res.writeHead(200);
    res.end('Hello World\n');
}).listen(8080);

'application/json-rpc';

server.on('upgrade', function(request, socket, head) {
    if (!WebSocket.isWebSocket(request))
        return;

    var ws = new WebSocket(request, socket, head);

    ws.on('message', function(event) {
        // TODO
    });

    ws.on('close', function(event) {
        console.log('close', event.code, event.reason);
        ws = null;
    });
});
