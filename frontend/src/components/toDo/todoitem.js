import './todolist.css';
import React, { useState } from 'react';

const TodoItem = ({ task, completed, dueDate, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);
  const [editedDueDate, setEditedDueDate] = useState(dueDate);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(editedTask);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditedTask(e.target.value);
  };

  const handleDueDateChange = (e) => {
    setEditedDueDate(e.target.value);
  };

  return (
    <div className="itemDiv">
      {isEditing ? (
        <>
          <input className="itemInput"  type="text" value={editedTask} onChange={handleChange} />
          <input
            className="dateInput" 
            type="date"
            value={editedDueDate}
            onChange={handleDueDateChange}
          />
          <button  className="btn" onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
            {task}
          </span>
          <span> | Due Date: {dueDate}</span>
          <button  className="btn" onClick={onToggle}>{completed ? 'Undo' : 'Complete'}</button>
          <button  className="btn" onClick={handleEdit}>Edit</button>
          <button  className="btn" onClick={onDelete}>Delete</button>
        </>
      )}
    </div>
  );
};

export default TodoItem;

