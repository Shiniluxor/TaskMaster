import React, { createContext, useContext, useState, useEffect  } from 'react';

const TaskContext = createContext(null);

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext debe ser utilizado dentro de un TaskProvider');
  }
  return context;
};

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(()=> {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const updateTasks = (updatedTasks) => {
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const addTask = (newTask) => {
    const updatedTasks = [...tasks, newTask]; // Agregar la nueva tarea al estado
    setTasks(updatedTasks); // Actualizar el estado tasks con la nueva tarea
    updateTasks(updatedTasks); // Actualizar localStorage con las tareas actualizadas
  };

  const completeTask = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completada: !task.completada } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    updateTasks(updatedTasks);
  };

  const editTask = (taskId, newName) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, nombre: newName } : task
    );
    setTasks(updatedTasks);
    updateTasks(updatedTasks);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, completeTask, deleteTask, editTask}}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
