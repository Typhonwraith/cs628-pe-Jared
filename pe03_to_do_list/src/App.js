import React, { useState } from "react";
import ToDoList from "./ToDoList";

export default function App() {
    const [todos, setTodos] = useState([]); // Manage list of todos
    const [task, setTask] = useState("");  // Input field state

    // Handle input change
    const handleChange = (event) => {
        setTask(event.target.value);
    };

    // Add new task
    const addTask = () => {
        if (task.trim() !== "") {
            setTodos([...todos, task]);
            setTask(""); // Clear input after adding
        }
    };

    // Remove task
    const removeTask = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>To-Do List</h2>
            <input 
                type="text" 
                value={task} 
                onChange={handleChange} 
                placeholder="Enter task..." 
            />
            <button onClick={addTask}>Add Task</button>

            <ToDoList todos={todos} removeTask={removeTask} />
        </div>
    );
}
