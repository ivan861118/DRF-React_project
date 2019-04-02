import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
/*props:

*/

class TodoItem extends React.Component{
    static propTypes = {
        title: PropTypes.string,
        completed: PropTypes.bool
      };
      static defaultProps = {
        title: 'default title',
        completed:false
      }

    // handleInputChange=(e)=>{
    //     this.props.onInputChange(e.target.value);
    // }
    // handleDeleteItem=(id)=>{
    //     this.props.onDeleteItem(this.props.id);
    // }

    render(){
        const {id,title,completed,onDeleteItem} = this.props;
      return (
        <div>
            <div>
            <input type="checkbox" checked={completed} onChange=''/>
            <span>{title}</span>
            <button className="btn btn-edit"></button>
            <button className="btn btn-delete" onClick={()=>onDeleteItem(id)}>x</button>
            </div>
        </div>
      );
    }
}

export default TodoItem;