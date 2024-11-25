import React, { useState, useEffect } from 'react';
import './WelcomePage.scss';
import { useNavigate } from 'react-router-dom';
import { Kategorije } from '../Kategorije';
import { useAuth } from '../../hooks/useAuth';

export const WelcomePage = () => {

   const { user } = useAuth();
    console.log(user?.email);

  const [id, postaviId] = useState(1);
   const navigate = useNavigate();
   const [podatak, postaviPodatak] = useState({
    body:"",
    id:null,
    title:"",
    userId:null,
   });
  
useEffect(()=>{
  // dohvatiPodatke();
}, [id]);
   
const handleNavigation = () => {
    if (user) {
      navigate('/'); // Navigate to home if logged in
    } else {
      navigate('/register'); // Navigate to registration if not logged in
    }

  };
  return (
    <div>
      <div>
      {user ? (
        <h1>Welcome, {user.email}!</h1>
      ) : (
        <h1>Please register and log in to access your dashboard.</h1>
      )}
    </div>

  <button onClick={handleNavigation}>GO</button>
  <hr />
  </div>
  );
};