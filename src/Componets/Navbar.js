import { useState } from "react";
import './Navbar.css';


    function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

        return (
            <nav>
            <div className="nav-logo">
                VAP<span>.</span>
            </div>

            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                <li><a href="#services">Services</a></li>
                <li><a href="#process">How it works</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#testimonials">Reviews</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <a href="#contact" className="nav-cta">Get Started</a>

            {/* Mobile Menu Button */}
            <div 
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </div>
            </nav>
        );
    }

export default Navbar;