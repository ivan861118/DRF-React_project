import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { dirname } from "path";

class InputField extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value:props.value || ''};
      }
    

    handleKeyDown=(e)=>{
        const {onSubmitEditing} = this.props;
        const { value } = e.target;
        switch (e.keyCode) {
            case 13:
              // 2. 如果使用者沒有鍵入任何值（包括都是空白），則不會呼叫 callback
              if (value.trim()) {
                onSubmitEditing(value);
              }
              // 3. 將輸入框資料清空
              this.setState({ value: '' });
              break;
          }
    }

    handleChange=(e)=>{
        this.setState({value: e.target.value});
    }
      
    render() {
        const {placeholder} = this.props;
        // 將 title 和 completed 依序傳遞給 TodoItem；
        // 傳遞參數的方式，就如同定義 HTML 元素的屬性
        return (
            <div>
                <input 
                    placeholder = {placeholder}
                    value={this.state.value}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                />
            </div>
        );
    }
}

export default InputField;