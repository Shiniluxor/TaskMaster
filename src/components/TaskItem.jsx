import React, { useState } from 'react';

const TaskItem = ({ task, completeTask, deleteTask, editTask}) => {

  const [isEditing, setIsEditing] = useState(false);
  const [editedTaskName, setEditedTaskName] = useState(task.nombre);

  const { id, completada } = task;

  const handleComplete = () => {
    completeTask(id);
  };

  const handleDelete = () => {
    deleteTask(id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);

    editTask(id, editedTaskName);

  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedTaskName(task.nombre);
  };

  const handleChange = (e) => {
    setEditedTaskName(e.target.value);
  };

  return (
    <li className="flex items-center justify-between border m-2 p-3 bg-blue-100 rounded-md border-blue-300 shadow-md shadow-blue-100">
      {isEditing ? (
        <input
          type="text"
          className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:border-blue-400"
          value={editedTaskName}
          onChange={handleChange}
        />
      ) : (
        <span
          className={`flex-1 cursor-pointer  ${completada ? 'line-through text-gray-400' : 'text-gray-700'}`}
          onClick={handleComplete}
        >
          {task.nombre}
        </span>
      )}
      <div>
        {isEditing ? (
          <div>
            <button
              className="px-2 py-1 mr-2 bg-blue-400 text-white rounded-md hover:bg-blue-500"
              onClick={handleSave}
            >
              Guardar
            </button>
            <button
              className="px-2 py-1 bg-red-400 text-white rounded-md hover:bg-red-500"
              onClick={handleCancel}
            >
              Cancelar
            </button>
          </div>
        ) : (
          <div>
            <button
              className="ml-4 px-2 py-1 rounded-md bg-yellow-300 text-yellow-900 hover:bg-yellow-400 hover:text-yellow-900 cursor-pointer"
              onClick={handleEdit}
            >
              Editar
            </button>
            <button
              className={`ml-2 px-2 py-1 rounded-md ${completada ? 'bg-gray-300 text-gray-600' : 'bg-blue-400 text-white'}`}
              onClick={handleComplete}
            >
              {completada ? 'Incompleta' : 'Completa'}
            </button>
            <button
              className="ml-2 px-2 py-1 rounded-md bg-red-400 text-white hover:bg-red-500"
              onClick={handleDelete}
            >
              Eliminar
            </button>
          </div>
        )}
      </div>
    </li>
  );
};

export default TaskItem;
