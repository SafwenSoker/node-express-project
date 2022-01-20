const http = require('http')
const { readFileSync } = require('fs')
const homepage = readFileSync('./public/index.html')
const homepageJS = readFileSync('./public/browser-app.js')
const homepageCSS = readFileSync('./public/styles.css')
const server = http.createServer((req, res) => {
    const url = req.url;
    // console.log(url)
    // console.log(req.method)
    if (url === "/") {
        res.writeHead(200, {
            "content-type": "text/html"
        })
        res.write(homepage)
    } else if (url === "/browser-app.js") {
        res.writeHead(200, {
            "content-type": "text/javascript"
        })
        res.write(homepageJS)
    }
    else if (url === "/styles.css") {
        res.writeHead(200, {
            "content-type": "text/css"
        })
        res.write(homepageCSS)
    } else {
        res.writeHead(404, {
            "content-type": "text/html"
        })
        res.write("<h1>Resource not found</h1>")
    }
    res.end()
}).listen(5000)