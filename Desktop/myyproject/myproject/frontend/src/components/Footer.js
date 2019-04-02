import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

class Footer extends React.Component{

    render() {
        const {todos} = this.props;
        const totalNum = todos.length;
        const doneNum = todos.filter(todo=>todo.completed == true).length;
        const todoNum = totalNum-doneNum;
        // 將 title 和 completed 依序傳遞給 TodoItem；
        // 傳遞參數的方式，就如同定義 HTML 元素的屬性
        return (
            <div>
                <span>
                Todos : <span> {todoNum} </span>
                </span>
                <span>
                Done : <span> {doneNum} </span>
                </span>
            </div>
        );
    }
}

export default Footer;