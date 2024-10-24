import './App.css';
import { useState } from "react";

function App() {
  const [todolist, setTodolist] = useState([]);
  const [newtask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todolist.length === 0 ? 1 : todolist[todolist.length - 1].id + 1,
      taskname: newtask,
      completed: false,
    };
    const newTodolist = [...todolist, task];
    setTodolist(newTodolist);
  };

  const deleteTask = (id) => {
    const newTodolist = todolist.filter((task) => task.id !== id);
    setTodolist(newTodolist);
  };

  const completeTask = (id) => {
    setTodolist(
      todolist.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };  // Mark the task as completed
        }
        return task;  // Return the task as-is if not completed
      })
    );
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>ADD TASK</button>
      </div>
      <div className="list">
        {todolist.map((task) => (
          <div key={task.id}>
            <h1 className={task.completed ? "completed" : ""}>{task.taskname}</h1>
            <button onClick={() => deleteTask(task.id)}>DELETE TASK</button>
            <button onClick={() => completeTask(task.id)}>COMPLETE</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
