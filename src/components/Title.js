import React from 'react';

const Title = (props) => {
    return (
        <div>
            <h1>
                TodoList({props.numberOfTasks})
            </h1>
        </div>
    );
}

export default Title;
