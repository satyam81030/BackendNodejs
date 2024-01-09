const Todo = require("../models/Todo")

exports.getAllTodo = async (req,res) => {
        try {
            const allTodo = await Todo.find({});
            res.status(200).json(allTodo);
        } catch (error) {
              console.error(error);
              res.status(505).json(error.message);
        }
}

exports.getTodoById = async (req,res) => {
    try {
        
        const allTodo = await Todo.findById({_id:req.params.id});
        res.status(200).json(allTodo);
    } catch (error) {
          console.error(error);
          res.status(505).json(error.message);
    }
}