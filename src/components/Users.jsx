import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const Users = () => {
  const getUsers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return res;
  };

  const { data, isLoading, isError, error, isSuccess, isFetching, refetch } =
    useQuery({
      queryKey: ["users"],
      queryFn: getUsers,
      // gcTime: 50000,
      // staleTime: 5000,
      // refetchOnMount: false,
      // refetchOnWindowFocus: false,
      // refetchInterval: 2000,
      // enabled: false,
      onSuccess: () => alert("ok"),
    });

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
