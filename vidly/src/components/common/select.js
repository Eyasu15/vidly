import React from "react";

const Select = ({ name, label, errors, onChange, value, options }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        value={value}
        id={name}
        name={name}
        onChange={onChange}
        className="form-control"
      >
        <option></option>
        {options.map((element) => (
          <option key={element.name} value={element.value}>
            {element.name}
          </option>
        ))}
      </select>
      {errors && <div className="alert alert-danger">{errors}</div>}
    </div>
  );
};

export default Select;
