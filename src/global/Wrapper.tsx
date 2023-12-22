import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router } from "react-router-dom";

import { DateContextProvider } from "./dateContext";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <DateContextProvider>{children}</DateContextProvider>
      </QueryClientProvider>
    </Router>
  );
};

export default Wrapper;
