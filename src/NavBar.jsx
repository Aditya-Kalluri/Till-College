import { Link } from "react-router-dom";
import "./NavBar.css"

export default function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-center">
                <ul className="nav-links">
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}