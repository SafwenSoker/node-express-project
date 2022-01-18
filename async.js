console.log("started a first task")

setTimeout(() => {
    console.log("Second task, but going to be rendered last, because the setTimeout is executed when the stack is empty, so actually it's not that the setTimout function is rendered after 0ms of its execution but when is stack is clear for the first time after its execution.");
}, 0)
console.log("Third task");

console.log("Task after the setInterval");
const { readFile, writeFile } = require("fs").promises;
//listen is asynchronous
const http = require("http")
const server = http.createServer((req, res) => {
    res.end("Helllllo")
})
// server.listen(5000, () => {
//     console.log("Server listening on port 5000....");
// })
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)


const start = async () => {
    try {
        var first = await readFile("./content/first.txt", "utf-8")
        var second = await readFile("./content/second.txt", "utf-8")
        await writeFile("./content/await-file-result.txt",
            `This is the await file result version 3 (added apend flag) with filesystem promises ${first} ${second}`
            , { flag: "a" })
        console.log(first, second);
    } catch (err) {
        console.log(err);
    }
}
start()