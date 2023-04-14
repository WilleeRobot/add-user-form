import ReactDOM from "react-dom";

import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

const Backdrop = ({ onClick }) => {
  return <div className={styles.backdrop} onClick={onClick} />;
};

const ModalOverlay = ({ errorTitle, errorMessage, buttonHandler }) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{errorTitle}</h2>
      </header>
      <div className={styles.content}>
        <p>{errorMessage}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClickFunction={buttonHandler}>OK</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = ({ errorTitle, errorMessage, buttonHandler }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={buttonHandler} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          errorTitle={errorTitle}
          errorMessage={errorMessage}
          buttonHandler={buttonHandler}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
