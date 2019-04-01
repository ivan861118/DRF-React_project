// import React from "react";
// import ReactDOM from "react-dom";
// import DataProvider from "./DataProvider";
// import Table from "./Table";
// const App = () => (
//   <DataProvider endpoint="api/lead/" 
//                 render={data => <Table data={data} />} />
// );
// const wrapper = document.getElementById("app");
// wrapper ? ReactDOM.render(<App />, wrapper) : null;

import React from "react";
import ReactDOM from "react-dom";
import TodoHeader from "./TodoHeader";
import InputField from "./InputField";
import TodoList from "./TodoList";

/*
功能：
新增 todo
刪除 todo
把 todo 標記為已完成 / 未完成
修改 todo 內容
過濾已完成 / 未完成的 todos
清除已完成的 todos
Optional：RWD、測試

*/


class TodoApp extends React.Component{

  render(){
    return (
      <div>
        <TodoHeader />
        <InputField />
        <TodoList />
      </div>
    );
  }
}


const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<TodoApp />, wrapper) : null;