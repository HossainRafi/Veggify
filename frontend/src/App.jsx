import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Header />

      <Outlet />
    </div>
  );
}

export default App;
