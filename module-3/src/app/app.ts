 import express, { Application, Request, Response } from 'express'
import { TodosRouter } from './todos/todos.routes'


const app: Application = express()

app.use(express.json())



const userRouter = express.Router()

app.use("/todos",TodosRouter)
app.use("/users",userRouter)


app.get('/', (req :Request , res: Response) => {
//   console.log(req.);
  res.send('welcome to todos app')
})



export default app;