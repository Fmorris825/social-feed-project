import React, { useState } from 'react';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
// import NavBar from './Components/NavBar/NavBar';
// import Post from './Components/Post/Post';
// import PostList from './Components/PostList/PostList';


function App() {

  const [posts, setPost] = useState([{Name: 'Fred Morris', Post: 'Keep Chugging... Choooo Choooo'}])

  // function addNewPost(post){
  //   let tempPost = [...posts, post];
  //   setPost(tempPost);
  // }

  return (
    <div >
      {/* <NavBar />
      <Post /> */}
      <CreatePostForm parentPost = {posts}/>
      {/* <PostList parentPost = {posts}/> */}
      
    </div>
  );
}

export default App;


