import React from 'react';
import './Contact.css';


function Contact() {
    return (
        <div className="Contact">
            <img className="avatar" src="https://randomuser.me/api/portraits/men/49.jpg" alt="avatar" />
            <div className="status">
            <p className="name">Jared</p>
                <div className="status-online"></div>
                <p className="status-text">Online</p>
            </div>
        </div>
    )

}

export default Contact;