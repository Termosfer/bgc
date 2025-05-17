import { BrowserRouter } from "react-router";
import "./App.css";
import PublicRoutes from "./Routes/PublicRoutes";
import Scrolltotop from "./Components/ScrollToTop/Scrolltotop";

function App() {
  return (
    <BrowserRouter>
    <Scrolltotop />
      <PublicRoutes />
    </BrowserRouter>
  );
}

export default App;
