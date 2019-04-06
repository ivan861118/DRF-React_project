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
import PropTypes from "prop-types";
import TodoHeader from "./TodoHeader";
import InputField from "./InputField";
import TodoList from "./TodoList";
import Footer from "./Footer";



/*
功能：
新增 todo(v)
刪除 todo(v)
把 todo 標記為已完成 / 未完成 (v)
修改 todo 內容 (v)
過濾已完成 / 未完成的 todos
清除已完成的 todos
Optional：RWD、測試

*/


class TodoApp extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      todos:[],
      loaded: false,
      placeholder: "Loading...",
      show:'all',
    };
  }
  static propTypes = {
    endpoint: PropTypes.string.isRequired,
  };

  componentDidMount() {
    fetch(this.props.endpoint)
      .then(response => {
        if (response.status !== 200) {
          return this.setState({ placeholder: "Something went wrong" });
        }
        return response.json();
      })
      .then(todos => this.setState({ todos: todos, loaded: true }));
  }



  handleCreateTodos = (title) => {
    let {todos} = this.state;
    todos.push({
      id:(todos.length==0) ? 0 : todos[todos.length-1].id+1,
      title:title,
      completed:false
      });
    this.setState({todos:todos});
  };

  toggleItemCompleted = (id,completed)=>{
    let {todos} = this.state;
    const idx = todos.findIndex(todo=>todo.id==id);
    todos[idx].completed = !completed;
    this.setState( {todos:todos} );
  }

  handleEditItem = (id,value) =>{
    let {todos} = this.state;
    const idx = todos.findIndex(todo=>todo.id==id);
    todos[idx].title = value;
    this.setState( {todos:todos} );
  }
  handleDeleteItem=(id)=>{
    let {todos} = this.state;
    todos = todos.filter(todos => todos.id != id );
    this.setState( {todos:todos} );
  }



  render(){
    const {todos,loaded,placeholder,show} = this.state;
    return loaded ? 
      <div className='todo-app__root'>
        <div className='todo-app_main'>
        <TodoHeader />
        <InputField
          placeholder = "新增待辦清單..." 
          onSubmitEditing = {this.handleCreateTodos}
        />
        <TodoList 
          todos={todos}
          show={show}
          onItemChecked={this.toggleItemCompleted}
          onEditItem={this.handleEditItem}
          onDeleteItem={this.handleDeleteItem}
        />
        <Footer
          todos={todos}
          onToggleShow={(show_type)=>this.setState({show:show_type})}
        />
        </div>
      </div> :
      <p>{placeholder}</p>;
    
  }
}

export default TodoApp;