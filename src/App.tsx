import { BrowserRouter } from "react-router-dom";
import RouteCustom from "./Route/Route";
import { initializeApp } from "firebase/app";
import { config } from "./config/config";
import { ToastContainer } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export const Firebase = initializeApp(config.firebaseConfig);

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

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
