import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function UserCard({ user }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Header>Featured</Card.Header>
      <ListGroup variant='flush'>
        <ListGroup.Item>{user.name}</ListGroup.Item>
        <ListGroup.Item>{user.email}</ListGroup.Item>
        <ListGroup.Item>
          <Link to={`/profile/${user.id}`}>
            <Button variant='secondary'>show details</Button>
          </Link>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default UserCard;
