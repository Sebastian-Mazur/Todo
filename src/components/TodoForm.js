import React from 'react';

const TodoForm = (props) => {
    return (
        <form>                       
            <label>
                Zadanie:            
            <input type='text' value={props.text} onChange={event => props.changeValue(event.target.value)} />  
            </label>
            <button onClick={event => {event.preventDefault(); props.addTodo(props.text);}}>Dodaj zadanie!</button>          
        </form>
    );    
}


export default TodoForm;