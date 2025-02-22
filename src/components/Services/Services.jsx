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
                    <h2>Hiring</h2>
                    <p>
                        <ul>
                            <li>Targeted strategies, reaching specific demographics.</li>
                            <li> Data-driven insights, optimizing campaign performance.</li>
                            <li> Content creation, engaging and valuable information.</li>
                            <li> Social media engagement, building brand communities.</li>
                            <li> SEO and SEM, driving organic and paid traffic.</li>
                        </ul>
                    </p>
                    <div className="services-readmore">
                        <p>Read More</p>
                        <img src={arrow_icon} alt="arrow"/>
                    </div>

                </div>
                <div className="services-format">
                    <h3>02</h3>
                    <h2>Customised Solution</h2>
                    <p>
                        <ul>
                            <li>Targeted strategies, reaching specific demographics.</li>
                            <li> Data-driven insights, optimizing campaign performance.</li>
                            <li> Content creation, engaging and valuable information.</li>
                            <li> Social media engagement, building brand communities.</li>
                            <li> SEO and SEM, driving organic and paid traffic.</li>
                        </ul>
                    </p>
                    <div className="services-readmore">
                        <p>Read More</p>
                        <img src={arrow_icon} alt="arrow"/>
                    </div>

                </div>
                <div className="services-format">
                    <h3>03</h3>
                    <h2>Digital marketing</h2>
                    <p>
                        <ul>
                            <li>Targeted strategies, reaching specific demographics.</li>
                            <li> Data-driven insights, optimizing campaign performance.</li>
                            <li> Content creation, engaging and valuable information.</li>
                            <li> Social media engagement, building brand communities.</li>
                            <li> SEO and SEM, driving organic and paid traffic.</li>
                        </ul>
                    </p>
                    <div className="services-readmore">
                        <p>Read More</p>
                        <img src={arrow_icon} alt="arrow"/>
                    </div>

                </div>
                <div className="services-format">
                    <h3>04</h3>
                    <h2>Digital marketing</h2>
                    <p>
                        <ul>
                            <li>Targeted strategies, reaching specific demographics.</li>
                            <li> Data-driven insights, optimizing campaign performance.</li>
                            <li> Content creation, engaging and valuable information.</li>
                            <li> Social media engagement, building brand communities.</li>
                            <li> SEO and SEM, driving organic and paid traffic.</li>
                        </ul>
                    </p>
                    <div className="services-readmore">
                        <p>Read More</p>
                        <img src={arrow_icon} alt="arrow"/>
                    </div>

                </div>
                <div className="services-format">
                    <h3>05</h3>
                    <h2>Web design</h2>
                    <p>
                        <ul>
                            <li>Front-end: user experience, visual magic.</li>
                            <li> Back-end: server logic, data&#39;s foundation.</li>
                            <li> Full-stack: bridging both, seamless flow.</li>
                            <li> Languages: HTML, CSS, JavaScript, and beyond.</li>
                            <li>Constant evolution, endless possibilities.</li>
                        </ul>
                    </p>
                    <div className="services-readmore">
                        <p>Read More</p>
                        <img src={arrow_icon} alt="arrow"/>
                    </div>
                </div>
                <div className="services-format">
                    <h3>06</h3>
                    <h2>App design</h2>
                    <p>
                        <ul>
                            <li>User-centric design, intuitive interfaces.</li>
                            <li>Native or cross-platform, tailored to needs.</li>
                            <li>Coding logic, from simple to complex features.</li>
                            <li>Testing and debugging, ensuring smooth function.</li>
                            <li>Deployment and updates, reaching global users.</li>
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