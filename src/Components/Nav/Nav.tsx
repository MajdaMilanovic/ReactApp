import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.scss";


export const Nav = () =>
{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState({ email: '', name: '' });
    const navigate = useNavigate();

    useEffect(() => {
    const savedUserData = JSON.parse(localStorage.getItem('userData') || '{}');
    setUserData(savedUserData);
  }, []);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedInStatus);
  }, []);


    const handleLogOut = () =>
  {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userData'); 
    alert('You have successfully logged out.');
    navigate('/login'); 
    setIsLoggedIn(false);
  }

  if (!isLoggedIn) {
    return null; 
  }
  else
    return (
         <nav className="navbar">
            <p>Dobrodošli {userData.email} !</p>
      <button onClick={handleLogOut}>Log Out</button>
    </nav>
    );

};