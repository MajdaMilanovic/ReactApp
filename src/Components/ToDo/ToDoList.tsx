import React, {useState, useEffect} from "react";
import { ToDoItem } from "./ToDoItem";
import { CategoryList } from "../CategoryList";
import { User } from "firebase/auth";
import { useAuth } from "../../hooks/useAuth";
import { getUserTasksRealtime } from "../../services/taskService";
import { Task } from "../../types/Task";


export const ToDoList= () =>
{
    const categories = ['School', 'Work', 'Charity', 'Free Time'];
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
     const [tasks, setTasks] = useState<Task[]>([]);

     
  const { user } = useAuth(); 
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };
   useEffect(() => {
    let unsubscribe: () => void;
    if (user) {
      unsubscribe = getUserTasksRealtime(user.uid, setTasks);
      console.log(tasks)
    }
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [user]);

    return (    

         <div>
      <CategoryList categories={categories} onSelectCategory={handleCategoryClick} />

      {/* Display todos for the selected category */}
      {selectedCategory && (
        <div>
          <ToDoItem selectedCategory={selectedCategory} />
        </div>
      )}
      
    </div>
    );
};