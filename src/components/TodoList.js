import React from 'react';
import style from './TodoList.css';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div className={style.container}>
            <ul className={style.todoList}>
                {props.data.map(list => {
                    return <li className={style.itemList} key={list.id}>{list.text}</li>
                })}                         
            </ul>
        </div>
    );
}

export default TodoList;