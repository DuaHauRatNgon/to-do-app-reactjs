import React from "react";
import "./AddToDo.css"

class AddToDo extends React.Component {
    state = {
        inputTodo: ""
    }

    handleOnChange = (e) => {
        // console.log(e.target.value);
        this.setState({
            inputTodo: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAddToDo(this.state.inputTodo);
        this.setState({
            inputTodo: ""
        })
    }

    render() {
        return (
            <form className="form-container" onSubmit={this.handleSubmit}>
                <input className="input-todo" type="text" name="" value={this.state.inputTodo} placeholder="Add to do..."
                    onChange={(e) => { this.handleOnChange(e) }} />
                <input className="submit-todo" type="submit" value="+" />
                
            </form>
        )
    }
}

export default AddToDo;