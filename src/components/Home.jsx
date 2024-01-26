import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const getUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
  };
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  console.log({ data, isLoading });
  return <div>Home</div>;
};

export default Home;
