import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.scss";
import { useAuth } from "../../hooks/useAuth";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

export const Nav = () =>
{
   const { user, loading } = useAuth();
    const navigate = useNavigate();

    if(loading) {
      return <div className="navbar_loading">Loading...</div>
    }

    const handleLogOut =  () =>
  {
    auth.signOut(); 
    alert('You have successfully logged out.');
    navigate('/login');
  }

  if (!user) return null;

   return (
    <div>
    {user ? (
      <div className="navbar" >
        <p className="user-profile">Dobrodošli {user.email} !</p>
       <button onClick={handleLogOut}>Log Out</button>
    </div>
    ) : (
      <h1>Please register and log in to access your dashboard.</h1>
    )}
</div>
  );
};