import './todolist.css';
import React, { useState } from 'react';
import TodoItem from './todoitem';

const TodoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, task: 'Task 1', completed: false, dueDate: '2023-07-31' },
    { id: 2, task: 'Task 2', completed: true, dueDate: '2023-08-10' },

  ]);

  const [newTask, setNewTask] = useState('');
  const [newDueDate, setNewDueDate] = useState('');

  const handleToggle = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleEdit = (id, editedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, task: editedTask } : task
      )
    );
  };

  const handleSort = () => {
    setTasks((prevTasks) =>
      [...prevTasks].sort((a, b) => {
        return new Date(a.dueDate) - new Date(b.dueDate);
      })
    );
  };

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: Date.now(), task: newTask, completed: false, dueDate: newDueDate },
      ]);
      setNewTask('');
      setNewDueDate('');
    }
  };

  return (
    <div  className="toDoDiv" >
      <button className="btn" onClick={handleSort}>Sort by Due Date</button>
      <div>
        <input
          type="text"
          className="textInput" 
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add new task"
        />
        <input
          type="date"
          className="dateInput"
          value={newDueDate}
          onChange={(e) => setNewDueDate(e.target.value)}
        />
        <button  className="btn" onClick={handleAddTask}>Add Task</button>
      </div>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task.task}
          completed={task.completed}
          dueDate={task.dueDate}
          onToggle={() => handleToggle(task.id)}
          onDelete={() => handleDelete(task.id)}
          onEdit={(editedTask) => handleEdit(task.id, editedTask)}
        />
      ))}
    </div>
  );
};

export default TodoList;
