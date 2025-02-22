import React, {useState} from 'react';
import './NavBar.css';
import underline from '../../assets/nav_underline.svg';
import menu_close from '../../assets/menu_close.svg';

import AnchorLink from "react-anchor-link-smooth-scroll/lib/anchor-link.js";

const Navbar = () => {
    const [menu, setMenu] = useState("home");

    return (
        <div className='navbar'>
            <h1>BharatMetrics</h1>
            <ul className="nav-menu">
                <li><AnchorLink className="anchor-link" offset={50} href="#home"><p
                    onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu === "home" ?
                    <img src={underline} alt=""/> : <></>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#our-team"><p
                    onClick={() => setMenu("team")}>Meet Our Team</p></AnchorLink>{menu === "team" ?
                    <img src={underline} alt=""/> : <></>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#services"><p
                    onClick={() => setMenu("services")}>Services </p></AnchorLink>{menu === "services" ?
                    <img src={underline} alt=""/> : <></>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p
                    onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ?
                    <img src={underline} alt=""/> : <></>}</li>
            </ul>
            <div className="nav-connect">
                <AnchorLink className="anchor-link" offset={50} href="#contact">Connect Us</AnchorLink>
            </div>
        </div>
    );
}

export default Navbar;