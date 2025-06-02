"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_routes_1 = require("./todos/todos.routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const userRouter = express_1.default.Router();
app.use("/todos", todos_routes_1.TodosRouter);
app.use("/users", userRouter);
app.get('/', (req, res, next) => {
    // res.send('welcome to todos app')
    console.log('i am custom middlewear');
    next();
}, (req, res) => {
    res.send('welcome to todos app');
});
exports.default = app;
