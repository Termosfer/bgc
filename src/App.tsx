import { BrowserRouter } from "react-router";
import "./App.css";
import PublicRoutes from "./Routes/PublicRoutes";
import Scrolltotop from "./Components/ScrollToTop/Scrolltotop";
import "aos/dist/aos.css";
import AOS from "aos";
function App() {
  AOS.init({
    once: true,
    duration: 1000,
  });
  return (
    <BrowserRouter>
      <Scrolltotop />
      <PublicRoutes />
    </BrowserRouter>
  );
}

export default App;
