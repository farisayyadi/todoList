import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/actions/todoActions";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
