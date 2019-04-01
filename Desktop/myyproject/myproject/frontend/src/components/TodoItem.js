import React from "react";
import ReactDOM from "react-dom";
/*props:

*/

class TodoItem extends React.Component{

    render(){
        const {title,completed} = this.props;
      return (
        <div>
            <div>
            <input type="checkbox" checked={completed} onChange=''/>
            <span>{title}</span>
            <button class="edit"></button>
            <button class="delete">x</button>
            </div>
        </div>
      );
    }
}

export default TodoItem;