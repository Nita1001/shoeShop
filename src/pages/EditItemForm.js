import { Link } from 'react-router-dom';
import classes from './EditItemForm.module.css'

const EditItemForm = () => {

  return (
    <>
      <div className={classes.container}> Edit
        <Link to='/editItemForm/addItemForm'>AddItem</Link>
        <Link to='/editItemForm/removeItemForm'>RemoveItem</Link>
      </div>
    </>
  );
};

export default EditItemForm;