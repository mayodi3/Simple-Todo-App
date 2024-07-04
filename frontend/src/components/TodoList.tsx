import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { Button, Card, Checkbox, Flex, Text } from "@radix-ui/themes";

export interface Todo {
  _id: string;
  title: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

const TodoList = () => {
  const [data, setData] = useState<Todo[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const constroller = new AbortController();

    axios
      .get("http://localhost:3000/api/todos", { signal: constroller.signal })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        if (error instanceof AxiosError) return;
        setError(error.message);
      });

    return () => constroller.abort();
  }, []);

  function updateTodo(id: string, completed: boolean) {
    axios
      .patch(`http://localhost:3000/api/todos/${id}`, { completed: !completed })
      .catch((error) => setError(error.message));
  }

  function deleteTodo(id: string) {
    axios
      .delete(`http://localhost:3000/api/todos/${id}`)
      .catch((error) => setError(error));
  }

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      {data.map((todo, index) => (
        <Card key={index} variant="surface" m="3">
          <Flex justify="between" gap="3" align="center">
            <Text>{todo.title}</Text>
            <Checkbox
              checked={todo.completed}
              onClick={() => {
                updateTodo(todo._id, todo.completed);
              }}
            />
          </Flex>
          <p>Created At : {formatDistanceToNow(todo.createdAt)}</p>
          <Flex align="center" justify="between">
            <p>Updated At: {formatDistanceToNow(todo.updatedAt)}</p>
            <Button onClick={() => deleteTodo(todo._id)}>delete</Button>
          </Flex>
        </Card>
      ))}
    </div>
  );
};

export default TodoList;
