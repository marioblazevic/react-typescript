import { Fragment, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch } from 'react-redux';

import classes from './Modal.module.css';
import { ToDoActions } from '../store/ToDo-slice';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  const dispatch = useDispatch();
  let post = props.data ? props.data.post : null;
  let isChecked = false;

  const handleChange = (event) => {
    isChecked = event.target.checked;
  };

  const isLength = (value) => value.length > 4;

  const [formInputsValidity, setFormInputsValidity] = useState({
    body: true,
  });

  const bodyInputRef = useRef();
  const checkBoxRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredBody = bodyInputRef.current.value;
    const enteredCheckBox = checkBoxRef.current;
    console.log(enteredCheckBox);

    const enteredBodyIsValid = isLength(enteredBody);

    setFormInputsValidity({
      body: enteredBodyIsValid,
    });

    const formIsValid = enteredBodyIsValid;

    if (!formIsValid) {
      return;
    }

    dispatch(
      ToDoActions.addTodo({
        id: Math.random(),
        todo: enteredBody,
        completed: isChecked,
      })
    );
    props.onClose();
  };

  const bodyValidityClasses = formInputsValidity.body ? '' : classes.invalid;

  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        <form>
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
          <span>Done: </span>
          <Checkbox
            ref={checkBoxRef}
            onChange={(event) => handleChange(event)}
          />
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

const ToDoDialog = (props) => {
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

export default ToDoDialog;
