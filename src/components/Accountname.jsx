import React from "react";

const Accountname = ({ users }) => {
  return (
    <>
      {users.map((user, index) => (
        <p className="text-xs text-neutral-700 pl-1">
          {user?.firstName} {user?.lastName}
        </p>
      ))}
    </>
  );
};

export default Accountname;
