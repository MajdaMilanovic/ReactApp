import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';


export const HomePage = () => {

  const [userData, setUserData] = useState({ email: '', name: '' });
  const navigate = useNavigate();

 useEffect(() => {
    const savedUserData = JSON.parse(localStorage.getItem('userData') || '{}');
    setUserData(savedUserData);
  }, []);

  const handleLogOut = () =>
  {
    localStorage.removeItem('userData'); 
    alert('You have successfully logged out.');
    navigate('/login'); 
  }


  return (

  <div className="user-profile">Dobrodošli {userData.email} !
  <button className="logOutButton" onClick={handleLogOut}>Odjava</button>
  
  </div>

  );
};