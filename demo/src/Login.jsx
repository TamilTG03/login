import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { email, address };
    await getAll(data);

    setEmail('');
    setAddress('');
  };

  const getAll = async (data) => {
    try {
      const response = await fetch(`http://localhost:3000/getbyEmail/${data.email}/${data.address}`, {
        method: 'GET',
      });
      const responsedata = await response.json();

      if (!responsedata) {
        alert("Check username or password");
      } else {
        alert("Welcome");
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const handleSignInClick = () => {
    navigate('/Regg')};

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Password:</label>
          <input
            type="password"
            id="address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Login</button>
          <button type="button" onClick={handleSignInClick}>
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
