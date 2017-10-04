import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                id: '',
                text: ''
            }],
            numberOfTasks: 0,
            value: ''
        };
    }

    addTodo(val) {
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
        this.setState({numberOfTasks: this.state.numberOfTasks + 1});
        return (this.numberOfTasks);
    }

    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
        this.setState({numberOfTasks: this.state.numberOfTasks - 1});
        return (this.numberOfTasks);
    }

    handleChange(event) {
        this.setState({event: this.state.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className={style.TodoApp}>                
                <Title numberOfTasks={this.state.numberOfTasks} />
                <TodoForm />                
                <TodoList data={this.state.data} />
            </div>            
        );
        console.log(this.state.value);
    }    
}

export default App;

// onSubmit = {() => this.handleSubmit(value)} value = { this.state.value } onChange= {() => this.handleSubmit(value)}