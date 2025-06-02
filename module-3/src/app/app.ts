 import express, { Application, NextFunction, Request, Response } from 'express'
import { TodosRouter } from './todos/todos.routes'


const app: Application = express()

app.use(express.json())



const userRouter = express.Router()

app.use("/todos",TodosRouter)
app.use("/users",userRouter)


app.get('/', (req :Request , res: Response,next: NextFunction) => {
  // res.send('welcome to todos app')
  console.log('i am custom middlewear');
  next()
},
(req :Request , res: Response) => {
  res.send('welcome to todos app')
})



export default app;