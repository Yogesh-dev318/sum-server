const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const todos = [{
  id: 1,
  Name: "Todo 1",
  description: "This is todo 1",
  done: false,
}, {
  id: 2,
  Name: "Todo 2",
  description: "This is todo 2",
  done: false,
}, {
  id: 3,
  Name: "Todo 3",
  description: "This is todo 3",
  done: false,

}, {
  id: 4,
  Name: "Todo 4",
  description: "This is todo 4",
  done: false,
}, {

  id: 5,
  Name: "Todo 5",
  description: "This is todo 5",
  done: false,
}, {
  id: 6,
  Name: "Todo 6",
  description: "This is todo 6",
  done: false,
}, {
  id: 7,
  Name: "Todo 7",
  description: "This is todo 7",
  done: false,
}, {
  id: 8,
  Name: "Todo 8",
  description: "This is todo 8",
  done: false,

}, {
  id: 9,
  Name: "Todo 9",
  description: "This is todo 9",
  done: false,
}, {

  id: 10,
  Name: "Todo 10",
  description: "This is todo 10",
  done: false,
}]

app.get("/todo", (req, res) => {
  const todo = todos.find(t => t.id == req.query.id);
  res.json({
    todo
  })
})

app.get("/todos", (req, res) => {
  const randomTodos = [];
  for (let i = 0; i < todos.length; i++) {
    const random=Math.random()
    console.log(random)
    if (random > 0.5) {
      randomTodos.push(todos[i]);
    }
  }
  res.json({
    todos: randomTodos,
  })
});

app.listen(8080)