// const http = require('http');

// console.log("Hello from nodejs")
// console.log("PROCESS: ", process)
// console.log("======>",require)
// const helpers=require("./helpers")

// const server = http.createServer((req, res) => {
    
//     res.end("Test updated")
    
// })

// server.listen(8000)

// const server=http.createServer((req,res)=>{
// res.end("Hello world from nodejs")
// })

// server.listen(8000)


// const total=helpers.sum(10,200);

// console.log("TOTAL: ",total)

const fs=require('fs');

const fileName="target.txt";

// fs.watch(fileName,()=>console.log("File changed"))

// const data=fs.readFileSync(fileName);
// console.log(data.toString())

// fs.readFile(fileName,(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data.toString())
//     }

// })

// fs.readFile(fileName, (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data.toString())
//     }
// })


const errHandler=err=>console.log(err);
const dataHandler=data=>console.log(data.toString());

fs.readFile(fileName,(err,data)=>{
    if(err)errHandler(err)
    dataHandler(data)
})


console.log("Nodejs asynchronous programming ...")