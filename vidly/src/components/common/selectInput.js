import React from "react";

const SelectInput = ({ name, label, errors, onChange, options }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        id={name}
        name={name}
        onChange={onChange}
        className="form-control"
      >
        <option></option>
        {options.map((element) => (
          <option key={element} value={element}>
            {element}
          </option>
        ))}
      </select>
      {errors && <div className="alert alert-danger">{errors}</div>}
    </div>
  );
};

export default SelectInput;
