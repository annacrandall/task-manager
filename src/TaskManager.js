import { useState } from "react";
import Button from "./components/Button";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [customTask, setCustomTask] = useState("");

  
  const addTask = () => {
    const taskDetail = {
      id: tasks.length === 0 ? 1 : tasks.length + 1,
      task: customTask,
      complete: false,
      key: tasks.length === 0 ? 1 : tasks.length + 1,
    };
    setCustomTask("")
    setTasks((oldList) => [...oldList, taskDetail])
  };
  
  const deleteTask = (idToDelete) =>{
    const newArray = tasks.filter((tasks) => {
      return tasks.id !== idToDelete
    }); 
    setTasks(newArray)
  }
 

  return (
    <div id="viewport-container" className="font-1 m-2 p-1">
      <h1 className="flex justify-center text-2xl">Task Manager</h1>

      <div className="border-2 border-slate-600">
        <input
          type="text"
          placeholder="Add an item..."
          task={customTask}
          onChange={(e) => setCustomTask(e.target.value)}
        />
        <Button onClick={addTask} name="Save task" />
      </div>

      <div>
        <div className="border-2 border-slate-600 grid grid-cols-1 ">
          <h1>Need to complete:</h1>

          <ul>
            {tasks.map((taskDetail) => {
              return (
                <div key={taskDetail.id} id="task-container">
                  <li>
                    {taskDetail.task}
                    <Button
                      onClick={() => deleteTask(taskDetail.id)}
                      name="Delete"
                      className="m-1 p-1"
                    />
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
