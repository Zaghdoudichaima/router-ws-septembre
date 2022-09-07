import React from "react";
import { Button } from "react-bootstrap";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { users } from "../data";

function Profile({ login }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const user = users.find(item => item.id === Number(id));
  return (
    <>
      {login ? (
        <div>
          <h1>{user.name}</h1>
          <h3>{user.email}</h3>
          <h3>{user.phone}</h3>
          <h3>{user.address.street}</h3>
          <h3>{user.address.suite}</h3>
          <Button variant='secondary' onClick={() => navigate(-1)}>
            Go Back
          </Button>
        </div>
      ) : (
        <Navigate to='/' />
      )}
    </>
  );
}

export default Profile;
