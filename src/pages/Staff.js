import React from "react";
import UserCard from "./../components/UserCard/UserCard";
import { USER } from "./../DATA";

const Staff = () => {
  return (
    <div className="staff-container">
      {USER?.map((u) => (
        <UserCard item={u} />
      ))}
    </div>
  );
};

export default Staff;
