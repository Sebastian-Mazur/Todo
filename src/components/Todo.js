import React from 'react';
import style from './TodoList.css';

const Todo = (props) => {
        return (   
                <li className={style.itemList}>{props.text}<button onClick={props.remove(props.id)}>Usuń zadanie</button></li>       
        )
}

export default Todo;