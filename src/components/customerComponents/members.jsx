import React from "react";

const Members = (props) => {
  let { members, activeMember, onMemberChange } = props;
  return (
    <div className="list-group">
      {members.map((m) => (
        <a
          key={m.name}
          className={
            m.name === activeMember
              ? "list-group-item list-group-item-action active"
              : "list-group-item list-group-item-action"
          }
          onClick={() => onMemberChange(m)}
        >
          {m.name}
        </a>
      ))}
    </div>
  );
};
export default Members;
