import React from 'react';

const TodoForm = (props) => {
    return (
        <form>                       
            <label>
                Zadanie:            
            <input type='text' value={''} onChange={event => props.changeValue(event)} />  
            </label>
            <button onClick={event => {event.preventDefault(); props.addTodo();}}>Dodaj zadanie!</button>          
        </form>
    );    
}


export default TodoForm;