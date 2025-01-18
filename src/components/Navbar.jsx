import { Link } from "react-router-dom"
import '../assets/css/Navbar.css'

function Navbar () {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Movies</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <br />
                <Link to="/favorite" className="nav-link">Favorites</Link>
            </div>
        </nav>
    )
}
export default Navbar