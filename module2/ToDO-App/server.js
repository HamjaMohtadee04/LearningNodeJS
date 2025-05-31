const http = require("http")
// const { text, json } = require("stream/consumers")
const path = require("path")
const filePath =path.join(__dirname,"./db/todo.json")
const fs = require("fs")


const server = http.createServer((req,res)=>{
    const url = new URL(req.url, `http://${req.headers.host}`);
    const pathname = url.pathname


//setting headers
//get all todos
    if (pathname ==="/todos" && req.method ==='GET'){

        const data = fs.readFileSync(filePath,{encoding:"utf-8"})

        res.writeHead(200,{
            "content-type":"application/json",
        })
        res.end(
            data
        )
    } 
    //post a todo
    else if(pathname ==="/todos/create-todo" && req.method ==='POST'){
        let data =""
        req.on("data",(chunk)=>{
            data =data + chunk
        })

        req.on("end",()=>{
            const {title,body} =JSON.parse(data)
            const createdAt = new Date().toLocaleString()

            const allTodos = fs.readFileSync(filePath,{encoding:"utf-8"})
            const parsedAlltodos = JSON.parse(allTodos)
            
             parsedAlltodos.push({title,body,createdAt})  
             fs.writeFileSync(filePath,JSON.stringify(parsedAlltodos,null,2),{encoding:'utf-8'})
              res.end(JSON.stringify(
                {title,body,createdAt},null,2
              ))
        })
 }

    else if (pathname==="/todo" && req.method ==='GET'){
       const title = url.searchParams.get("title")
       console.log(title);
     const data = fs.readFileSync(filePath,{encoding:"utf-8"})
const parsedData = JSON.parse(data)
const todo = parsedData.find((todo)=> todo.title === title)
const stringifiedTodo = JSON.stringify(todo)
        res.writeHead(200,{
            "content-type":"application/json",
        })
        res.end(stringifiedTodo)
    }
    
    //UPDATE TODO
else if(pathname ==="/todos/update-todo" && req.method ==='PATCH'){
    const title = url.searchParams.get("title")
        let data =""
        req.on("data",(chunk)=>{
            data =data + chunk
        })

        req.on("end",()=>{
            const {body} =JSON.parse(data)

            const allTodos = fs.readFileSync(filePath,{encoding:"utf-8"})
            const parsedAlltodos = JSON.parse(allTodos)
            
         const todoIndex = parsedAlltodos.findIndex((todo)=>todo.title === title)
            parsedAlltodos[todoIndex].body = body



             fs.writeFileSync(filePath,JSON.stringify(parsedAlltodos,null,2),{encoding:'utf-8'})
              res.end(JSON.stringify(
                {title,body,createdAt: parsedAlltodos[todoIndex].createdAt},null,2
              ))
        })
 }

    else{
        res.end("route not found")
    }

})

server.listen(5000,"127.0.0.1",()=>{
    console.log("server listening to localhost");
})

