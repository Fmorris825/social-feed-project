import React, { useEffect } from "react";
import ToggleButtonGroupUncontrolled from "../LikeAndDislikeButtons/LikeAndDislikeButtons";

import { Container, ListGroupItem, Row, Col } from "react-bootstrap";
import "./Post.css";
import PostDate from "../PostDate/PostDate";

const Post = (props) => {
  return (
    <Container className="PostList">
      <ListGroupItem>
        <Row>
          <Col className="PostContent">
            <div className="d-flex justify-content-between">
              <h3>{props.post.name}</h3>
              <span>
                <PostDate />
              </span>
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
