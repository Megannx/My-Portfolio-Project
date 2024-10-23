import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="navbar">
            <Link to="/" className="navbar-logo">
                My Portfolio
            </Link>
            <nav className="navbar-links">
                <Link to="/about">About Me</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/resume">Resume</Link>
            </nav>
        </header>
    );
};

export default Header;
