import React from 'react';
import { Link } from 'react-router-dom';
import "./Navigation.scss";

export const Navigation = () => {
  return (
    <div>
       <ul>
         <li><Link to ="/Home"></Link></li>
         <li><Link to ="/About"></Link></li>
       </ul>
     </div>
  )
}

export default Navigation