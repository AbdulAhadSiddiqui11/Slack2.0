import React from 'react';
import {useHistory} from 'react-router-dom';
import './style/SidebarOption.css';
import db from '../Firebase';

const SidebarOption = ({ Icon, title, id, addChannelOption, channels }) => {
    const history = useHistory();

    const selectChannel = () => {
        if(id) {
            history.push(`/room/${id}`);
        } else {
            history.push(title);
        }
    };

    const addChannel = () => {
        const channelName = prompt('Please enter the channel name').toLowerCase();
        let alreadyExists = false;
        if (channelName) {
            channels.forEach(channel => {
                if (channel.name === channelName) {
                    alreadyExists = true;
                }
            });
            if(alreadyExists) {
                alert('Channel already exists!');
            } else {
                db.collection('rooms').add({name: channelName});
            }
        }
    };

    return (
        <div className="sidebarOption" onClick={addChannelOption ? addChannel : selectChannel}>
            {Icon && <Icon className="sidebarOption__icon" />} { /*if the icon is passed then only render it! */ }
            {Icon ? ( <h3>{ title }</h3> ) : (<h3 className="sidebarOption__channel"> <span className="sidebarOption__hash"> # </span> { title } </h3>)}
        </div>
    )
}

export default SidebarOption;
