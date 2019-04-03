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
        <div>
            <div>
            <input 
                type="checkbox" 
                checked={completed}
                onChange={()=>onItemChecked(id,completed)}
                />
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
            <span onDoubleClick={this.toggleEditMode}
            >{title}</span>

            )}
            <button className="btn btn-delete" onClick={()=>onDeleteItem(id)}>x</button>
            </div>
        </div>
      );
    }
}

export default TodoItem;