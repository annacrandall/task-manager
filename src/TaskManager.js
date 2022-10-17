import { useState } from "react";
import Button from "./components/Button";

const TaskManager = () => {
  const [Tasks, setTasks] = useState([]);
  const [customTask, setCustomTask] = useState("");

  const deleteTask = () => {
    
  }

  const addTask = () => {
    const id = Tasks.length === 0 ? 1 : Tasks.length + 1;
    const taskDetail = {
      id: id,
      task: customTask,
      complete: false,
      key: id,
    };
    setTasks((oldList) => [...oldList, taskDetail]);
    console.log(taskDetail);
  };

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
            {Tasks.map((taskDetail) => {
              return (
                <div key={taskDetail.id}>
                  <li>{taskDetail.task}
                <Button onClick={deleteTask} name="Delete" />
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
