import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Home = () => {
  const getUsers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return res;
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  if (isLoading) return <h4>Loading ...</h4>;
  if (isError) return <h4>error:{error.message}</h4>;

  return (
    <div>
      {data.data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};

export default Home;
