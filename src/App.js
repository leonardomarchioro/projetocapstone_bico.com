import Routes from "./routes";
import { GlobalStyle } from "./styles/global";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
