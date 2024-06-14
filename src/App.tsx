import { BrowserRouter } from "react-router-dom";
import RouteCustom from "./Route/Route";
import { initializeApp } from "firebase/app";
import { config } from "./config/config";
import { ToastContainer } from "react-toastify";

export const Firebase = initializeApp(config.firebaseConfig);

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <RouteCustom />
      </BrowserRouter>
    </>
  );
}

export default App;
