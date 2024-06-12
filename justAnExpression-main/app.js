const express = require('express');
const logger = require('morgan');
const indexRouter = require("./routes/indexRouter");
const todoRouter = require("./routes/todoRouter");

// port number
const port = 3000;

// express app
const app = express();

app.use(logger("dev"));
app.use(express.json());

// routes
app.use("/", indexRouter);
app.use("/api/todo/", todoRouter);

// listen on port
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});