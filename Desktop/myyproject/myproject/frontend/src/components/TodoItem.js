import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import InputField from "./InputField";
/*props:

*/

class TodoItem extends React.Component{
    constructor(props, context) {
        super(props, context);

        this.state = {
            editable: false };
    }

    static propTypes = {
        title: PropTypes.string,
        completed: PropTypes.bool
      };
      static defaultProps = {
        title: 'default title',
        completed:false
      }

      
    toggleEditMode=()=>{
        this.setState({ editable: !this.state.editable });
        
    }

    render(){
        const {id,title,completed,onEditItem,onItemChecked,onDeleteItem} = this.props;
        const {editable} = this.state; 
      return (
        <li className='todo-app__item' key={id}>
            <div className='todo-app__checkbox'>
            <input
                id={id} 
                type="checkbox" 
                checked={completed}
                onChange={()=>onItemChecked(id,completed)}
            />
            <label for={id}></label>
            </div>
            {editable ? (
             <input
                autoFocus
                type="text"
                value = {title}
                onBlur={this.toggleEditMode}
                onKeyDown={(e)=>{
                    if(e.keyCode == 13){//Enter
                        this.toggleEditMode();} 
                }}
                onChange={(e)=>onEditItem(id,e.target.value,)}
             />
            ):(
            
            <h1 
                className={completed?'todo-app__item-detail-x':'todo-app__item-detail'}
                onDoubleClick={this.toggleEditMode}>
            {title}
            </h1>

            )}
            <button className="todo-app__item-x" onClick={()=>onDeleteItem(id)}>X</button>
        </li>
      );
    }
}

export default TodoItem;