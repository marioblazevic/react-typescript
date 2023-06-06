import { useReducer } from 'react';
import PostsContext from './posts-contex';

const defaultPostsState = {
  posts: [],
};

const postsReducer = (state, action) => {
  if (action.type === 'FILL') {
    return {
      posts: action.posts,
    };
  }
  if (action.type === 'DELETE') {
    const updatedPosts = state.posts.filter((post) => post.id !== action.id);
    return {
      posts: updatedPosts,
    };
  }
  if (action.type === 'ADD') {
    const posts = [action.post, ...state.posts];
    return {
      posts: posts,
    };
  }
  if (action.type === 'EDIT') {
    const existingPostIndex = state.posts.findIndex(
      (item) => item.id === action.post.id
    );
    const existingPost = state.posts[existingPostIndex];
    let updatedPosts;
    if (existingPost) {
      const updatedPost = {
        id: action.post.id,
        title: action.post.title,
        body: action.post.body,
      };
      updatedPosts = [...state.posts];
      updatedPosts[existingPostIndex] = updatedPost;
    }
    return {
      posts: updatedPosts,
    };
  }
  return defaultPostsState;
};

const PostsProvider = (props) => {
  const [postsState, dispatchPostsAction] = useReducer(
    postsReducer,
    defaultPostsState
  );

  const fillPostsHandler = (posts) => {
    dispatchPostsAction({ type: 'FILL', posts: posts });
  };

  const deletePostHandler = (id) => {
    dispatchPostsAction({ type: 'DELETE', id: id });
  };

  const addPostHandler = (post) => {
    dispatchPostsAction({ type: 'ADD', post: post });
  };

  const editPostHandler = (post) => {
    dispatchPostsAction({ type: 'EDIT', post: post });
  };

  const postsContext = {
    posts: postsState.posts,
    fillPosts: fillPostsHandler,
    deletePost: deletePostHandler,
    addPost: addPostHandler,
    editPost: editPostHandler,
  };

  return (
    <PostsContext.Provider value={postsContext}>
      {props.children}
    </PostsContext.Provider>
  );
};

export default PostsProvider;
