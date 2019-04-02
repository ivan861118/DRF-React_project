import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

class TodoList extends React.Component{


    // handleDeleteItem=(id)=>{
    //     this.props.onDeleteItem(id);    
    // }

    render() {
        const  {todos,onDeleteItem}= this.props;
        const todoElements = todos.map((todo)=>(///要用小括號！！！
            <li key={todo.id}>
            <TodoItem
            id = {todo.id}
            title={todo.title}
            completed={todo.completed}
            onDeleteItem={(id)=>onDeleteItem(id)}
            />
            </li>
        ));
        // 將 title 和 completed 依序傳遞給 TodoItem；
        // 傳遞參數的方式，就如同定義 HTML 元素的屬性
        return (
            <ul>{todoElements}</ul>
        );
    }
}

export default TodoList;