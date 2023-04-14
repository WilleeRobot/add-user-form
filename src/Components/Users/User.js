import styles from "./User.module.css";

const User = ({ name, age }) => {
  return (
    <div className={styles.container}>
      <p className={styles.name}>{name}</p>
      <p className={styles.age}>({age} years old)</p>
    </div>
  );
};

export default User;
