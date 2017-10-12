import React from 'react';
import style from './TodoList.css';
import Todo from './Todo';

class TodoList extends React.Component {
    get tasks() {
        return this.props.data.map(list => <Todo key={list.id} list={list} removeTodo={this.props.removeTodo}/>);
    }

    render() { 
    return (
        <div className={style.container}>
            <ul className={style.todoList}>
                {this.tasks}                         
            </ul>
        </div>
    );
    }
}

export default TodoList;

