import React, { useState } from 'react';

export default function TextInput({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
  name,
  rightIcon
}) {
  const [show, setShow] = useState(false);
  const isPassword = type === 'password';

  return (
    <div className="form-control">
      {label && <label className="label">{label}</label>}
      <div className={`input-wrap ${error ? 'error' : ''}`}>
        <input
          name={name}
          className="input"
          type={isPassword ? (show ? 'text' : 'password') : type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          autoComplete="off"
        />
        {isPassword && (
          <button
            type="button"
            className="eye"
            onClick={() => setShow((s) => !s)}
            aria-label={show ? 'Hide password' : 'Show password'}
          >
            {show ? '🙈' : '👁️'}
          </button>
        )}
        {!isPassword && rightIcon}
      </div>
      {error && <p className="error-text">{error}</p>}
    </div>
  );
}
