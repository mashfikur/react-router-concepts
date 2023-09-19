import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="text-center space-x-4 font-semibold my-6">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to={"/posts"}>Posts</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
