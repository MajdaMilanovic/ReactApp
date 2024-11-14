import React, {useState} from "react";
import { ToDoItem } from "./ToDoItem";
import { CategoryList } from "../CategoryList";


export const ToDoList= () =>
{
    const categories = ['School', 'Work', 'Charity', 'Free Time'];
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };
    return (    

         <div>
      <CategoryList categories={categories} onSelectCategory={handleCategoryClick} />

      {/* Display todos for the selected category */}
      {selectedCategory && (
        <div>
          <ToDoItem category={selectedCategory} />
        </div>
      )}
    </div>
    );
};