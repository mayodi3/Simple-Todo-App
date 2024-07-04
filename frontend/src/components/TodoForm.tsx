import { useState } from "react";
import { Todo } from "./TodoList";
import axios from "axios";

import * as Form from "@radix-ui/react-form";
import "../App.css";

const TodoForm = () => {
  const [todo, setTodo] = useState({
    _id: "",
    title: "",
    completed: false,
    updatedAt: "",
    createdAt: "",
  });

  function addTodo(todo: Todo) {
    axios.post("http://localhost:3000/api/todos", todo);
  }

  return (
    <Form.Root className="FormRoot" onSubmit={() => addTodo(todo)}>
      <Form.Field className="FormField" name="question">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Form.Label className="FormLabel">Todo</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            Please enter a todo
          </Form.Message>
        </div>
        <Form.Control asChild>
          <textarea
            className="Textarea"
            required
            name="todo"
            id="todo"
            value={todo.title}
            onChange={(event) => {
              setTodo({ ...todo, title: event.target.value });
            }}
          />
        </Form.Control>
      </Form.Field>
      <Form.Submit asChild>
        <button className="Button" style={{ marginTop: 10 }}>
          Add Todo
        </button>
      </Form.Submit>
    </Form.Root>
  );
};

export default TodoForm;
