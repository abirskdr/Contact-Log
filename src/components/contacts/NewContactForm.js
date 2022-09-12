import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewContactForm.module.css';

function NewContactForm(props) {
  const nameInputRef = useRef();
  const imageInputRef = useRef();
  const numberInputRef = useRef();
  const addressInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredNumber = numberInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;

    const contactData = {
      name: enteredName,
      image: enteredImage,
      number: enteredNumber,
      address: enteredAddress,
    };

    props.onAddContact(contactData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Name</label>
          <input type="text" required id="name" ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Person Image URL</label>
          <input type="url" id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="number">Number</label>
          <input type="number" required id="number" ref={numberInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            required
            rows="5"
            ref={addressInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Contact</button>
        </div>
      </form>
    </Card>
  );
}

export default NewContactForm;
