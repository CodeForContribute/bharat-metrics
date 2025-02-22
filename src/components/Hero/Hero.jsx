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
            <p>We are a consulting company providing solution for all kind of industry challenges from hiring,
                training,software etc solutions.We offer expert advice and specialized services to businesses and
                organizations and
                provide guidance on a wide range of issues, from strategic planning and market analysis to operational
                efficiency and risk management.We are typically staffed by experienced professionals with deep industry
                knowledge and expertise and work closely with clients to understand their needs and develop tailored
                solutions that meet their specific objectives.We are a valuable resource for businesses of all sizes,
                helping them to navigate complex challenges, improve performance, and achieve their goals.</p>
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