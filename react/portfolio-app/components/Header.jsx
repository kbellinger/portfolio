import React from "react";

export default function Header() {
    return (
        <header>
        <h4>Kaylene Ellinger Logo</h4>
        {/* <!-- sticky nav or hidden menu bar --> */}
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="projects.html">Projects</a></li>
                <li><a href="resume.html">Resume</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>
    )
}