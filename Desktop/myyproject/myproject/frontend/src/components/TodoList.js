import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

class TodoList extends React.Component{


    handleShowItem=(todos,show)=>{
        switch(show){
            case "all":
                break
            case "active":
                todos = todos.filter(todo=>todo.completed == false);
                break
            case "completed":
                todos = todos.filter(todo=>todo.completed == true);
                break
        }
        return todos;
    }

    render() {
        const  {todos,show,onItemChecked,onEditItem,onDeleteItem}= this.props;
        const showElementsObj = this.handleShowItem(todos,show); //Object Array
        const showElements = showElementsObj.map((todo)=>(///要用小括號！！！
            <TodoItem
            id = {todo.id}
            title={todo.title}
            completed={todo.completed}
            onItemChecked={(id,completed)=>onItemChecked(id,completed)}
            onEditItem={(id,value)=>onEditItem(id,value)}
            onDeleteItem={(id)=>onDeleteItem(id)}
            />
        ));
        
        
        // 將 title 和 completed 依序傳遞給 TodoItem；
        // 傳遞參數的方式，就如同定義 HTML 元素的屬性
        return (
            <ul className='todo-app__list' >
            {showElements}
            </ul>
        );
    }
}

export default TodoList;