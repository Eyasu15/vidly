import React from "react";

const Input = ({ name, label, type, value, onChange, errors }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        type={type}
        className="form-control"
      />
      {errors && <div className="alert alert-danger">errors</div>}
    </div>
  );
};

export default Input;
