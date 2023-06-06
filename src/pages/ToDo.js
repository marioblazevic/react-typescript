import { useState } from 'react';
import ToDoList from '../components/ToDo/ToDoList';
import ToDoDialog from '../UI/ToDoDialog';

const ToDoPage = (props) => {
  const [dialogIsShown, setDialogIsShown] = useState(false);
  const openDialogHandler = () => {
    setDialogIsShown(true);
  };
  const closeDialogHandler = () => {
    setDialogIsShown(false);
  };

  return (
    <>
      {dialogIsShown && <ToDoDialog onClose={closeDialogHandler} />}
      <ToDoList onOpenDialog={openDialogHandler} />
    </>
  );
};

export default ToDoPage;
