import React from "react";

export default function ToDoItem({ task, index, removeTask }) {
    return (
        <li>
            {task}
            <button onClick={() => removeTask(index)}>Delete</button>
        </li>
    );
}
