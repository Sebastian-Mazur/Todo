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
        this.setState({text: ''});
    }

    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});                      
    } 
    
    changeValue(event) {
        this.setState({text: event})
    }

    render() {
        return (
            <div className={style.TodoApp}>                
                <Title numberOfTasks={this.state.data.length} />
                <TodoForm 
                    addTodo={val => this.addTodo(val)} 
                    text={this.state.text} 
                    changeValue={this.changeValue.bind(this)}
                    />
                <TodoList 
                    data={this.state.data}                    
                    removeTodo={this.removeTodo.bind(this)}
                    />
            </div>            
        );        
    }    
}

export default App;
