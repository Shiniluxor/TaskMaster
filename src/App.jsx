import React from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { useTaskContext } from './TaskProvider'; 

const App = () => {
  const { tasks, addTask, completeTask, deleteTask, editTask } = useTaskContext(); 
  return (
    <div className="max-w-screen-lg mx-auto my-8">
      <TaskForm addTask={addTask}  className="mb-8"/>
      <TaskList tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} editTask={editTask} />
    </div>
  );
};

export default App;
