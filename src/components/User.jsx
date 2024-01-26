import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();

  const getUserDetails = async ({ queryKey }) => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${queryKey[1]}`
    );
    return res;
  };

  const { data } = useQuery({
    queryKey: ["users", id],
    queryFn: getUserDetails,
  });

  console.log(data);
  return (
    <div>
      <p>{data?.data.name}</p>
    </div>
  );
};

export default User;
