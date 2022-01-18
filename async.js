console.log("started a first task")

setTimeout(() => {
    console.log("Second task, but going to be rendered last, because the setTimeout is executed when the stack is empty, so actually it's not that the setTimout function is rendered after 0ms of its execution but when is stack is clear for the first time after its execution.");
}, 0)
console.log("Third task");

console.log("Task after the setInterval");
const { readFile } = require("fs");
//listen is asynchronous
const http = require("http")
const server = http.createServer((req, res) => {
    res.end("Helllllo")
})
server.listen(5000, () => {
    console.log("Server listening on port 5000....");
})

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf-8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

const start = async () => {
    try {
        var first = await getText("./content/first.txt")
        var sescond = await getText("./content/second.txt")
        console.log(first, second);
    } catch (err) {
        console.log(err);
    }
}