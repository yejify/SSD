import React from 'react';

export default function Input({ name, getResult, value, ...props }) {
  const handleChange = (e) => {
    getResult({ [name]: e.target.value });
  };

  return (
    <>
      <p>{name}</p>
      <input
        type='text'
        name={name}
        onChange={handleChange}
        value={value}
        {...props}
      />
    </>
  );
}
