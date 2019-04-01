import React from "react";
import ReactDOM from "react-dom";
import { dirname } from "path";

class InputField extends React.Component{

    render() {
        // 將 title 和 completed 依序傳遞給 TodoItem；
        // 傳遞參數的方式，就如同定義 HTML 元素的屬性
        return (
            <div>
                <input placeholder = "input"/>
            </div>
        );
    }
}

export default InputField;