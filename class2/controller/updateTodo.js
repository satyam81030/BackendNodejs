const Todo = require("../models/Todo")


exports.updateTodo = async (req, res) => {
     try {
         await Todo.updateOne(req.body);
         res.status(200).json("Update Successfully")
     } catch (error) {
        res.status(500).json(error.message)
     }
}