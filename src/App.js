
import './App.css';
import React, { useState } from 'react';
//mock data
import data from "./data.json";
//components
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';
import Footer from "./Footer";



function App() {
  
  const [ toDoList, setToDoList ] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const addTask = (userInput,UserInput1) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false ,timing:UserInput1}];
    setToDoList(copy);
    let myjson = JSON.stringify(copy);
    const blob = new Blob([myjson],{type: "text/plain"});
    let url= URL.createObjectURL(blob);
    let link = document.createElement('a');
    link.download='data.json';
    link.href=url;
    link.click();
  }
  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      <ToDoForm addTask={addTask}/>
      <Footer />
    </div>
  );
}

export default App;
