import React from "react";
import "./ToDos.css"
import ToDoItem from "./ToDoItem"

class ToDos extends React.Component {
    // let todos = this.props.todos; //error

    render(){
        let todos = this.props.todos;

        return(
            <div>
                <ul>
                    {
                        todos.map((item) => {
                            return( <ToDoItem key={item.id} todo = {item} 
                                handleDoneTodo = {this.props.handleDoneTodo}
                                handleDeleteTodo = {this.props.handleDeleteTodo}
                                /> );
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default ToDos;