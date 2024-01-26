import { Link } from "react-router-dom";
import { useUsersData } from "../hooks/queries";

const Users = () => {
  const { data, isLoading, isError, error, isSuccess, isFetching, refetch } =
    useUsersData();

  if (isLoading && isFetching) return <h4>Loading ...</h4>;
  if (isError) return <h4>error:{error.message}</h4>;

  return (
    <div>
      <button onClick={refetch}>refetch</button>
      {isSuccess &&
        data?.data.map((item) => (
          <Link to={`/users/${item.id}`} key={item.id}>
            <p>{item.name}</p>
          </Link>
        ))}
    </div>
  );
};

export default Users;
