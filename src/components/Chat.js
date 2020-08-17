import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './style/Chat.css';
import Message from './Message';
import ChatInput from './ChatInput';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from '../Firebase';

const Chat = () => {
    const { roomId } = useParams();
    /*
        useState, useEffect (used in sidebar.js) 
        useHistory (used in sidebarOption) and UseParams
        are React Hooks and they can only be used with 
        Functional Components and not with classComponents!!!
        Learn more @ usehooks.com
        UseParams gets the roomId var from route provided in the App.js file!
    */
    const [roomDetails, setroomDetails] = useState(null);
    const [roomMessages, setRoomMessages] = useState([]);

    useEffect(() => {
        if(roomId){
            db.collection('rooms')
                .doc(roomId)
                    .onSnapshot((snapshot) => {
                        setroomDetails(snapshot.data());
                });
        }

        db.collection('rooms').doc(roomId)
            .collection('messages').orderBy('timestamp','asc')
                .onSnapshot((snapshot) => {
                    setRoomMessages(snapshot.docs.map(doc => doc.data()))
                }
                );
    },[roomId]);

    //console.log(roomMessages);

    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                       <strong>#{roomDetails?.name}</strong> 
                       <StarBorderOutlinedIcon />
                    </h4>
                </div>
                <div className="chat__headerRight">
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </div>
            </div>
            <div className="chat__messages">
                {roomMessages.map((message, index) => {
                    return <Message 
                        key = {index}
                        message={message.message}
                        timestamp={message.timestamp}
                        user = {message.user}
                        userImg = {message.userimg}
                        messageId = {message.Id}
                    />
                })}
            </div>

            <ChatInput channelName={roomDetails?.name} channelId={roomId} />
        </div>
    )
}

export default Chat;
