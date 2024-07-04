import { Router } from "express";
import Todo from "../models/Todo.js";
import {
  createTodo,
  deleteTodo,
  getTodo,
  getTodos,
  updateTodo,
} from "../controllers/todoControllers.js";

const router = Router();

router.post("/", createTodo);
router.get("/", getTodos);
router.get("/:id", getTodo);
router.patch("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;
