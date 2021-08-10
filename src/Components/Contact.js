import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';
import './ContactList'

function Contact(props) {
    return (
        <div className="Contact">
            <img className="avatar" src={props.avatar} alt="avatar" />
            <div className="status">
            <p className="name">{props.name}</p>
                <div className={props.statusOnline ?"status-online" :"status-offline" }></div>
                <p className="status-text">{props.online ? 'Online' : 'Offline'}</p>
            </div>
        </div>
    )

}

Contact.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  statusOnline: PropTypes.bool,
  online: PropTypes.bool,
};

export default Contact;