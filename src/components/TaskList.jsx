import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, completeTask, deleteTask, editTask }) => {
  return (
    <div className="bg-gray-0 p-4 rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-600">Lista de Tareas</h2>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            completeTask={completeTask}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
