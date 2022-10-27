import { useState } from "react";
import Button from "./components/Button";
import trashIcon from "./trashIcon.png";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [customTask, setCustomTask] = useState("");
  const [customDescription, setCustomDescription] = useState("");
  const [editTask, setEditTask] = useState(""); 
  const [editTaskDescription, setEditTaskDescription] = useState(""); 
  const [showEdit, setShowEdit] = useState(-1); 

  const addTask = () => {
    const taskDetail = {
      id: tasks.length === 0 ? 1 : tasks.length + 1,
      task: customTask,
      taskDescription: customDescription,
      complete: false,
      key: tasks.length === 0 ? 1 : tasks.length + 1,
    };
    setTasks((oldList) => [...oldList, taskDetail]);
  };


  const handleDelete = (idToDelete) => {
    const newArray = tasks.filter((tasks) => {
      return tasks.id !== idToDelete;
    });
    setTasks(newArray);
  };

  const handleEdit = (idToEdit, newTaskName, newDescription) => {
    const currentTask = tasks.filter((item) => item.idToEdit === idToEdit)
    const newTask = {
      id: currentTask.idToEdit,
      task: newTaskName,
      taskDescription: newDescription,
    }; 
    handleDelete(idToEdit)
    setTasks((oldList) => [...oldList, newTask])
    setEditTask("") 
    setEditTaskDescription("");
    setShowEdit(-1); 
  }
 

  return (
    <div id="viewport-container" className="font-1 m-2 p-1">
      <h1 className="flex justify-center text-2xl">Task Manager</h1>

      <div className="border-2 border-slate-600 m-3 inline-block grid grid-cols-1">
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
          <button
            id="low-urgency"
            className="text-white bg-green-600 opacity-50 px-2 m-1 rounded text-lg"
          >
            Low
          </button>
          <button
            id="medium-urgency"
            className="text-white bg-amber-600 px-2 opacity-50 m-1 rounded text-lg"
          >
            Medium
          </button>
          <button
            id="high-urgency"
            className="text-white bg-red-600 px-2 rounded opacity-50 m-1 text-lg"
          >
            High
          </button>
        </div>
        <Button onClick={addTask} name="Save task"/>
      </div>

      <div>
        <div className="grid grid-cols-2 px-2 py-1 m-1" id="lists-container">
          <div
            id="uncompleted-task-container"
            className="border-2 border-slate-600 m-1"
          >
            <h1 className="text-center p-1">Need to complete:</h1>
            <ul>
              {tasks.map((taskDetail) => {
                return (
                  <div key={taskDetail.id} id="task-container" className="inline-block">
                    <li className="grid grid-cols-1 border border-slate-600 rounded px-2 py-1 m-2" onClick={() => setShowEdit(taskDetail.id)}>

                      {taskDetail.task} : {taskDetail.taskDescription}
                      <button
                        onClick={() => handleDelete(taskDetail.id)}
                        id="delete-button"
                        className=" w-10 rounded-xl border border-slate-600"
                      >
                        <img
                          src={trashIcon}
                          alt="trash icon for delete button"
                          className="w-6 inline-block m-1"
                        />
                      </button>
                    </li>
                    {showEdit === taskDetail.id ? (
                      <div className="border border-slate-600 m-1 p-1">
                        <input id="edit-task-name" type="text" value={editTask}
                        onChange={(e)=> setEditTask(e.target.value)}/>
                        <input id="edit-task-description" type="text" value={editTaskDescription}
                          onChange={(e) => setEditTaskDescription(e.target.value)} />
                        <button onClick={() => handleEdit(taskDetail.id, editTask, editTaskDescription)}>Update Task</button>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="border-2 border-slate-600 m-1">
            <h1 className="text-center p-1">Completed Tasks:</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
