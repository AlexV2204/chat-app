import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Contact.css';

const Status = ({ online }) => {

    const [isOnline, setIsOnline] = useState(online)

    return (
        <p class="status" onClick={() => { setIsOnline(!isOnline) }}>
            <span className={isOnline ? "status-online" : "status-offline"}></span>
            <span className="status-text">{isOnline ? "Online" : "Offline"}</span>
        </p>
    )
}

function Contact({ name, avatar, online }) {
    return (
        <div className="Contact">
            <img className="avatar" alt={name} src={avatar}></img>
            <div>
                <h4 className="name">{name}</h4>
                <Status online={online} />
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