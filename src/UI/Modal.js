import { Fragment, useContext, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';

import classes from './Modal.module.css';
import PostsContext from '../store/posts-contex';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  let post = props.data ? props.data.post : null;
  const postsCtx = useContext(PostsContext);
  const isEmpty = (value) => value.trim() === '';
  const isLength = (value) => value.length > 4;
  const [formInputsValidity, setFormInputsValidity] = useState({
    title: true,
    body: true,
  });

  const titleInputRef = useRef();
  const bodyInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredBody = bodyInputRef.current.value;

    const enteredTitleIsValid = !isEmpty(enteredTitle);
    const enteredBodyIsValid = isLength(enteredBody);

    setFormInputsValidity({
      title: enteredTitleIsValid,
      body: enteredBodyIsValid,
    });

    const formIsValid = enteredTitleIsValid && enteredBodyIsValid;

    if (!formIsValid) {
      return;
    }

    if (!props.isDialogEdit) {
      const post = {
        id: Math.random(),
        title: enteredTitle,
        body: enteredBody,
      };
      postsCtx.addPost(post);
    } else {
      postsCtx.editPost({
        id: post.id,
        title: enteredTitle,
        body: enteredBody,
      });
    }

    props.onClose();
  };

  const titleValidityClasses = formInputsValidity.title ? '' : classes.invalid;
  const bodyValidityClasses = formInputsValidity.body ? '' : classes.invalid;

  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        <form>
          <p>Title:</p>
          <input
            type="text"
            className={classes.input}
            ref={titleInputRef}
            id="title"
            defaultValue={props.isDialogEdit ? post.title : ''}
          />
          {!formInputsValidity.title && (
            <p className={titleValidityClasses}>
              Please enter at least 1 character
            </p>
          )}
          <p>Body:</p>
          <textarea
            className={classes.textarea}
            ref={bodyInputRef}
            id="body"
            defaultValue={props.isDialogEdit ? post.body : ''}
          ></textarea>
          {!formInputsValidity.body && (
            <p className={bodyValidityClasses}>
              Please enter at least 5 character
            </p>
          )}
          <Button
            variant="outlined"
            className={classes.button}
            onClick={confirmHandler}
          >
            Post
          </Button>
          <Button
            variant="outlined"
            className={classes.button}
            onClick={props.onClose}
          >
            Cancel
          </Button>
        </form>
      </div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onClose={props.onClose}
          data={props.data}
          isDialogEdit={props.isDialogEdit}
        >
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
