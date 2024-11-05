import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.scss';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   const [formData, setFormData] = useState<{ name: string; email: string; password: string } | null>(null);
   const navigate = useNavigate();

      const handleNavigation = () => {
    navigate('/login');
      }


   const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    
    const userData = { name, email, password };

    // Save user data to localStorage
    localStorage.setItem('userData', JSON.stringify(userData));

    setFormData(userData);

  
    setName('');
    setEmail('');
    setPassword('');

    alert('User registered successfully!');
     navigate('/login'); 


  };

  return (
    <form onSubmit={handleSubmit} >
      <h2>Register</h2>

      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
<br />
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
      <button type="submit">Register</button>
      <br />
      <label></label>
      <button onClick={handleNavigation} >Već imate profil? Prijavite se!</button>
    </form>
  );
};

export const Registration = () => {
  return <div>{RegistrationForm()}</div>;
};