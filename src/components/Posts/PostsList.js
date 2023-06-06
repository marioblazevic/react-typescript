import { useContext, useEffect } from 'react';
import PostsContext from '../../store/posts-contex';
import PostItem from './PostItem';
import classes from './PostsList.module.css';
import DialogButton from '../../UI/DialogButton';
import { useRouteLoaderData } from 'react-router-dom';

const PostsList = (props) => {
  const postsCtx = useContext(PostsContext);
  const data = useRouteLoaderData('posts');

  useEffect(() => {
    // loadPosts().then((data) => postsCtx.fillPosts(data))
    postsCtx.fillPosts(data);
  }, []);

  const postItemDeleteHandler = (id) => {
    postsCtx.deletePost(id);
  };

  const postEditHandler = (post) => {
    props.onEditPost({ post });
  };

  return (
    <div className={classes.container}>
      <DialogButton onOpen={props.onOpenDialog}>Create new post</DialogButton>
      {postsCtx.posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          onDelete={postItemDeleteHandler.bind(null, post.id)}
          onEdit={postEditHandler.bind(null, post)}
        />
      ))}
    </div>
  );
};

export async function loader() {
  const response = await fetch('https://dummyjson.com/posts?limit=10');
  const responseData = await response.json();
  const loadedPosts = responseData.posts;
  return loadedPosts;
}

export default PostsList;
