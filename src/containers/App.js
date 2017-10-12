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
            data: [],  
            numberOfTasks: 0,
            text: ''                                   
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
        this.setState({text: ''});
    }

    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
        this.setState({numberOfTasks: this.state.numberOfTasks - 1});              
    } 
    
    changeValue(event) {
        this.setState({text: event})
    }

    render() {
        return (
            <div className={style.TodoApp}>                
                <Title numberOfTasks={this.state.numberOfTasks} />
                <TodoForm 
                    addTodo={val => this.addTodo(val)} 
                    text={this.state.text} 
                    changeValue={event => this.changeValue(event)}
                    />
                <TodoList 
                    data={this.state.data}                    
                    removeTodo={todoID => this.removeTodo(todoID)}
                    />
            </div>            
        );        
    }    
}

export default App;
