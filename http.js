const http = require('http')
const server = http.createServer((req,res)=> {
    if(req.url === '/'){
        res.end('The homepage');
    }
    if(req.url === '/about'){
        res.end('About page');
    }
    res.end('the requested page is not found')
})
server.listen(5000)