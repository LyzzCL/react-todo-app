function CreateTodoButton({ setOpenModal }) {
  return (
    <div>
      <button className="newTodo" onClick={() => setOpenModal((state) => !state)}>+</button>
    </div>
  );
}

export { CreateTodoButton };
