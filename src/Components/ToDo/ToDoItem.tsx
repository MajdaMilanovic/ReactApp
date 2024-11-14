import React, {useState} from "react";

import './ToDoItem.scss';

interface ToDoItemProps {
  category:string;
}

export const ToDoItem: React.FC<ToDoItemProps> = ({ category }: { category: string }) => {
  const [todos, setTodos] = useState([
    { id: 1, task: 'Complete React project',category: 'Work', completed: false },
    { id: 2, task: 'Review pull requests',category: 'School', completed: false },
    { id: 3, task: 'Prepare for team meeting',category: 'Free Time', completed: false },
    { id: 4, task: 'Update portfolio',category: 'Charity', completed: false },
    { id: 5, task: 'Write blog post',category: 'School', completed: false },
    { id: 6, task: 'Plan next sprint',category: 'Work', completed: false },
    { id: 7, task: 'Read a new book',category: 'Charity', completed: false },
    { id: 8, task: 'Organize workspace',category: 'School', completed: false },
    { id: 9, task: 'Learn TypeScript',category: 'Free Time', completed: false },
  ]);

  const [newTask, setNewTask] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const taskExists = todos.some((todo) => todo.task.toLowerCase() === newTask.toLowerCase());

  const filteredTodos = todos.filter((todo) => todo.category === category);

  const addTodo = () => {    
    if (newTask.trim() === '') {
      setErrorMessage('Ne moze biti prazno');
      alert(errorMessage);
    } else if (taskExists) {
      setErrorMessage('Vec postoji');
      alert("vec postoji takav task girlllll ");
    } else {
      setTodos([
        ...todos,
        { id: todos.length + 1, task: newTask, category, completed: false }
      ]);
      setNewTask('');
      setErrorMessage('');
    }
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <h2>{category}</h2>
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <li key={todo.id} className="todo-item">
            {todo.task}
            <button onClick={() => removeTodo(todo.id)} className="remove-btn">Remove</button>
          </li>
        ))}
      </ul>
      <div className="todo-input">
        <input 
          type="text" 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
          placeholder="Add new task" 
        />
        <button onClick={addTodo}  disabled={newTask.trim() === '' || taskExists} >Add Task</button>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </div>
      {/* <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul> */}
    </div>
  );
};

