import React from "react";
import ReactDOM from "react-dom";
import TodoApp from "./TodoApp";

// import Table from "./Table";

const App = () => (
  <TodoApp endpoint="api/todoapp" />
);
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;