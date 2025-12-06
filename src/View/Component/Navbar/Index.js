import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">WebTech Practice</div>
            <ul className="nav-links">

                <li><Link to="/about">About</Link></li>
                <li><Link to="/Services">Services</Link></li>
                <li><Link to="/Theme">Theme</Link></li>
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/Signup">Signup</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
