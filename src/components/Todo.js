import React from 'react';
import style from './TodoList.css';

const Todo = (props) => {
        return (   
                <li className={style.itemList}>{props.list.text}< button onClick={key => props.removeTodo(props.list.id)} > Usuń zadanie</button ></li>       
        )
}

export default Todo;