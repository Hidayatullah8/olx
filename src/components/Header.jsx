import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Logo from '../images/logo.png'
import '../StyleSheet/Header.css';
 const Header =() => {
     return (
         <div className="Header_container">
         <div className="Header_leftcontainer">
             <img src={Logo} alt="#" className="Header_leftcontainerLogo" />
        
         </div>
         <div className="Header_centercontainer">
         <SearchIcon className="Header_centerIcon" />
             <input type="text" placeholder="Pakistan" className="Header_centerPakistan" />
             <ExpandMoreIcon className="Header_centerIcon" />

         </div>

         <div className="Header_centercontainer">
             <input type="text" placeholder="Find Cars Mobile Phones and more..." className="Header_centerInputField" />
             <SearchIcon className="Header_centerIcon" />

         </div>



         <div className="Header_rightcontainer">
             <h4 className="Header_rightLinkText" > Login</h4>
             <button className="Header_rightButton" >SELL</button>

         </div>


         </div>
     )
 }
 export default Header
