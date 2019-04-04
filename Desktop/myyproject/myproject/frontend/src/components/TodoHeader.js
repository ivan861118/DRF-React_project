import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

class TodoHeader extends React.Component{

    render() {
        return (
            <div className='todo-app__header'>
                <span className='todo-app__title'>My Todo List</span>
            </div>
        );
    }
}

export default TodoHeader;