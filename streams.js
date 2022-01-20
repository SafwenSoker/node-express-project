const http = require('http')
const fs = require('fs')
const { writeFileSync } = require("fs")
// for (let index = 0; index < 100000; index++) {
//     writeFileSync("./content/big-file.txt", `Line number ${index}\n`, { flag: 'a' })
// }
// const { createReadStream } = require("fs")

// const stream = createReadStream("./content/big-file.txt")
// stream.on("data", (result) => {
//     console.log(result);
// })
// stream.on('error', (err) => {
//     console.log(err);
// })

http.createServer(function (req, res) {
    const fileStream = fs.createReadStream('./content/big-file.txt', 'utf-8')
    fileStream.on(('open'), () => {
        fileStream.pipe(res)
    })
    fileStream.on(('error'), (error) => {
        res.end(error)
    })
})
    .listen(5000)