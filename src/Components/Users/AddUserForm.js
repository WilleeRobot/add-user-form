import styles from "./AddUserForm.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const AddUserForm = ({ handleNewUser }) => {
  // ***** STATE HOOKS *****
  const [enteredUsername, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  // ***** HANDLER FUNCTIONS *****
  const nameInputHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const ageInputHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorOKButtonHandler = () => {
    setError(null);
  };
  const submitFormHandler = (event) => {
    event.preventDefault();

    // **** HANDLE ERRORS *****
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "The username or age is empty.",
        message:
          "Please ensure all fields are filled out before submitting the form.",
      });
      return;
    }
    if (+enteredAge < 0) {
      setError({
        title: "Age cannot be negative.",
        message: "You cannot enter a negative age. Please try again.",
      });
      return;
    }

    const newUserData = {
      id: Math.random().toString(),
      name: enteredUsername,
      age: enteredAge,
    };
    handleNewUser(newUserData);
    setEnteredAge("");
    setEnteredUserName("");
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
              <input
                type="text"
                onChange={nameInputHandler}
                value={enteredUsername}
              ></input>
            </div>
            <div className={styles["form-controls"]}>
              <label>Age (in years):</label>
              <input
                type="number"
                min="0"
                max="120"
                step="1"
                onChange={ageInputHandler}
                value={enteredAge}
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
