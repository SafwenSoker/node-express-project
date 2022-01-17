const os = require("os")
var userInfo = os.userInfo()
console.log(userInfo);
console.log(`The system uptime is ${os.uptime()}`);
const path = require("path")
var filePath = path.join("/content////", "///sub-folder///", "test.txt")
console.log(filePath);
const absoluteFilePath = path.resolve(__dirname, "content", "sub-folder", "test.txt")
console.log(absoluteFilePath);
const { readFileSync, writeFileSync } = require('fs')
const firstFile = readFileSync(absoluteFilePath, "utf-8")
const secondFile = readFileSync("./content/first.txt", "utf-8")
console.log(firstFile, secondFile);
writeFileSync("./content/result-write.txt", `The result of writeFileSync to write test.txt file and first.txt in the same file : ${firstFile}  ${secondFile}`)
const { readFile, writeFile } = require("fs")
var file = readFile("./content/result-write.txt", "utf-8", (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    const first_result = result
    const second_result = readFile("./content/second.txt", "utf-8", (err, result) => {
        if (err) {
            console.log(err)
        }
        writeFile("./content/result-async.txt", `THe result of async file writing : ${first_result} ${second_result}`, (err, rsult) => {
            if (err) {
                console.log(err);
            }
            console.log(result);
        })
    })
})
if (file != null) {
    console.log(file);
}