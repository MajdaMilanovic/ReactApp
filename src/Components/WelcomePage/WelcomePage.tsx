import React from 'react';
import './WelcomePage.scss';
import { useNavigate } from 'react-router-dom';
import { Kategorije } from '../Kategorije';




export const WelcomePage = () => {

   const navigate = useNavigate();

   const handleNavigation = () => {
    navigate('/register');

  
  };


  return (
    <div>
  <button onClick={handleNavigation}>Registracija</button>
  </div>
  );
};