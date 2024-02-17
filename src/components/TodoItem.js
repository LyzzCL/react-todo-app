import { MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";

function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li>
      <span className={`add-item ${completed ? "TodoItem-check--active" : ""}`} onClick={onComplete}>
        {completed ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}
      </span>
      <p className={`${completed ? "TodoItem-p--complete" : ""}`}>{text}</p>
      <span className="delete-item" onClick={onDelete}>
        <RiDeleteBin6Fill />
      </span>
    </li>
  );
}

export { TodoItem };
