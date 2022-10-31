import React from "react";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import "./ToDoApp.css"
import Header from "./Header";
import AddToDo from "./AddToDo";
import ToDos from "./ToDos";

class ToDoApp extends React.Component {
    state = {
        todos: []
    };

    handleAddToDo = (todoTitle) => {
        const todoData = {
            title: todoTitle,
            completed: false
        }
        axios.post("https://jsonplaceholder.typicode.com/todos", todoData)
            .then(response => {
                console.log(response.data)
                this.setState({
                    todos: [...this.state.todos, response.data]
                })
            });
    }

    handleDoneTodo = (id) => {
        // console.log(id);
        this.setState({
            todos: this.state.todos.map((item) => {
                if (item.id === id) {
                    item.completed = !item.completed;
                }
                return item;
            })
        });
    };

    handleDeleteTodo = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(reponse => {
                this.setState({
                    todos: [
                        ...this.state.todos.filter(todo => {
                            return todo.id !== id;
                        })
                    ]
                })
            })

    }

    componentDidMount() {
        const config = {
            params: {
                _limit: 10
            }
        }
        axios.get("https://jsonplaceholder.typicode.com/todos", config)
            .then(response => this.setState({ todos: response.data }))
    }

    render() {
        return (
            <div>
                <div className="ToDoApp">
                    <Header />
                    <AddToDo handleAddToDo={this.handleAddToDo} />
                    <ToDos todos={this.state.todos}
                        handleDoneTodo={this.handleDoneTodo}
                        handleDeleteTodo={this.handleDeleteTodo}
                    />
                </div>
            </div>
        )
    }
}

export default ToDoApp;