import * as React from 'react';
import Button from '@mui/material/Button';
import classes from './DialogButton.module.css';

const DialogButton = (props) => {
  return (
    <div className={classes.dialogButton}>
      <Button variant="outlined" onClick={props.onOpen}>
        {props.children}
      </Button>
    </div>
  );
};

export default DialogButton;
