import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
        <h4>Kaylene Ellinger Logo</h4>
        {/* <!-- sticky nav or hidden menu bar --> */}
        <nav>
            <ul>
                <li><Link to="./Home">Home</Link></li>
                <li><Link to="projects.html">Projects</Link></li>
                <li><Link to="resume.html">Resume</Link></li>
                <li><Link to="about.html">About</Link></li>
                <li><Link to="contact.html">Contact</Link></li>
            </ul>
        </nav>
    </header>
    )
}