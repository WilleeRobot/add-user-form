import Card from "../UI/Card";
import User from "./User";
import styles from "./UsersList.module.css";

const UsersList = ({ userListData }) => {
  return (
    <Card className={styles.formCardStyle}>
      <div className={styles.container}>
        {userListData.map((user) => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </div>
    </Card>
  );
};

export default UsersList;
