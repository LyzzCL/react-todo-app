import React from "react";
import { TodoContext } from "./TodoContext";

function TodoForm() {
  const {
    addTodo,
    setOpenModal
  } = React.useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false)
  }

  const onCancel = () => {
    setOpenModal(false)
  }

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea placeholder="Cortar cebolla para el almuerzo" value={newTodoValue} onChange={onChange}/>
      <div className="FormBtn-container">
        <button type="button" onClick={onCancel} className="FormBtn--cancel">Cancelar</button>
        <button type="submit" className="FormBtn--add">Agregar</button>
      </div>
    </form>
  );
}

export { TodoForm };
