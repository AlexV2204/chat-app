import React from 'react';
import './Contact.css';

function Contact(person) {
    return (
        <div className="Contact">
            <img className="avatar" src={person.avatar}></img>
            <div>
                <h4 className="name">{person.name}</h4>
                <p class="status">
                    <span className={person.online ? "status-online" : "status-offline"}></span>
                    <span className="status-text">{person.online ? "Online" : "Offline"}</span>
                </p>
            </div>
        </div>
    );
}

export default Contact;