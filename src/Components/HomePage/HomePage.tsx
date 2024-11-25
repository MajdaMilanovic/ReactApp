import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { ToDoItem } from '../ToDo';
import { Kategorije } from '../Kategorije';


export const HomePage = () => {
  const navigate = useNavigate();
    const goToList = () => {
      navigate('/list');
    }
   
  return (
    <div>
      <Kategorije/>
      <button className="list" onClick={goToList}>My list</button>
      <h1>To-Do List Categories</h1>
    </div>
  );
};