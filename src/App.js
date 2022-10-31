import React, { useState, useEffect } from "react";
import CreatePostForm from "./Components/CreatePostForm/CreatePostForm";
import Navigation from "./Components/Navigation/Navigation";
import PostList from "./Components/PostList/PostList";

import { Container, Stack } from "react-bootstrap";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([
    { name: "Fred Morris", post: "Keep Chugging... Choooo Choooo" },
  ]);

  function addNewPost(post) {
    let tempPosts = [post, ...posts];
    setPosts(tempPosts);
  }

  return (
    <div className="Body">
      <div>
        <Navigation />
      </div>
      <Container className="AppBody">
        <Stack gap={5}>
          <div>
            <CreatePostForm addNewPost={addNewPost} />
          </div>
          <div>
            <PostList allPosts={posts} />
          </div>
        </Stack>
      </Container>
    </div>
  );
}

export default App;
