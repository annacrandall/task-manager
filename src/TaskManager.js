import react, { useState } from "react"; 
import TaskList from "./components/TasksList";

const TaskManager = ()  => {
  const [userInput, setUserInput] = useState("")
  
  const handleText = (event) => {
      setUserInput(event.target.value)
  }

  const handleTextSubmit = (event) => {
    event.preventDefault();
    addTask(userInput);
    setUserInput("");
  }

  const addTask = () => {
    
  }

  return (
    <div id="viewport-container" className="font-1 m-2 p-1">
      <h1 className="flex justify-center text-2xl">Task Manager</h1>
      <div className="border-2 border-slate-600">
        <input value={userInput} type="text" onChange={handleText} placeholder="Input task..." className="border-2 border-slate-600 m-2 p-1" />
        <button type="submit" onClick={handleTextSubmit}
        className="border-2 border-slate-600 m-2 p-1">Submit</button>
       </div>
      <TaskList />
      
      
    </div>
  );
}

export default TaskManager;
