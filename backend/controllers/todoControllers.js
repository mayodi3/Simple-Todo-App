import Todo from "../models/Todo.js";

const createTodo = async (req, res) => {
  const { title, completed } = req.body;
  try {
    const todo = await Todo.findOne({ title });
    if (todo)
      return res.status(400).json({ error: "Todo already on the database" });

    const newTodo = await Todo.create({ title, completed });
    res.status(200).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: "Internal server error " });
    console.error(error);
  }
};

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
    console.error(error);
  }
};

const getTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findById(id);
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
    console.error(error);
  }
};

const updateTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findById(id);
    if (!todo)
      return res
        .status(400)
        .json({ error: "Todo is not availabe on the database" });

    const updatedTodo = await Todo.findByIdAndUpdate(
      { _id: id },
      { ...req.body }
    );
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: "Internal Sever error" });
    console.error(error);
  }
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findById(id);
    if (!todo) res.status(400).json(todo);

    const deletedTodo = await Todo.findByIdAndDelete({ _id: id });
    res.status(200).json(deletedTodo);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
    console.error(error);
  }
};

export { createTodo, getTodos, getTodo, updateTodo, deleteTodo };
