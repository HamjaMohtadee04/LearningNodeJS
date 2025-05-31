const path = require('path')
const fs = require('fs')

const inputArguments = process.argv.slice(2)

const text =inputArguments.join(" ").concat("\n")

const timestamp = new Date().toISOString();
console.log(timestamp);


const message =`${text} ${timestamp}\n`

if(!message){
    console.log("please provide a message to log");
    console.log("example: node index.js hello world!");
    process.exit(1)
}

const filePath =path.join(__dirname,"log.txt")
fs.appendFile(filePath,message,{encoding:'utf-8'},()=>{
    console.log("your log added succesfully");
})



console.log(filePath);
console.log(text);



