import React from 'react';

const PostsContext = React.createContext({
  posts: [],
  fillPosts: (posts) => {},
  deletePost: (id) => {},
  addPost: (post) => {},
  editPost: (post) => {},
});

export default PostsContext;
