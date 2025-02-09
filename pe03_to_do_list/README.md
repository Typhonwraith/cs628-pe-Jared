<!-- To-Do List Application (React) -->
This React-based To-Do List app allows users to add, display, and remove tasks dynamically. It uses React Hooks (useState) for state management and follows a component-based architecture.

<!-- Input -->
Users interact with the application by typing a task into the input field. When they click the "Add Task" button, the entered text is sent as input to the application. Each task is stored in the state (useState) and rendered dynamically. Users can also remove a task by clicking the "Delete" button next to it.

<!-- Process -->
The app processes tasks using the useState hook in React:
The user enters a task → setTask updates the state.
Clicking "Add Task" updates the todos array and re-renders the list.
Clicking "Delete" removes the selected task by filtering the array.

<!-- Output -->
The output is a dynamically updated list of tasks displayed on the screen. The user can view, add, and remove tasks in real time, reflecting immediate state changes.