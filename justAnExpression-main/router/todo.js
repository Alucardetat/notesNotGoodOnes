// links router and uuid to express 
const express = require('express');
const router = express.Router();
const uuidv4 = require('uuid').v4;

// array of todos
let todos = [
    {
      id: "haf24jd",
      todo: "do laundry",
      done: "false"
    },
    {
      id: "jp2nkl2",
      todo: "wash dishes",
      done: "true"
    }
  ]

  // route for getting all todos
  router.get('/get-all-todos', (req, res) => {
    res.json(todos);
  });

  // route for getting todo by id
  router.get('/get-todo-by-id/:id', (req, res) => {
    const {id} = req.params;
    const foundId = todos.find(item => item.id === id);
    if (foundId) {
        res.json(foundId);
    } else {
        // if id not found, returns message saying id not found
        res.json({message: "The Todo ID you are looking for does not exist."});
    }
  });

  // route for getting todo by done
  router.get('/get-todos-by-done/:done', (req, res) => {
    const {done} = req.params;
    const newDoneArray = todos.filter(item => item.done === done);
    res.json(newDoneArray);
  });

  // route for creating new todo
  router.post('/create-new-todo', (req, res) =>{
    const {todo} = req.body;
    const newTodo = {
        todo,
        id: uuidv4(),
        done: 'false'
    }
    // checks if todo already exists & returns message if it does
    if (todo === newTodo.todo) {
        res.json({message: "Todo already exists."});
    // if todo does not exist, adds new todo to array
    } else {
        todos.push(newTodo);
        res.json(todos);
    }
  });

  // route for updating todo
  router.put("/update-todo", (req, res) => {
    const {id, todo, done} = req.body;
    const updatedTodo = todos.find(item => item.id === id);
    // if todo not found, returns message
    if (!updatedTodo) {
        res.json({message: "Todo not found, cannot update."})
    // if todo found, updates todo
    } else {
        if (todo || done) {
            if (todo) {
                updatedTodo.todo = todo;
            }
            if (done) {
                updatedTodo.done = done;
            }
            res.json({updatedTodo});
        // if no 'todo' or 'done', returns message
        } else {
            res.json({message: "No todo or already done, cannot update."});
        }
    };
  });

  // route for marking todo as done
  router.put("/mark-done", (req, res) => {
    const {id, todo, done} = req.body;
    const isDone = todos.find(item => item.id === id);
        // if marked done, returns complete
        if (isDone && done === "true") {
            res.json({message: "todo complete"});
        }
        // if not marked done, returns incomplete
        if (isDone && done === "false") {
            res.json({message: "todo incomplete"});
        // if of neither status, returns message
        } else {
            res.json({message: "The Todo is not marked complete or incomplete."});
        }
    });

    // route for deleting todo
    router.delete("/delete-todo/:id", (req, res) => {
        const {id} = req.params;
        const deleteTodo = todos.filter(item => item.id !== id);
        // if todo not found, returns message
        if (deleteTodo.length === todos.length) {
           res.json({message: "Todo not found, cannot delete"});
        // if todo found, deletes todo
        } else {
            todos = deleteTodo;
            res.json({message: "Item deleted."});
        }
    });

  

module.exports = router;














