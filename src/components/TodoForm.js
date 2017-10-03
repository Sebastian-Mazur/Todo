import React from 'react';

const TodoForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>            
            <label>
                Zadanie:            
                <input type="text" value={props.value} onChange={props.handleChange} />            
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}


export default TodoForm;