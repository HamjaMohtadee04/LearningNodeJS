const http = require("http")
const { text, json } = require("stream/consumers")

const data =[
  {
    "title": "Buy groceries",
    "body": "Milk, eggs, bread, and vegetables",
    "createdAt": "2025-05-31T10:30:00Z"
  },
  {
    "title": "Study TypeScript",
    "body": "Review union types and generics for 1 hour",
    "createdAt": "2025-05-31T12:00:00Z"
  },
  {
    "title": "Fix UI bug in dashboard",
    "body": "Resolve alignment issue in the header component",
    "createdAt": "2025-05-31T14:15:00Z"
  },
  {
    "title": "Write blog post",
    "body": "Topic: Introduction to Manual Testing for Beginners",
    "createdAt": "2025-05-31T15:45:00Z"
  }
]


const server = http.createServer((req,res)=>{
    // console.log({req,res});
    // console.log(req.url,req.method);
    // res.end("welcome to ToDo app server")

//setting headers
    if (req.url ==="/todos" && req.method ==='GET'){
        res.writeHead(200,{
            // "content-type":"application/json",
            "content-type":"text/html",
            // "gmail":'todo@gmail.com'
        })

        // res.setHeader("content-type","text/plain")
        // res.setHeader("email","tod01@gmail.com")
        // res.statusCode =201
        // res.end(JSON.stringify(data))
        res.end(`<h1>hello there</h1> <h1>hello there</h1> <h1>hello there</h1>`)
    } else if(req.url ==="/todos/create-todo" && req.method ==='POST'){
        res.end("todo created")
    } else{
        res.end("route not found")
    }

})

server.listen(5000,"127.0.0.1",()=>{
    console.log("server listening to localhost");
})

