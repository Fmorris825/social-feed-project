import React, { useEffect, useState } from "react";
import {
  Card,
  Container,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const CreatePostForm = (props) => {
  useEffect(() => {
    handleSubmit();
  }, [props.addNewPost]);

  const [name, setName] = useState("Enter Username");
  const [post, setPost] = useState("What's on your mind...");

  function handleSubmit(event) {
    event.preventDefault();
    let newPost = {
      name: name,
      post: post,
    };
    props.addNewPost(newPost);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup className="mb-3">
          <FormLabel>
            <h2>Name</h2>
          </FormLabel>
          <FormControl
            className="text-muted"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel>
            <h2>Post</h2>
          </FormLabel>
          <FormControl
            className="text-muted"
            type="text"
            value={post}
            onChange={(event) => setPost(event.target.value)}
          />
        </FormGroup>
        <Button variant="secondary" type="submit">
          Submit Post
        </Button>
      </Form>
    </Container>
  );
};

export default CreatePostForm;
