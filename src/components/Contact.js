import React from 'react';
import PropTypes from 'prop-types';
import './Contact.css';

function Contact(props) {
    return (
        <div className="Contact">
            <img className="avatar" alt={props.name} src={props.avatar}></img>
            <div>
                <h4 className="name">{props.name}</h4>
                <p class="status">
                    <span className={props.online ? "status-online" : "status-offline"}></span>
                    <span className="status-text">{props.online ? "Online" : "Offline"}</span>
                </p>
            </div>
        </div>
    );
}

Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
};

export default Contact;