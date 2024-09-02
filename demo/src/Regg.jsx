import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    confirmAddress: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { address, confirmAddress } = formData;

    if (address !== confirmAddress) {
      alert("Password and Confirm Password do not match");
      return;
    }

    await postDataForStudent(formData);
    clearForm();
  };

  const clearForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      confirmAddress: ''
    });
  };

  const postDataForStudent = async (data) => {
    try {
      const response = await fetch('http://localhost:3000/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const responseData = await response.json();
      if (response.ok) {
        alert(`Message: ${responseData.message}`);
        navigate('/'); // Navigate to the Login page after successful registration
      } else {
        alert(`Message: ${responseData.message}`);
      }
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="text" id="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="address">Create Password:</label>
          <input type="password" id="address" value={formData.address} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="confirmAddress">Confirm Password:</label>
          <input type="password" id="confirmAddress" value={formData.confirmAddress} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
