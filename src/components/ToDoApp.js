import React from "react";
import { v4 as uuidv4 } from 'uuid';
import "./ToDoApp.css"
import Header from "./Header";
import AddToDo from "./AddToDo";
import ToDos from "./ToDos";

class ToDoApp extends React.Component {
    state = {
        todos: [
            {
                id: 1,
                title: "Setup development environment",
                completed: true
            },
            {
                id: 2,
                title: "Develop website and add content",
                completed: false
            },
            {
                id: 3,
                title: "Deploy to live server",
                completed: false
            }
        ]
    };

    handleAddToDo = (todoTitle) => {
        let todoTmp = {
            id: uuidv4(),
            title: todoTitle,
            completed: false
        };
        this.setState({
            todos: [...this.state.todos, todoTmp]
        })
    }

    handleDoneTodo = (id) => {
        // console.log(id);
        this.setState({
            todos: this.state.todos.map((item) => {
                if(item.id === id) {
                    item.completed = !item.completed;
                }
                return item;
            })
        });
        // this.state.todos.map(item => {
        //     console.log(item.completed);
        // })
    };

    handleDeleteTodo = (id) => {
        console.log(id);
        this.setState({
            todos: [...this.state.todos.filter((item) => {
                if(item.id !== id) {
                    return item;
                }
            })
        ]
        });
    }

    render(){
        return(
            <div>
                <div className="ToDoApp">
                    <Header/>
                    <AddToDo handleAddToDo = {this.handleAddToDo}/>
                    <ToDos todos = {this.state.todos}
                        handleDoneTodo = {this.handleDoneTodo}
                        handleDeleteTodo = {this.handleDeleteTodo}
                        />
                </div>
            </div>
        )
    }
}

export default ToDoApp;