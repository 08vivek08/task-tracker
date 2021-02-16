$(document).ready(function () {
    //    request /api/todos
    $.getJSON("/api/todos")
        .then(function (data) {
            // console.log(data);
            addTodos(data);
        })
        .catch(function (err) {
            console.log(err);
        });

    $("#todoInput").keypress(function (event) {
        // console.log(event.which);
        if (event.which == 13) {
            // Enter key has event.which=13
            createTodo();
        }
    });


    /*
    // it will not work,because it will just respond to the span which were initially present in html
    // try click bolded list in heading todolist,it is also a span,it will work
    $("span").on("click", function () {
        console.log("Clicked");
    });

    
    so we have a alternate solution for this : ----
    */
    $(".list").on("click", "span", function (event) {
        event.stopPropagation();

        // console.log("Clicked");

        removeTodo($(this).parent())
    });

    $(".list").on("click", "li", function () {
        // alert("clicked");
        // console.log(todo.data().completed);
        updateTodo($(this));
    });

});

function addTodos(todos) {
    todos.forEach(todo => {
        // console.log(todo.name);
        // console.log(todo._id);
        addTodo(todo);
    });
}

function addTodo(todo) {
    var newTodo = $("<li class='task'>" + todo.name + "<span>X<span></li>");

    // store id, but hide it
    newTodo.data("id", todo._id);
    newTodo.data("completed", todo.completed);
    // console.log(newTodo.data());

    if (todo.completed) {
        newTodo.addClass("done");
    }

    $(".list").append(newTodo);
}

function createTodo() {
    var usrInput = $("#todoInput").val();
    // console.log(usrInput);
    $.post("/api/todos", { name: usrInput })
        .then(function (newTodo) {
            // console.log(newTodo);
            $("#todoInput").val("");
            addTodo(newTodo);
        })
        .catch(function (err) {
            console.log(err);
        });
}

function removeTodo(todo) {
    // console.log(id);
    var DeleteUrl = "/api/todos/" + todo.data().id;
    $.ajax({
        method: "DELETE",
        url: DeleteUrl
    })
        .then(function (data) {
            // console.log(data);
            todo.remove();
        })
        .catch(function (err) {
            console.log(err);
        });
}

function updateTodo(todo) {
    // console.log(todo.data().completed);
    // console.log(todo.data().id);
    var UpdateUrl = "/api/todos/" + todo.data().id;
    var isDone = !todo.data().completed;
    var updateData = { completed: isDone };
    $.ajax({
        method: "PUT",
        url: UpdateUrl,
        data: updateData
    })
        .then(function (Updatedtodo) {
            todo.toggleClass("done");
            todo.data("completed", isDone);
        })
        .catch(function (err) {
            console.log(err);
        });
}