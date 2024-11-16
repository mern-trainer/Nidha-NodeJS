// const os = require("os")

// console.log(os.userInfo())

const fs = require("fs")

fs.writeFile("sample.txt", "Hello File", (err) => {
    if (err) {
       return console.log(err) 
    }
    console.log("File created")
})

fs.readFile("sample.txt", { encoding: "utf-8" }, (err, data) => {
    if (err) {
        return console.log(err) 
    }
    console.log(data)
})

fs.appendFile("sample.txt", " this is added data", (err) => {
    if (err) {
        return console.log(err) 
    }
    console.log("Data added")
})

fs.unlink("sample.txt", (err) => {
    if (err) {
        return console.log(err)
    }
    console.log("File deleted")
})

fs.rename("sample.txt", "new.txt", (err) => {
    if (err) {
        return console.log(err) 
    }
    console.log("Done")
})