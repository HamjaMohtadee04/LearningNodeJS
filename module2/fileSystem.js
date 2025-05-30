//synchronous way 
//1.file read / I/O intensive task->single thread -> not go to thread pool.


const fs =require("fs")
console.log("task1");
const text = "learning file system"

//write file sync
fs.writeFileSync("./hello.txt",text)

console.log("task2");

//reading from a file
const data = fs.readFileSync("./hello.txt",{encoding:"utf-8"})
console.log("task3");
console.log(data);







//asynchronous way
// file read -> single thread -> event loop -> thread pool -> task complete.