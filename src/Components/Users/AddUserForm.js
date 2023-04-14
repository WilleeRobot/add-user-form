import styles from "./AddUserForm.module.css";
import Button from "../UI/Button";
import { useState, useRef } from "react";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const AddUserForm = ({ handleNewUser }) => {
  // ***** USING USEREF *****
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // ***** STATE HOOKS *****
  const [error, setError] = useState();

  // ***** HANDLER FUNCTIONS *****
  const errorOKButtonHandler = () => {
    setError(null);
  };
  const submitFormHandler = (event) => {
    event.preventDefault();
    const enteredUserName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    // **** HANDLE ERRORS *****
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: "The username or age is empty.",
        message:
          "Please ensure all fields are filled out before submitting the form.",
      });
      return;
    }
    if (+enteredUserAge < 0) {
      setError({
        title: "Age cannot be negative.",
        message: "You cannot enter a negative age. Please try again.",
      });
      return;
    }

    const newUserData = {
      id: Math.random().toString(),
      name: enteredUserName,
      age: enteredUserAge,
    };
    handleNewUser(newUserData);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };
  return (
    <>
      {error && (
        <ErrorModal
          errorTitle={error.title}
          errorMessage={error.message}
          buttonHandler={errorOKButtonHandler}
        />
      )}
      <Card className={styles.formCardStyle}>
        <div className={styles.container}>
          <form onSubmit={submitFormHandler}>
            <div className={styles["form-controls"]}>
              <label>Username:</label>
              <input type="text" ref={nameInputRef}></input>
            </div>
            <div className={styles["form-controls"]}>
              <label>Age (in years):</label>
              <input
                type="number"
                min="0"
                max="120"
                step="1"
                ref={ageInputRef}
              ></input>
            </div>
          </form>
          <div className={styles["button-wrapper"]}>
            <Button type="submit" onClickFunction={submitFormHandler}>
              Add User
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
};

export default AddUserForm;
