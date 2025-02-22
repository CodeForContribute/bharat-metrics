import React from "react";
import './OurTeam.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import arrow_icon from '../../assets/arrow_icon.svg';
import profile_image from '../../assets/about_profile.svg';

const OurTeam = () => {
    return (
        <div id="our-team" className="our-team">

            <div className="our-team-title">
                <h1>Our Team</h1>
                <img src={theme_pattern} alt="theme pattern"/>
            </div>

            <div className="our-team-container">
                <div className="our-team-format">
                    <img className='team-profile_image'
                        src={profile_image}
                         alt="profile image"/>
                    <h5>Avinash Singh <br/>Founder,CEO</h5>
                    <p>
                        He is alumni of CIMP, Patna,Bihar.Goal-driven management professional with expertise in dealer management,
                        sales strategy, and market analysis. Currently leading sales initiatives and operational
                        improvements at Parle Biscuits Ltd. Skilled in optimizing market reach,
                        strengthening dealer relationships, and executing branding strategies.
                        Adept at leveraging data to drive growth and meet business objectives.
                    </p>
                    <div className="our-team-knowmore">
                        <p>Know More</p>
                        <a href="https://www.linkedin.com/in/avinash-singh-a00304239/?lipi=urn%3Ali%3Apage%3Acompanies_company_index%3B367cb019-bffb-4c60-b89f-2c0181dce13d">
                            <img src={arrow_icon} alt="arrow"/></a>
                    </div>
                </div>
                <div className="our-team-format">
                    <img className='team-profile_image' src={profile_image} alt="profile image"/>
                    <h5>Vipul Kumar<br/>Co-Founder</h5>
                    <p>
                        He is alumni of CIMP, Patna,Bihar.Goal-driven management professional with expertise in dealer management,
                        sales strategy, and market analysis. Currently leading sales initiatives and operational
                        improvements at XXXX. Skilled in optimizing market reach,
                        strengthening dealer relationships, and executing branding strategies.
                        Adept at leveraging data to drive growth and meet business objectives.
                    </p>
                    <div className="our-team-knowmore">
                        <p>Know More</p>
                        <a href="https://www.linkedin.com/in/shubham-shourav/">
                            <img src={arrow_icon} alt="arrow"/></a>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default OurTeam;