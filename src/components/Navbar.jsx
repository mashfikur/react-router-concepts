import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="text-center space-x-4 font-semibold my-6">
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/contact"}>Contact</Link>
                <Link to={"/users"}>Users</Link>
                <Link to={"/posts"}>Posts</Link>
            </div>
        </div>
    );
};

export default Navbar;