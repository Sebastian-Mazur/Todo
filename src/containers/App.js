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
                id: 145,
                text: 'Lorem Ipsum'                
                }],  
            numberOfTasks: 0                                   
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
    
    changeValue(event) {
        this.setState({text: event.target.value})
    }

    render() {
        return (
            <div className={style.TodoApp}>                
                <Title numberOfTasks={this.state.numberOfTasks} />
                <TodoForm 
                    addTodo={val => this.addTodo(val)} 
                    data={this.state.data} 
                    changeValue={event => this.changeValue(event)}/>
                <TodoList data={this.state.data} />
            </div>            
        );        
    }    
}

export default App;
