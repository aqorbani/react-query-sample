import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Users from "./components/Users";
import User from "./components/User";
import Form from "./components/Form";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
