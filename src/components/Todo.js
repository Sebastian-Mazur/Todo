import React from 'react';
import style from './TodoList.css';

const Todo = (props) => {
        return (   
                <li className={style.itemList}>{props.list.text}</li>       
        )
}

export default Todo;