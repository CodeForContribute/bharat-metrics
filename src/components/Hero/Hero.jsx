import React from 'react';
import './Hero.css';
import AnchorLink from "react-anchor-link-smooth-scroll/lib/anchor-link.js";
import bharat_metrics from '../../assets/bharatmetrics.png';

const Hero = () => {
    return (
        <div id="home" className="hero">
            <img width="200"
                 src={bharat_metrics}
                 height="200" alt="BharatMetrics"
                 className="profile_image"/>
            <h1><span>One stop Solution for all your problems.</span></h1>
            <p>We are dynamic consulting firm specializing in recruitment & training,
                digital marketing, and IT solutions. Our mission is to empower businesses with expert guidance,
                innovative strategies, and tailored solutions that drive growth and efficiency.
                With a team of seasoned professionals, we bridge the gap between challenges and success,
                helping businesses stay ahead in a competitive landscape.
            </p>
            <div className="hero-action">
                <AnchorLink className="anchor-link" offset={50} href="#contact">
                    <div className="hero-connect">
                        Connect Us
                    </div>
                </AnchorLink>
            </div>
        </div>
    )
}

export default Hero;