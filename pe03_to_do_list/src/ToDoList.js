import React from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList({ todos, removeTask }) {
    return (
        <ul>
            {todos.map((todo, index) => (
                <ToDoItem 
                    key={index} 
                    task={todo} 
                    index={index} 
                    removeTask={removeTask} 
                />
            ))}
        </ul>
    );
}
