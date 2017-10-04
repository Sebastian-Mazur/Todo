import React from 'react';

const TodoForm = (props) => {
    return (
        <form onSubmit={() => props.onSubmit()}>            
            <label>
                Zadanie:            
                <input type="text" value={props.value} onChange={props.value} />    console.log(props.value);      
            </label>
            <input type="submit" value="Submit"/>            
        </form>
    );
    console.log(props.value);
}


export default TodoForm;