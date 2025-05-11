import { BrowserRouter } from "react-router";
import "./App.css";
import PublicRoutes from "./Routes/PublicRoutes";

function App() {
  return (
    <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  );
}

export default App;
