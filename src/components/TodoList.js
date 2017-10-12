import React from 'react';
import style from './TodoList.css';
import Todo from './Todo';

class TodoList extends React.Component {
    get tasks() {
        return this.props.data.map(list => <Todo key={list.id} list={list} />);
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

// removeTodo = { this.props.removeTodo }
//     < button onClick= { props.removeTodo(props.list.id) } > Usuń zadanie</button >