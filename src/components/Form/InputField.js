import React from 'react';

const InputField = ({ label, type, placeholder, value, onChange, className }) => {
  return (
    <label className={className}>
      {label}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  )
}

export default InputField