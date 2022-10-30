import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ToDoApp from "./components/ToDoApp"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToDoApp />
  </React.StrictMode>
);

// reportWebVitals();
