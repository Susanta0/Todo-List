import { useState } from "react";
import "./App.css";
import TaskItem from "./components/TaskItem";

function App() {
  const [tasks, setTasks] = useState([]);
  const [formState, setFormState] = useState({
    task: "", // string
    completed: false, // boolean
    taskAssignedTo: "", // string
  });

  function handleChange(event) {
    // Implement logic to handle form changes
    const targetName = event.target.name;
    const targetValue =
      event.target.name === "completed"
        ? event.target.checked
        : event.target.value;

    setFormState({ ...formState, [targetName]: targetValue });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Implement logic to handle form submission
    const newArray = [...tasks, formState];
    setTasks(newArray);
  }

  const Delete = (index) => {
    const DeleteData = [...tasks];
    DeleteData.splice(index, 1);
    setTasks(DeleteData);
  };
  const ChangeToggel = (index) => {
    const ApdateData = [...tasks];
    console.log(ApdateData);
    ApdateData[index].completed = !ApdateData[index].completed;
    setTasks(ApdateData);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            name="task"
            type="text"
            value={formState.task}
            onChange={handleChange}
            placeholder="Add Task"
          />
          <label>
            Completed:
            <input
              name="completed"
              type="checkbox"
              checked={formState.completed}
              onChange={handleChange}
            />
          </label>
          <select name="taskAssignedTo" onChange={handleChange}>
            <option value="">Select Assignee</option>
            <option value="Bruce">Bruce</option>
            <option value="Barry">Barry</option>
            <option value="Clark">Clark</option>
            <option value="Oliver">Oliver</option>
            <option value="Jina">Jina</option>
          </select>
          <button type="submit">Add Task</button>
        </form>
      </div>
      <hr />
      <h2>Task Item</h2>
      <div className="headingContent">
        <p>Added Task</p>
        <p>Status</p>
        <p>Task Assigned</p>
        <p>Delete</p>
      </div>
      {tasks.map((item, index) => (
        <TaskItem
          key={index}
          item={item}
          DeleteHandle={() => Delete(index)}
          handleToggle={() => ChangeToggel(index)}
        />
      ))}
    </>
  );
}

export default App;
