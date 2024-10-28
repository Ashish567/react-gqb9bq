import React, { useEffect } from "react";
import './index.css'

export default function Navbar() {
    useEffect(() => {
        function resizing(e) {
            console.log(e.target.screen.width)
        }
     window.addEventListener('resize', resizing)
     return () => window.removeEventListener('resize', resizing)
    },[])
    return <>
    <p>NavBar</p>
    <div className="nav">
        <div className="nav-logo">
           <div>Logo</div>
        </div>
        <div className="nav-menu-block">
           <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Services</li>
            <li>Our Work</li>
           </ul>
        </div>
    </div>
    </>
}