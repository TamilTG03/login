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
    const{name,email,phone,address,confirmAddress}=formData;

    if( name&& email &&phone&& address && confirmAddress){
      if(phone.length!=10){
        alert("invalid phonenumber!")
        return;
     }
  
      
  
     if(address.length<=5){
      alert("password must be 6 charectors")
      return;
     }
  
     
        
  
      if (address !== confirmAddress) {
        alert("Password and Confirm Password do not match");
        return;
      }
  
      
    }

    else{
      alert("fill all the blankes")
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
    <div className='container  '>
  <div className='row mt-5 d-flex justify-content-center'>
    <div className='col col-md-8 col-lg-6'>
      <h1 className='text-primary mb-4 text-center'>Register</h1>
      <form onSubmit={handleSubmit} className='d-flex flex-column align-items-center'>
        <div className='form-group mb-3 w-100'>
          <label htmlFor="name" className='h4 text-muted'>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className='form-control'
            required
          />
        </div>
        <div className='form-group mb-3 w-100'>
          <label htmlFor="email" className='h4 text-muted'>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className='form-control'
            required
          />
        </div>
        <div className='form-group mb-3 w-100'>
          <label htmlFor="phone" className='h4 text-muted'>Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className='form-control'
            required
          />
        </div>
        <div className='form-group mb-3 w-100'>
          <label htmlFor="address" className='h4 text-muted'>Create Password</label>
          <input
            type="password"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className='form-control'
            required
          />
        </div>
        <div className='form-group mb-4 w-100'>
          <label htmlFor="confirmAddress" className='h4 text-muted'>Confirm Password</label>
          <input
            type="password"
            id="confirmAddress"
            name="confirmAddress"
            value={formData.confirmAddress}
            onChange={handleChange}
            className='form-control'
            required
          />
        </div>
        <button type="submit" className='btn btn-primary'>Submit</button>
      </form>
    </div>
  </div>
</div>

  );

};


export default Register;
