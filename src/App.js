import React from "react";
import { AppUI } from "./pages/AppUI";
import "./styles/todo-styles.css";
import { TodoProvider } from "./components/TodoContext";

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
