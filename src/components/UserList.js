import React from "react";
import { users } from "../data";
import UserCard from "./UserCard";
import { Navigate } from "react-router-dom";

function UserList({ login }) {
  return (
    <>
      {login ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            gap: "20px",
            flexWrap: "wrap",
            width: "90%",
            margin: "50px auto",
          }}
        >
          {users.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      ) : (
        <Navigate to='/' />
      )}
    </>
  );
}

export default UserList;
