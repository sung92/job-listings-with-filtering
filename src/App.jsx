import JobFilterForm from "./features/jobs/JobFilterForm";
import { Provider } from "react-redux";
import store from "./utils/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <header className=" bg-primary-desaturateddarkcyan bg-headermobile desktop:bg-headerdesktop h-[156px]"></header>
        <main className="px-4 pb-8 flex justify-center">
          <JobFilterForm />
        </main>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
