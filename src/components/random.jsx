// // src/index.js
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import { createStore } from "redux";
// import App from "./App";
// import reducers from "./reducers";

// const store = createStore(reducers);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

// // src/App.js
// import React from "react";
// import TaskInput from "./components/TaskInput";
// import TaskList from "./components/TaskList";
// import "./App.css";

// function App() {
//   return (
//     <div className="app-container">
//       <div className="header">
//         <h1>React To-Do Application</h1>
//       </div>
//       <div className="content">
//         <TaskInput />
//         <TaskList />
//       </div>
//     </div>
//   );
// }

// export default App;

// // src/components/TaskInput.js
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addTask } from "../actions";
// import "./TaskInput.css";

// function TaskInput() {
//   const [task, setTask] = useState("");
//   const dispatch = useDispatch();

//   const handleAddTask = () => {
//     if (task) {
//       dispatch(addTask(task));
//       setTask("");
//     }
//   };

//   return (
//     <div className="task-input-container">
//       <input
//         className="task-input"
//         type="text"
//         placeholder="Add a new task..."
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//       />
//       <button className="add-task-button" onClick={handleAddTask}>Add Task</button>
//     </div>
//   );
// }

// export default TaskInput;

// // src/components/TaskList.js
// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { deleteTask } from "../actions";
// import "./TaskList.css";

// function TaskList() {
//   const tasks = useSelector((state) => state.tasks);
//   const dispatch = useDispatch();

//   return (
//     <ul className="task-list">
//       {tasks.map((task, index) => (
//         <li key={index} className="task-item">
//           <span>{task}</span>
//           <button className="delete-button" onClick={() => dispatch(deleteTask(index))}>Delete</button>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default TaskList;

// // src/App.css
// .app-container {
//   font-family: 'Roboto', sans-serif;
//   background-color: #f9f9f9;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;
// }

// .header {
//   margin-bottom: 20px;
//   text-align: center;
// }

// .header h1 {
//   color: #333;
//   font-size: 2rem;
// }

// .content {
//   width: 100%;
//   max-width: 600px;
//   background: #fff;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   border-radius: 8px;
//   padding: 20px;
// }

// // src/components/TaskInput.css
// .task-input-container {
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 20px;
// }

// .task-input {
//   flex: 1;
//   padding: 10px;
//   border: 1px solid #ddd;
//   border-radius: 4px;
//   font-size: 1rem;
//   margin-right: 10px;
// }

// .add-task-button {
//   background-color: #007bff;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   padding: 10px 20px;
//   cursor: pointer;
//   font-size: 1rem;
// }

// .add-task-button:hover {
//   background-color: #0056b3;
// }

// // src/components/TaskList.css
// .task-list {
//   list-style: none;
//   padding: 0;
//   margin: 0;
// }

// .task-item {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px;
//   border: 1px solid #ddd;
//   border-radius: 4px;
//   margin-bottom: 10px;
//   background-color: #f9f9f9;
// }

// .delete-button {
//   background-color: #dc3545;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   padding: 5px 10px;
//   cursor: pointer;
// }

// .delete-button:hover {
//   background-color: #c82333;
// }
