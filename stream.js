const fs = require("fs")

const readStream = fs.createReadStream("stream.txt", { encoding: "utf-8" })
const writeStream = fs.createWriteStream("result.txt", { encoding: "utf-8" })

readStream.on("data", (data) => {
    writeStream.write("CHUNK: => " + data)
})

readStream.on("error", (err) => {
    console.log(err)
})

readStream.on("end", () => {
    console.log("Completed")
})