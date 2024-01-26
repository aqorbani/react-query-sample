import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useUsersData = () => {
  const getUsers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return res;
  };
  return useQuery({
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
};

const useUserDetails = (id) => {
  const getUserDetails = async ({ queryKey }) => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${queryKey[1]}`
    );
    return res;
  };
  return useQuery({
    queryKey: ["users", id],
    queryFn: getUserDetails,
  });
};

export { useUsersData, useUserDetails };
