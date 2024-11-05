import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

   
    const savedUserData = JSON.parse(localStorage.getItem('userData') || '{}');

    
    if (savedUserData.email === email && savedUserData.password === password) {
      alert('Login successful!');
      navigate('/'); 
    } else {
      alert('User not registered. Redirecting to registration page.');
      navigate('/register'); 
    }
  };

  return (
    <form onSubmit={handleSubmit} >
      <h2>Login</h2>

      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
<br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
<br />
      <button type="submit">Login</button>
    </form>
  );
};

export const Login = () => {
  return <div>{LoginForm()}</div>;
};
