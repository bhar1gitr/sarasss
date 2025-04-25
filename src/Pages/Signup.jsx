import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', phone: '' });

  const handleSubmit = async (e) => {
    console.log(form)
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/api/users/register', form);
      toast.success('Registered Successfully!');
      console.log(data);
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Registration failed';
      toast.error(errorMessage);
    }
  };

  return (
    <div className="container py-5" style={{ maxWidth: '500px' }}>
      <ToastContainer />
      <h3 className="text-center mb-4">Create Account</h3>
      <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input className="form-control" placeholder="Enter name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input className="form-control" type="email" placeholder="Enter email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input className="form-control" type="tel" placeholder="Enter phone number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input className="form-control" type="password" placeholder="Enter password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />
        </div>
        <button type="submit" className="btn btn-dark w-100">Register</button>

        <div className="text-center mt-3">
          <small className="text-muted">Already have a account? <a href="/login" style={{ textDecoration: 'none', color:'#FFC107' }}>Login</a></small>
        </div>
      </form>
      
    </div>
  );
};

export default Signup;
