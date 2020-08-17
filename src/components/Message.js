import React from 'react';
import './style/Message.css';

const Message = ({message, timestamp, user, userImg, messageId}) => {
    return (
        <div className="message" key={messageId}>
            <img src={userImg} alt=""/>
            <div className="message__info">
                <h4>
                    {user}  
                    <span className="message__timestamp">
                        {new Date(timestamp?.toDate())?.toUTCString()}
                    </span>
                </h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Message;
