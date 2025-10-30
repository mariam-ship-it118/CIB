import React, { Component } from 'react';
import './Header.css';
import Landing from "../assets/landingpic.svg"
import Zirr from '../common/Button';


const Heading = () => {
    return ( 
<>


  <img src={Landing} alt="" />

 <div className='ml'>

<h1 className='cib'>CIB</h1>
<p className='subhead'>Delivering value to our clients, our <br/>
community and our shareholders</p>
<Zirr name='Discover more' className='btn1' />
 </div>
</>

     );
}
 
export default Heading;