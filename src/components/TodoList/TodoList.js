import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);

  return (
    <ul style={{ padding: "0" }}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
