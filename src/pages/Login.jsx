import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TextInput from '../components/TextInput';
import { required } from '../validation';

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validate = () => {
    const e = {};
    if (!required(form.username)) e.username = 'Username is required';
    if (!required(form.password)) e.password = 'Password is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setServerError('');
    if (!validate()) return;

    // Demo auth using localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const found = users.find((u) => u.username === form.username);
    if (!found || found.password !== form.password) {
      setServerError('Invalid username or password');
      return;
    }
    alert('Logged in!');
    navigate('/home');
  };

  return (
    <div className="page">
      <div className="card">
        <div className="card-header">Login</div>
        <p className="subtitle">Sign in to continue</p>
        <form onSubmit={handleSubmit} noValidate>
          <TextInput
            label="USERNAME"
            name="username"
            value={form.username}
            onChange={handleChange}
            error={errors.username}
            placeholder="Enter your username"
          />
          <TextInput
            label="NEW PASSWORD"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            error={errors.password}
            placeholder="Enter your password"
          />
          {serverError && <p className="server-error">{serverError}</p>}
          <button className="btn" type="submit">LOGIN</button>
        </form>

        <p className="muted small">
          Don&apos;t have Account? <Link to="/signUp" className="link">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
