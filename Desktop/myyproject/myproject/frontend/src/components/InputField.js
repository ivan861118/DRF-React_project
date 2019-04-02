import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { dirname } from "path";

class InputField extends React.Component{

    // handleAddList=()=>{
    //     this.props.onAddList
    // }
    render() {
        // 將 title 和 completed 依序傳遞給 TodoItem；
        // 傳遞參數的方式，就如同定義 HTML 元素的屬性
        return (
            <div>
                <input placeholder = "新增待辦清單"/>
                <button 
                // onClick={()=>{handleAddList} }
                >create</button>
            </div>
        );
    }
}

export default InputField;