import GlobalContextProvider from "./Context/GlobalContextProvider";
import Navigation from "./navigation";

export default function App() {

  // RETURN
  return (
    <GlobalContextProvider>
      <Navigation />
    </GlobalContextProvider>
  );
}
