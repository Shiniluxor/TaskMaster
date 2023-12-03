import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleInputChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() !== '') {
      addTask({ id: Date.now(), nombre: taskName, completada: false });
      setTaskName('');
    }
  };

  return (
    <form className="mt-4 p-5 bg-sky-200 rounded-md" onSubmit={handleSubmit}>
      <input
        className="border border-gray-200 rounded-md px-3 py-2 mr-2"
        type="text"
        placeholder="Nueva tarea"
        value={taskName}
        onChange={handleInputChange}
      />
      <button
        className="px-3 py-2 bg-blue-600 text-gray-300 rounded-md"
        type="submit"
      >
        Agregar Tarea
      </button>
    </form>
  );
};

export default TaskForm;
