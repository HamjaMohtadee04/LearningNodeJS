const http = require("http")

const server = http.createServer((req,res)=>{
    // console.log({req,res});
    // console.log(req.url,req.method);
    // res.end("welcome to ToDo app server")


    if (req.url ==="/todos" && req.method ==='GET'){
        res.end("All todos")
    } else if(req.url ==="/todos/create-todo" && req.method ==='POST'){
        res.end("todo created")
    } else{
        res.end("route not found")
    }

})

server.listen(5000,"127.0.0.1",()=>{
    console.log("server listening to localhost");
})

