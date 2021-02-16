# Todo-app by making json api first & then using ajax
  > A Json api web application


## Steps to build todo app

## Initial steps

### Make a todo api for todos app
* Install & require express, mongoose, body-parser
* Setup & check initial GET("/") route
* Make models directory & setup db, mongoose schema for initial properties (Here : name, completed, created_date) & connect to mongo shell
* Make routes directory to setup ("/api/todos") routes & use router in todo.js file in that directory
* In todo.js file setup initial GET("/") routes & use db.Todo (created in models) to list all the todo
* Setup POST route to create new todo using body-parser
* Setup GET("/:todoId") route to list specific todo
* Setup PUT("/:todoId") route to update a specific todo
* Setup DELETE("/:todoId") route to delete a specific todo
* Json api for todos app is ready
* Refactor your todo's routes
* Make helpers directory
* Copy all the function from routes & paste it into helpers/todo.js file & give them specific name, making them objects of exports
* Finally module.exports = exports in helpers/todo.js
* Require helpers in actual routes/todo.js file 
* Use router.route("/") to .get() , .post()
* Use router.route("/:todoId") to .get() , .put() , .delete()
* Refactor code of Json api for todos app is ready

## Build a todo list app on top of the todo api
* In main index.js file, res.sendFile a index.html file
* To use app.js & app.css for that file, use this line
* app.use(express.static(__dirname + "/public"));
* And make a public directory, & put these two files there
* Setup css file
* Include jquery link in index.html
* Use $(document).ready function to get("/api/todos/")
* To get all the todos, use $.getJSON("/api/todos/") & call addTodos function inside it
* In addTodos function, forEach todo call addTodo
* In addTodo function, make a variable newTodo & assign a li using jquery
* We have to also store, todo id & completed in this variable, but it should be hidden
* For this, use newTodo.data("id",todo._id) & similarly for completed
* This hidden data will be used to call all the routes("/api/todos/:todoId") & to toggleClass("done") 
+ Now we have to give a post request to add newtodo
+ Use keypress function & check for event.which==13, which is for ENTER key
+ Use $("#todoInput").val() to get the value of newtodo user has written in form, this same function will be used to erase that data in html form
+ Use $.post to make a post request & call addTodo to add it in html
* Use $.ajax to update & delete a todo, there is no shortcut
* $(".list").on(click, [2ND_ARG], function(){}) will be used, because this function is inside the $(document).ready due to which these function will only be called on those parameters,which are present in starting of HTML file
* Use event.stopPropagation() in deletion, to stop propagation of the event due to edit
* Use id from todo.data().id & similarly for completed
* Use todo.remove() after successful ajax request for delete
* Use todo.toggleClass("done") & change completed data for todo using todo.data()
* ### TODO APP IS READY
