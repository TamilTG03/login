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
        // Redirect to another website
        window.location.href = "https://www.amazon.in/?tag=msndeskstdin-21&ref=pd_sl_5myc57zwmd_e&adgrpid=1315017564951826&hvadid=82188862025546&hvnetw=o&hvqmt=e&hvbmt=be&hvdev=c&hvlocint=&hvlocphy=144034&hvtargid=kwd-82189528356367:loc-90&hydadcr=14452_2334185&msclkid=97444e81f7f9193a306e28560370d279";
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
