import { useState, useTransition } from "react";
import "./styles.css";
import Loading from "../Loading";

export default function UserSearchPanel({ users }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState(users);

  const [isPending, startTransition] = useTransition();

  const handleChange = ({ target: { value } }) => {
    setSearchTerm(value);

    startTransition(() => {
      setFiltered(
        users.filter((item) =>
          item.name.toLowerCase().includes(value.toLowerCase())
        )
      );
    });
  };

  return (
    <>
      <div>
        {isPending ? (
          <Loading loadingStyle="top"></Loading>
        ) : (
          <p>
            {users.length !== filtered.length
              ? `${filtered.length} matches`
              : null}
          </p>
        )}
      </div>

      <input onChange={handleChange} value={searchTerm} type="text" />

      {isPending ? (
        <Loading loadingStyle="center"></Loading>
      ) : (
        <div className="cards">
          {filtered.map((user) => (
            <div className="card" key={user.id}>
              <div className="profile">
                <img src={user.avatar} alt={`Avatar image of ${user.name}`} />
              </div>
              <div className="body">
                <strong>{user.name}</strong>
                <hr />
                <p>{user.email}</p>
                <p>{user.job}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
