//synchronous way 
//1.file read / I/O intensive task->single thread -> not go to thread pool.


// const fs =require("fs")
// console.log("task1");
// const text = "learning file system"

// //write file sync
// fs.writeFileSync("./hello.txt",text)

// console.log("task2");

// //reading from a file
// const data = fs.readFileSync("./hello.txt",{encoding:"utf-8"})
// console.log("task3");
// console.log(data);


//asynchronous way
// file read -> single thread -> event loop -> thread pool -> task complete.


const { error } = require('console');
const fs = require('fs');

// fs.readFile('./hello-world.txt', {encoding:"utf-8"}, (err, data) => {
//   if (err) {
//     console.error('something went wrong:', err);
//     return;
//   }
 
//  fs.writeFile("./hello.txt",data,{encoding:"utf-8"},(err)=>
// {
//   if (err) {
//     console.error('something went wrong:', err);
//     return;
//   }
//   console.log("written successfully");
// })    

// });

// console.log(text);
// console.log("task2");


const readStream = fs.createReadStream("./hello-world.txt",{encoding:'utf-8'});
const writeStream = fs.createWriteStream("./hello.txt",{encoding:'utf-8'});

readStream.on("data",(data)=>{
    console.log(data);

writeStream.write(data,(error)=>{
    if(error){
        throw Error("Error",error)
    }
})    
})


//readstream error

readStream.on("error",(err)=>{
if(err){
        throw Error("Error",err)
    }
})

writeStream.on("error",(err)=>{
    if(err){
        throw Error("Error",err)
    }
})


readStream.on("end",()=>{
    console.log("reading ended");
    writeStream.end()
})

writeStream.on("finish",()=>{
    console.log("written successfully");
})