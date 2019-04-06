import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";


class Footer extends React.Component{

    handleShow = (e)=>{
        const show_type =e.target.id ;
        this.props.onToggleShow(show_type);
    }
    render() {
        const {todos} = this.props;
        const totalNum = todos.length;
        const doneNum = todos.filter(todo=>todo.completed == true).length;
        const todoNum = totalNum-doneNum;
        // 將 title 和 completed 依序傳遞給 TodoItem；
        // 傳遞參數的方式，就如同定義 HTML 元素的屬性
        return (
            <div className='todo-app__footer'>
                <div>
                未完成 : <span> {todoNum} </span>
                </div>
                <div>
                    <button className='btn' id='all' onClick={this.handleShow}>All</button>
                    <button className='btn' id='active'onClick={this.handleShow}>Active</button>
                    <button className='btn' id='completed'onClick={this.handleShow}>Completed</button>
                </div>
                <div>
                已完成 : <span> {doneNum} </span>
                </div>
            </div>
        );
    }
}

export default Footer;