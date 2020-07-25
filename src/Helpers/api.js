import React from "react";

const PostsPath = 'https://jsonplaceholder.typicode.com/posts';
const downloadPosts = () => fetch(PostsPath)
    .then(response => response.json());

export const PostFromServer = React.createContext(downloadPosts());