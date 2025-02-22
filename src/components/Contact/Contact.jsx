import React from "react";
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "c785a031-15af-47f8-a1fa-8adfc9e9bb01");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            alert(res.message);
        } else {
            console.log("Error", res.message);
            alert(res.message);
        }
    };

    return (
        <div id='contact' className="contact">

            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="theme pattern"/>
            </div>

            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let&#39;s talk</h1>
                    <p>Please Contact Us for any queries.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="mail icon"/>
                            <p>bharatmetrics@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="call icon"/>
                            <p>+91 8810251093</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="location icon"/>
                            <p>Patna,Bihar,India,843302</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={onSubmit} className='contact-right'>
                    <label htmlFor="contactName">Your Name</label>
                    <input type="text" placeholder="Enter your name" name="name"/>

                    <label htmlFor="">Your email</label>
                    <input type="email" placeholder="Enter your email" name="email"/>

                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder="Enter your message"></textarea>

                    <button className="contact-submit" type="submit">Submit now</button>
                </form>
            </div>

        </div>
    )
}

export default Contact;