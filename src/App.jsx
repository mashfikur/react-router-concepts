import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="text-center container mx-auto">
      <Navbar></Navbar>
      <h1 className="text-3xl text-center mb-6">This is the Permanent Header</h1>
      <Outlet></Outlet>

      <h3 className="text-center text-2xl my-10">this is the footer of this website</h3>
    </div>
  );
}

export default App;
