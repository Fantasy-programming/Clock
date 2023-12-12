import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DateContextProvider } from "./dateContext";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <DateContextProvider>
        <div className="flex lg:overflow-hidden flex-col lg:flex-row h-full font-barlow-condensed">{children}</div>
      </DateContextProvider>
    </QueryClientProvider>
  );
};

export default Wrapper;
