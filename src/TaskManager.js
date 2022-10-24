import { useState } from "react";
import Button from "./components/Button";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [customTask, setCustomTask] = useState("");
  const [customDescription, setCustomDescription] = useState(""); 
  const [taskUrgency, setTaskUrgency] = useState([]); 

  
  const addTask = () => {
    const taskDetail = {
      id: tasks.length === 0 ? 1 : tasks.length + 1,
      task: customTask,
      taskDescription: customDescription,
      taskUrgency: taskUrgency,
      complete: false,
      key: tasks.length === 0 ? 1 : tasks.length + 1,
    };
    setTasks((oldList) => [...oldList, taskDetail])
  };
  
  const deleteTask = (idToDelete) =>{
    const newArray = tasks.filter((tasks) => {
      return tasks.id !== idToDelete
    }); 
    setTasks(newArray)
  }

  const createTaskUrgency = () => {
    
  }
 

  return (
    <div id="viewport-container" className="font-1 m-2 p-1">
      <h1 className="flex justify-center text-2xl">Task Manager</h1>

      <div className="border-2 border-slate-600 m-2 inline-block grid grid-cols-1">
        <input
          type="text"
          placeholder="Add your task..."
          task={customTask}
          onChange={(e) => setCustomTask(e.target.value)}
          className="m-1 px-2 py-1"
        />
        <input 
          type="text"
          placeholder="Input task description..."
          taskDescription={customDescription}
          onChange={(e) => setCustomDescription(e.target.value)}
          className="m-1 px-2 py-1" 
        /> 
        <div id="task-urgency" className="flex flex-row">
          <h3 className="m-1 p-1">Set task urgency: </h3>
          <Button name="Low"
          className="bg-green"/> 
          <Button name="Medium"/>
          <Button name="High"/> 
        </div>
        <Button
          onClick={addTask}
          name="Save task"
        /> 
      </div>

      <div>
        <div className="grid grid-cols-2" id="lists-container">
          <div id="uncompleted-task-container" className="border-2 border-slate-600">
          <h1>Need to complete:</h1>
          <ul>
            {tasks.map((taskDetail) => {
              return (
                <div key={taskDetail.id} id="task-container">
                  <li className="grid grid-cols-1">
                    {taskDetail.task} : {taskDetail.taskDescription}
                    <Button
                      onClick={() => deleteTask(taskDetail.id)}
                      name="Delete"
                    />
                  </li>
                </div>
              );
            })}
          </ul>
          </div>
          <div className="border-2 border-slate-600">
            <h1>Completed Tasks</h1>
          </div>
          </div>
      </div>
    </div>
  );
};

export default TaskManager;
