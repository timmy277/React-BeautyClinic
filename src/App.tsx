import { BrowserRouter } from "react-router-dom";
import RouteCustom from "./Route/Route";
import { initializeApp } from "firebase/app";
import { config } from "./config/config";

export const Firebase = initializeApp(config.firebaseConfig);

function App() {
  return (
    <>
      <BrowserRouter>
        <RouteCustom />
      </BrowserRouter>
    </>
  );
}

export default App;
