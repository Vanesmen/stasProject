import React from 'react';

const InputField = ({ label, type, placeholder, value, onChange, className, key }) => {
  return (
    <label className={className} key={key}>
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