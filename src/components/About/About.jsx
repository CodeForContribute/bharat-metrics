import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg'

const About = () => {
    return (
        <div id="about" className="about">

            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="theme_pattern"/>
            </div>

            <div className="about-sections">

                <div className="about-left">
                    <img width="200"
                         src="https://media.licdn.com/dms/image/v2/D5603AQHkHSuWL2C_Lw/profile-displayphoto-shrink_200_200/B56ZUr24gAGQAY-/0/1740197564716?e=1745452800&v=beta&t=c4kaifltlvKGyB8Lw2226EA3vmMEYfYaTHTfZ4NV0dI"
                         height="200" alt="Raushan Singh"
                         className="profile_image"/>
                    {/*<img src={profile_image} alt="profile_image"/>*/}
                </div>

                <div className="about-right">
                    <div className="about-para">
                        <p>I am an experienced Software Developer with over 6+ yrs of professional expertise in the
                            field.
                            Throughout my career, I have had the privilege of collaborating with prestigious
                            organizations, contributing to their success and growth.</p>
                        <p>My passion for software development is not only reflected in my extensive experience but also
                            in the enthusiasm and dedication I bring to each project.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>PYTHON</p>
                            <hr style={{width: '90%'}}/>
                        </div>
                        <div className="about-skill"><p>JAVA</p>
                            <hr style={{width: '80%'}}/>
                        </div>
                        <div className="about-skill"><p>REACT JS</p>
                            <hr style={{width: '70%'}}/>
                        </div>
                        <div className="about-skill"><p>JAVASCRIPT</p>
                            <hr style={{width: '60%'}}/>
                        </div>
                        <div className="about-skill"><p>HTML & CSS</p>
                            <hr style={{width: '50%'}}/>
                        </div>
                    </div>
                </div>

            </div>

            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>6+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
                <hr/>
            </div>
        </div>
    )
}

export default About