import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Users = () => {
  const getUsers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return res;
  };

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    // gcTime: 50000,
    // staleTime: 5000,
    // refetchOnMount: false,
    // refetchOnWindowFocus: false,
    // refetchInterval: 2000,
    enabled: false,
  });

  // if (isLoading) return <h4>Loading ...</h4>;
  // if (isError) return <h4>error:{error.message}</h4>;

  return (
    <div>
      <button onClick={refetch}>refetch</button>
      {data?.data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};

export default Users;
