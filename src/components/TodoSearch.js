import React from "react";
import { TodoContext } from "./TodoContext";

function TodoSearch() {
  const {searchValue, setSearchValue} = React.useContext(TodoContext)
  
  return (
    <div className="container">
      <input
        placeholder="Cortar cebolla"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    </div>
  );
}

export { TodoSearch };
