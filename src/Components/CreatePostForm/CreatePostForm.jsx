import React, { Component, useState } from 'react';


const CreatePostForm = (props) => {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(event){
        event.preventDefualt();
        let newPost = {
            name: name,
            post: post
        };
        console.log(newPost)
        props.addNewPost(newPost)
    }

    return (  
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type='text' value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div>
                <label>Post</label>
                <input type="text" value={post} onChange={(event) => setPost(event.target.value)}/>
                <button type='submit'>Submit Post</button>
            </div>
        </form>
    );
}

export default CreatePostForm;