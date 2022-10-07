import react, { useState } from "react"; 



const TasksList = () => {
    const defaultTasks = [{
        "id": 1,
        "task": "Feed the cat.",
        "complete": false
    },
    {
        "id": 2,
        "task": "Hire me!",
        "complete": false, 
    }];

    return (
        <div id="task-manager">
            <div className="border-2 border-slate-600 ">
                <h1>Add tasks below:</h1> 
                <ul>
                        {defaultTasks.map(({task, id})=> {
                            return (
                                <li key={id} id={id}>{task}</li>
                            )
                        })}
                </ul>
            </div>
        </div>
    )
}
export default TasksList; 
// use map to arrange the tasks on the screen 