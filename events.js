const EventEmitter = require('events')
const http = require("http")
const customEmitter = new EventEmitter()

customEmitter.on(('response'), () => {
    console.log(`Data recieved`);
})
customEmitter.emit("response")
//not displayed in the console

customEmitter.on(('response'), () => {
    console.log(`Data recieved not going to be displayed`);
})

//creating server using the request event
const server = http.createServer()
server.on('request', (req, res) => {
    res.end("listening")
})
server.listen(5000)