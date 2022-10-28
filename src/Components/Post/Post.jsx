import React from "react";
import ToggleButtonGroupUncontrolled from "../LikeAndDislikeButtons/LikeAndDislikeButtons";

import { Container, ListGroupItem, Row, Col } from "react-bootstrap";
import "./Post.css";

const Post = (props) => {
  return (
    <Container className="PostList">
      <ListGroupItem>
        <Row>
          <Col className="PostContent">
            <div>
              <h3>{props.post.name}</h3>
            </div>
            <div className="PostText">{props.post.post}</div>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-end">
            <ToggleButtonGroupUncontrolled />
          </Col>
        </Row>
      </ListGroupItem>
    </Container>
  );
};

export default Post;
