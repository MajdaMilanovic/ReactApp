import React, {useEffect, useState} from "react";
import './ToDoItem.scss';
import { addDoc, collection } from "firebase/firestore";
import { addTask, updateTask, deleteTask } from "../../services/taskService";
import { User } from "firebase/auth";
import { useAuth } from "../../hooks/useAuth";
import { getUserTasksRealtime } from "../../services/taskService";
import { Task } from "../../types/Task";

interface ToDoItemProps {
  category:string;
}

type TaskListProps = {
  selectedCategory?: string;
  onTaskClick?: (task: Task) => void;
};
export const ToDoItem: React.FC<TaskListProps> = ({ selectedCategory }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const { user } = useAuth(); 


 useEffect(() => {
    let unsubscribe: () => void;
    if (user) {
      unsubscribe = getUserTasksRealtime(user.uid, setTasks);
    }
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [user]);


  const handleAddTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (user && newTaskTitle.trim()) {
      const newTask: Omit<Task, "id"> = {
        title: newTaskTitle,
        description: "",
        completed: false,
        userId: user.uid,
        createdAt: new Date(),
        category: selectedCategory || "Uncategorized",
      };
      await addTask(newTask);
      setNewTask("");
    }
  };

// };
const handleToggleComplete = async (task: Task) => {
await updateTask(task.id!, { completed: !task.completed });
};

const handleDeleteTask = async (taskId: string) => {
await deleteTask(taskId);
};
  const filteredTasks = selectedCategory
    ? tasks.filter((task) => task.category === selectedCategory)
    : tasks;

  if (!user) {
    return <div>Please log in to view tasks.</div>;
  }

  return (
    <div className="task-list">
      <h2>Tasks for {selectedCategory || "All Categories"}</h2>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="New task title"
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(task)}
            />
            {task.title}
            <button onClick={() => handleDeleteTask(task.id!)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

