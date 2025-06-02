 import express, { Application, Request, Response } from 'express'
 import fs from "fs"
 import path from "path"


const app: Application = express()

app.use(express.json())


const TodosRouter = express.Router()

app.use("/todos",TodosRouter)

TodosRouter.get("/all-todos", (req :Request , res: Response) => {
  const data = fs.readFileSync(filePath,{encoding:"utf-8"})  
        
  res.json({
    message:"hello from router",
    data
  })
  
})

const filePath = path.join(__dirname,"../../db/todo.json")



app.get('/', (req :Request , res: Response) => {
//   console.log(req.);
  res.send('welcome to todos app')
})

// all todo
app.get('/todos', (req :Request , res: Response) => {
     console.log("from query",req.query);
    console.log("from params",req.params);
  const data = fs.readFileSync(filePath,{encoding:"utf-8"})  
        
  res.json(data)
})

//post a todo
app.post('/todos/create-todo', (req :Request , res: Response) => {
    const {title,body} = req.body
    console.log(title,body);
  res.send('Hello World!')
})

export default app;