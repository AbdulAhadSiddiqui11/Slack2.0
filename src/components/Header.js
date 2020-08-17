import React from 'react';
import './style/Header.css';
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const Header = () => {
    return (
        <div className="header">
           <div className="header__left">

               {/* Avatars for logged in users! user?.photoURL {user?.displayName}*/ }
               <Avatar
               className="header__avatar"
               alt="Abdul Ahad"
               src=""
                />

                {/*Time Icon*/}
                <AccessTimeIcon />

           </div>
           <div className="header__search">
               {/* Search Icon */}
               <SearchIcon />

               {/* Input */}
               <input type="text" placeholder="Search Slack" />
           </div>
           <div className="header__right">
               {/* Help Icon*/}
               <HelpOutlineIcon />
           </div>
        </div>
    )
}

export default Header
