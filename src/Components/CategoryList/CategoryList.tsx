// CategoryList.tsx
import React from 'react';
import "./CategoryList.scss";

interface CategoryListProps {
  categories: string[];
  onSelectCategory: (category: string) => void;
}

export const CategoryList: React.FC<CategoryListProps> = ({ categories, onSelectCategory }) => {

  return (
    <div className="category-list">
      {categories.map((category) => (
        <button 
          key={category} 
          onClick={() => onSelectCategory(category)} 
          className="category-button"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

