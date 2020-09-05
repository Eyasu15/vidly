import React from "react";

const Status = (props) => {
  let { status, activeStatus, onStatusChange } = props;
  return (
    <div className="list-group">
      {status.map((s) => (
        <a
          key={s.name}
          className={
            s.name === activeStatus
              ? "list-group-item list-group-item-action active"
              : "list-group-item list-group-item-action"
          }
          onClick={() => onStatusChange(s.name)}
        >
          {s.name}
        </a>
      ))}
    </div>
  );
};
export default Status;
