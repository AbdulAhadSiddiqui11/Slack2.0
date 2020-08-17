import React from 'react';
import './style/SidebarOption.css';

const SidebarOption = ({ Icon, title }) => {
    return (
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOption__icon" />} { /*if the icon is passed then only render it! */ }
            {Icon ? ( <h3>{ title }</h3> ) : (<h3 className="sidebarOption__channel"> <span className="sidebarOption__hash"> # </span> { title } </h3>)}
        </div>
    )
}

export default SidebarOption;
