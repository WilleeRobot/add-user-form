import styles from "./Button.module.css";

const Button = ({ label, onClickFunction, buttonType, children }) => {
  return (
    <button
      onClick={onClickFunction}
      type={buttonType || "button"}
      className={styles.button}
    >
      {children}
    </button>
  );
};

export default Button;
