import React from "react";
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
    return (
        <div id="services" className="services">
            <div className="services-title">
                <h1>Our Services</h1>
                <img src={theme_pattern} alt="theme_pattern"/>
            </div>
            <div className="services-container">
                <div className="services-format">
                    <h3>01</h3>
                    <h2>Recruitment & Training</h2>
                    <p>
                        <ul>
                            <li>End-to-end hiring solutions to find the right talent.</li>
                            <li>Corporate training programs to upskill employees.</li>
                            <li>Employee engagement and HR consulting for better retention.</li>
                        </ul>
                    </p>
                    <div className="services-readmore">
                        <p>Read More</p>
                        <img src={arrow_icon} alt="arrow"/>
                    </div>

                </div>
                <div className="services-format">
                    <h3>02</h3>
                    <h2>Digital Marketing Solutions</h2>
                    <p>
                        <ul>
                            <li>SEO & PPC strategies to enhance online visibility.</li>
                            <li>Social media marketing & branding.</li>
                            <li>Content marketing, email campaigns, and performance analytics.</li>
                        </ul>
                    </p>
                    <div className="services-readmore">
                        <p>Read More</p>
                        <img src={arrow_icon} alt="arrow"/>
                    </div>

                </div>
                <div className="services-format">
                    <h3>03</h3>
                    <h2>IT solutions</h2>
                    <p>
                        <ul>
                            <li>Custom software development for business automation.</li>
                            <li>Website & app development.</li>
                            <li>Cloud solutions, cybersecurity, and IT consulting.</li>
                        </ul>
                    </p>
                    <div className="services-readmore">
                        <p>Read More</p>
                        <img src={arrow_icon} alt="arrow"/>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Services;