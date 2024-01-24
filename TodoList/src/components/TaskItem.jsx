function TaskItem({ item, DeleteHandle, handleToggle }) {
  return (
    <div className="dataContent">
      <strong style={{ color: item.completed ? "green" : "red" }}>
        {item.task}
      </strong>
      <button onClick={handleToggle}>{item.completed ? "Yes" : "No"}</button>
      <strong>{item.taskAssignedTo}</strong>
      <button onClick={DeleteHandle}>Delete Task</button>
    </div>
  );
}

export default TaskItem;
