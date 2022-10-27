const InputBox = ({ customTask, setCustomTask, customDescription, setCustomDescription, handleTask, handleClearInput, Button }) => {
  
    return (
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
          taskdescription={customDescription}
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
            <Button onClick={handleTask} name="Save Task" />
            <Button onClick={handleClearInput} name="Clear Input" />
      </div>

    )
}
export default InputBox; 