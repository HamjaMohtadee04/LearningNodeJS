import express,{Application, Request, Response} from "express"
import fs from "fs"
import path from "path"
import { client } from "../../config/mongoDB"
import { ObjectId } from "mongodb"
export const TodosRouter = express.Router()


TodosRouter.get("/",async (req :Request , res: Response) => {
   const db = await client.db("todosDB")
  const collection = await db.collection("todos")

     const cursor = collection.find({})
     const todos = await cursor.toArray()
   res.json(todos)
})

//post a todo
TodosRouter.post('/create-todo', async(req :Request , res: Response) => {
const {title,description,priority} = req.body




  const db = await client.db("todosDB")
  const collection = await db.collection("todos")
 await collection.insertOne({
      title: title,
      description: description,
      priority:priority,
      isCompleted:false
    })
     const cursor = collection.find({})
     const todos = await cursor.toArray()
    
    // console.log(title,body);
  res.json(todos)
})

TodosRouter.get("/:id",async(req :Request , res: Response) => {
  const id = req.params.id
 const db = await client.db("todosDB")
  const collection = await db.collection("todos")

  const todo = await collection.findOne({_id: new ObjectId(id)})
  res.json(todo)
})

TodosRouter.put("/update-todo/:id",async(req :Request , res: Response) => {
     const id = req.params.id
 const db = await client.db("todosDB")
 const collection = await db.collection("todos")
 const {title,description,priority,isCompleted} = req.body
 const filter = {_id: new ObjectId(id)}
  
 const updatedTodo =await collection.updateOne(
  filter,
  {$set:{title,description,priority,isCompleted}},
  {upsert:true}
)
  res.json(updatedTodo)
})

TodosRouter.delete("/delete-todo/:id",async(req :Request , res: Response) => {
    const id = req.params.id
 const db = await client.db("todosDB")
  const collection = await db.collection("todos") 

 await collection.deleteOne({_id: new ObjectId(id)})
  res.json({
    message:"deleted successfully"
  })
})

