import React, { Component } from 'react';
import "./Navbar.css";
import Logo from '../assets/logo.svg';
import Navie from './Nav';


const Star = (props) => {
    return ( 

        <>
       

             <div className='niva'>
       
        <img src={Logo} alt="" />
        
        <Navie title="About" />
        <Navie title=" Investor Relations " />
        <Navie title="Responsible Banking" />
        <Navie title="Newsroom" />
        <Navie title="Learning Center" />
        <Navie title="Careers" />
        <Navie title="Others" />
       
        </div>
        
        </>
     );
}
 
export default Star;