import AppRoutes from "./AppRoutes";
import Header from "./Components/Header/header";
import Loading from "./Components/Loading/Loading";

function App() {
  return (
    <>
    <Loading />
      <Header />
      <AppRoutes/>
    </>
  );
}

export default App;
