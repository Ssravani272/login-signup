import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TextInput from '../components/TextInput';
import { onlyAlphabets, userLike, gmailOnly, phoneWithCC, required } from '../validation';

export default function SignUp() {
  const [form, setForm] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    confirm: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validators = {
    name: (v) => required(v) ? (onlyAlphabets(v) ? '' : 'Only alphabets allowed') : 'Name is required',
    username: (v) => required(v) ? (userLike(v) ? '' : '4-20 chars, letters/numbers . _ - @ only') : 'Username is required',
    email: (v) => required(v) ? (gmailOnly(v) ? '' : 'Must be a valid @gmail.com address') : 'Email is required',
    phone: (v) => required(v) ? (phoneWithCC(v) ? '' : 'Use +<country code> <number> e.g., +91 9876543210') : 'Phone is required',
    password: (v) => required(v) ? (userLike(v) ? '' : '4-20 chars, letters/numbers . _ - @ only') : 'Password is required',
    confirm: (v) => required(v) ? (v === form.password ? '' : 'Passwords do not match') : 'Please confirm password',
  };

  const validate = () => {
    const e = {};
    Object.keys(validators).forEach((k) => {
      const msg = validators[k](form[k]);
      if (msg) e[k] = msg;
    });
    if (form.username && form.password && form.username === form.password) {
      e.password = 'Password must be different from username';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.some((u) => u.username === form.username)) {
      setErrors((prev) => ({ ...prev, username: 'Username already exists' }));
      return;
    }
    users.push({
      name: form.name.trim(),
      username: form.username,
      email: form.email.toLowerCase(),
      phone: form.phone.replace(/\s+/g, ''),
      password: form.password,
    });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Sign-up successful! Please login.');
    navigate('/login');
  };

  return (
    <div className="page">
      <div className="card">
        <div className="card-header">Create new Account</div>
        <form onSubmit={handleSubmit} noValidate>
          <div className="grid">
            <TextInput label="NAME" name="name" value={form.name} onChange={handleChange} error={errors.name} placeholder="Your full name" />
            <TextInput label="USERNAME" name="username" value={form.username} onChange={handleChange} error={errors.username} placeholder="Choose a username" />
            <TextInput label="EMAIL" name="email" type="email" value={form.email} onChange={handleChange} error={errors.email} placeholder="you@gmail.com" />
            <TextInput label="PHONE NO." name="phone" value={form.phone} onChange={handleChange} error={errors.phone} placeholder="+91 9876543210" />
            <TextInput label="NEW PASSWORD" name="password" type="password" value={form.password} onChange={handleChange} error={errors.password} placeholder="Create a password" />
            <TextInput label="CONFIRM NEW PASSWORD" name="confirm" type="password" value={form.confirm} onChange={handleChange} error={errors.confirm} placeholder="Re-enter password" />
          </div>

          <button className="btn full" type="submit">SIGN UP</button>
        </form>

        <p className="muted small">
          Already have an account? <Link to="/login" className="link">Login</Link>
        </p>
      </div>
    </div>
  );
}
