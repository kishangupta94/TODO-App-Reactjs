import React, { useState} from 'react';

const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput] = useState();
    const [ userInput1, setUserInput1] = useState();
   

    const handleChange = e => {
        setUserInput(e.target.value)}
    const handleChange1 = e2 => {
        setUserInput1(e2.target.value)
    }

    const handleSubmit = e1 => {
        e1.preventDefault();   
        addTask(userInput,userInput1);  
        setUserInput("");
        setUserInput1("");
        
    }
    return (<div>
        <form onSubmit={handleSubmit}>
            <input value={userInput}  type="text" onChange={handleChange} placeholder="Enter Task..."/>
            <input value={userInput1}  type="text" onChange={handleChange1} placeholder="Enter Task Timing..."/>
            <button>Submit</button>
        </form>
        <p id="demo"></p>
        </div>
    );
};

export default ToDoForm;