import User from "../models/mongooseModel.js";

async function createToDoInList(req,res){
    const { userId, todoNewTitle, todoNewDescription } = req.body;
    try {
        const update = await User.findOneAndUpdate({ _id: userId }, {
            $push: { todos: {title: todoNewTitle,description: todoNewDescription} }
        });
        const user = update ? await User.findById(userId) : null;
        console.log(user.todos);
        user ? res.status(201).json({ message: "Created successfully", data: user.todos }) : res.status(404).json({message: "User not Found",error: "Check if User id is correct...."});
    } catch (err) {
        console.log(err);
        res.status(404).json({ message: "User not found", error: err.message });
    }
}

async function updateToDoInList(req, res) {
    const { userId, todoId, todoNewTitle, todoNewDescription } = req.body;
    try {
        const update = await User.findOneAndUpdate({ _id: userId, 'todos._id': todoId }, {
            $set: { 'todos.$.title': todoNewTitle , 'todos.$.description': todoNewDescription}
        })
        const user = update ? await User.findById(userId) : null;
        console.log(user.todos);
        user ? res.status(200).json({ message: "Updated successfully", data: user.todos }) : res.status(404).json({message: "To Do not Found",error: "Check if To Do id is correct...."});
    } catch (err) {
        console.log(err);
        res.status(404).json({ message: "Todo not found", error: err.message });
    }
}

async function deleteToDoFromList(req,res){
    console.log(req.params);
    console.log(req.query);
    const userId = req.params.id;
    const todoId = req.query.toDoId;
    // console.log(userId+" ha ha ha ha "+todoId);
    try {
        const update = await User.findOneAndUpdate({ _id: userId,'todos._id': todoId },
        { $pull: { todos: { _id: todoId } } });
        const user = update ? await User.findById(userId) : null;
        console.log(user.todos);
        user ? res.status(200).json({ message: "Deleted successfully", data: user.todos }) : res.status(404).json({message: "To Do not Found",error: "Check if To Do id is correct...."});
    } catch (err) {
        console.log(err);
        res.status(404).json({ message: "Todo not found", error: err.message });
    }
}

async function getAllTodo(req, res) {
    console.log("In Get all todo");
    console.log("printing body");
    console.log(req.body);
    console.log(req.params);
    console.log(req.params.id);
    console.log("Printed body");
    try {
        const user = await User.findById(req.params.id);
        console.log(user);
        console.log(user.todos);
        user.todos ? res.status(200).json(user.todos) : res.status(404).json({ message: "Something got wrong" });
    } catch (err) {
        console.log(err.message);
        res.status(404).json({ message: "User not found", error: err.message });
    }
}

async function postCreateTodo(req, res) {
    console.log("In post todo");
    console.log("printing body");
    console.log(req.body);
    console.log("Printed body");
    await createToDoInList(req,res);
}

async function deleteTodo(req, res) {
    console.log("In delete todo");
    await deleteToDoFromList(req, res);
}

async function putUpdateTodo(req, res) {
    console.log("In put todo");
    await updateToDoInList(req, res);
}

export { getAllTodo, postCreateTodo, deleteTodo, putUpdateTodo };