import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../../store/actions/todoActions";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <li style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
      <span
        onClick={handleToggle}
        style={{
          flex: 1,
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
          color: todo.completed ? "#888" : "#000",
        }}
      >
        {todo.text}
      </span>
      <button onClick={handleDelete} style={{ marginLeft: "8px" }}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
