const express = require("express");
const router = express.Router()

const {createTodo} = require("../controller/createTodo");
const { getAllTodo, getTodoById } = require("../controller/getAllTodo");
const { updateTodo } = require("../controller/updateTodo");

router.post("/createTodo", createTodo);
router.get("/getAllTodo", getAllTodo);
router.get("/getTodoById/:id", getTodoById);
router.patch("/updateTodo", updateTodo);

module.exports = router;

