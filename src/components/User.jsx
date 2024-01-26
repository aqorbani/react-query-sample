import { useParams } from "react-router-dom";
import { useUserDetails } from "../hooks/queries";

const User = () => {
  const { id } = useParams();

  const { data } = useUserDetails(id);

  console.log(data);
  return (
    <div>
      <p>{data?.data.name}</p>
    </div>
  );
};

export default User;
