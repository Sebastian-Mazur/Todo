import React from 'react';
import style from './TodoList.css';
import Todo from './Todo';

const TodoList = (props) => {    
    return (
        <div className={style.container}>
            <ul className={style.todoList}>
                {props.data.map(list => {
                    <Todo 
                        key={list.id}
                        id={list.id} 
                        remove={props.removeTodo} 
                        text={list.text}
                    />                                  
                })}                         
            </ul>
        </div>
    );
}

export default TodoList;
