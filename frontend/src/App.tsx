import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Flex } from "@radix-ui/themes";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Flex
          align="center"
          justify="center"
          gap="3"
          p="6"
          style={{
            borderBottom: "3px solid gray",
            background: "dodgerBlue",
            borderRadius: "20px",
          }}
        >
          <NavLink
            to="/"
            style={{
              fontWeight: "bold",
              fontSize: "30px",
              textDecoration: "none",
            }}
          >
            Add Todo
          </NavLink>
          <NavLink
            to="/todos"
            style={{
              fontWeight: "bold",
              fontSize: "30px",
              textDecoration: "none",
            }}
          >
            Todos
          </NavLink>
        </Flex>
      </nav>
      <Routes>
        <Route path="/" element={<TodoForm />} />
        <Route path="/todos" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
