import "./styles.css";
import { users } from "../../api/getUsers";
import UserSearchPanel from "../../components/UserSearchPanel";

export default function Home() {
  return (
    <>
      <h1> User find Api - React useTransition </h1>
      <div className="container">
        <UserSearchPanel users={users}></UserSearchPanel>
      </div>
    </>
  );
}
