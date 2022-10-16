import React from "react";

const Employee = (props) => {
  return (
    <div>
      <h1>Here is an Employee {props.name}!</h1>
      {/* <p>{props.role ? props.role : "No role"}</p> */}
      {props.role ? <p className="role">{props.role}</p> : <p className="no-role">No Role</p>}
    </div>
  );
};

export default Employee;
