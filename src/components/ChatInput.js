import React, { useState } from 'react';
import './style/ChatInput.css';
import { Button } from '@material-ui/core';
import db from '../Firebase';
import firebase from 'firebase';
import { useStateValue } from '../StateProvider';

const ChatInput = ({channelName, channelId}) => {
    const [input, setInput] = useState('');
    const [{user}] = useStateValue();

    const sendMessage = (e) => { 
        e.preventDefault();
        if (channelId && input !== '') {
            db.collection('rooms').doc(channelId).collection('messages').add({
                message:input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user : user.displayName,
                userimg: user.photoURL,
            }).then(setInput(''))

        }
    }
    return (
        <div className="chatInput">
            <form autoComplete='off'>
                <input 
                    placeholder={`Message #${channelName?.toLowerCase()} `}
                    value={input}
                    id="messageField"
                    onChange={(e) => setInput(e.target.value)}
                />
                <Button type="submit" onClick={sendMessage}>SEND</Button>
            </form>
        </div>
    )
}

export default ChatInput;
