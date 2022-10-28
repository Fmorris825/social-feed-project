import React from "react";
import Post from "../Post/Post";

import { Container, ListGroup, ListGroupItem } from "react-bootstrap";
import "./PostList.css";

const PostList = (props) => {
  return (
    <Container className="PostList">
      <h2>Friend Feed</h2>
      <ListGroup variant="flush">
        {props.allPosts.map((post) => {
          return <Post post={post} />;
        })}
      </ListGroup>
    </Container>
  );
};

export default PostList;
