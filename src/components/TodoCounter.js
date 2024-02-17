import React from "react";
import { TodoContext } from "./TodoContext";

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext)

  return (
    <h1>
      Haz completado {completedTodos} de {totalTodos} TODO's
    </h1>
  );
}

export { TodoCounter };
