import React, { Component } from 'react';
import "./ImgCenter.css";

const Centerimg = (props) => {
    return ( 
        <img src={props.imaget} alt="" className='radius' />
     );
}
 
export default Centerimg;