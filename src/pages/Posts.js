import { useState } from 'react';
import PostsList from '../components/Posts/PostsList';
import PostsProvider from '../store/PostsProvider';
import Modal from '../UI/Modal';

const PostsPage = () => {
  const [dialogIsShown, setDialogIsShown] = useState(false);
  const [dialogData, setDialogData] = useState();
  const [isDialogEdit, setIsDialogEdit] = useState(false);

  const closeDialogHandler = () => {
    setDialogIsShown(false);
  };

  const openDialogHandler = () => {
    setIsDialogEdit(false);
    setDialogIsShown(true);
  };

  const editPostHandler = (post) => {
    setIsDialogEdit(true);
    setDialogIsShown(true);
    setDialogData(post);
  };

  return (
    <PostsProvider>
      {dialogIsShown && (
        <Modal
          data={dialogData}
          isDialogEdit={isDialogEdit}
          onClose={closeDialogHandler}
        />
      )}
      <PostsList
        onEditPost={editPostHandler}
        onOpenDialog={openDialogHandler}
      />
    </PostsProvider>
  );
};

export default PostsPage;
