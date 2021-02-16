var db = require('../models');

exports.getTodos = function (req, res) {
    // res.send("Hi there from todos routes");

    // list all the todos
    db.Todo.find()
        .then(function (todos) {
            res.json(todos);
        })
        .catch(function (err) {
            res.send(err);
        });
}

exports.createTodo = function (req, res) {
    // res.send("Hi there,from post route");
    // console.log(req.body);

    // create new todo
    db.Todo.create(req.body)
        .then(function (newTodo) {
            res.json(newTodo);
        })
        .catch(function (err) {
            console.log(err);
            res.send(err);
        });
}

exports.getTodo = function (req, res) {
    // console.log(req.params.todoId);
    // retrieve a todo
    db.Todo.findById(req.params.todoId)
        .then(function (foundTodo) {
            res.json(foundTodo);
        })
        .catch(function (err) {
            res.send(err);
        });

}

exports.updateTodo = function (req, res) {
    // update a todo
    // res.send("Update a todo");
    db.Todo.findOneAndUpdate({ _id: req.params.todoId }, req.body, { new: true })
        .then(function (todo) {
            res.json(todo);
        })
        .catch(function (err) {
            res.send(err);
        });
}

exports.deleteTodo = function (req, res) {
    // delete a todo
    // res.send("delete route");
    db.Todo.findByIdAndDelete(req.params.todoId)
        .then(function () {
            res.json({ message: "deleted" });
        })
        .catch(function (err) {
            res.send(err);
        });
}

module.exports = exports;