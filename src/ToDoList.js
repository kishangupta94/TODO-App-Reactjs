import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (<div class="content">
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
					</div>
                )
            })}
            <button style={{margin: '0px'}} onClick={handleFilter}>Clear Completed</button>
        </div>
    );
};

export default ToDoList;