import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import "./index.css";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todo List</h1>
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
