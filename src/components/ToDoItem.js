import React from "react";
import "./ToDoItem.css";

class ToDoItem extends React.Component {
    state = {
        status: "status-" + this.props.todo.completed
    }

    handleOnClickChangeStatus = (id) => {
        this.setState({
            status: "status-" + !this.props.todo.completed
        })
        this.props.handleDoneTodo(id);
    }

    render() {
        let { id, title, completed } = this.props.todo;

        return (
            <div className="ToDoItem">
                <li
                    key={id}
                    onClick={() => { this.handleOnClickChangeStatus(id) }}
                    // className={"status-"+completed}
                    // className = {this.props.todo.completed ? "completed" : null}
                    className={this.state.status}
                >
                    {title}
                </li>
                <span onClick={() => { this.props.handleDeleteTodo(id) }}>
                    <i class='bx bx-trash'></i>
                </span>
            </div>
        )
    }
}

export default ToDoItem;