import React from 'react';
import './WelcomePage.scss';
import { useNavigate } from 'react-router-dom';




export const WelcomePage = () => {

   const navigate = useNavigate();

   const handleNavigation = () => {
    navigate('/register');
  };


  return (
    <div>
  <div className='welcome'>Dobrodošli!</div>
  <button onClick={handleNavigation}>Registracija</button>
  </div>
  );
};