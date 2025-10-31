import React, { Component } from 'react';
import "./SecondCard.css";
import Bh from './HeadCardsc';
import Pc from './ParagCenter';
import Centerimg from './ImgCenter';
import Lur from '../assets/imgcard1.svg'
import Zirr from './Button';


const Seccards = () => {
    return ( 


        <>
        
       <div className='discos'>
        
        
        
        <div className=' cardy '>
           <img src={Lur} alt="" />
      

            <Bh stuff='Buying and making a home' />
            <Pc context='Buying a home can be an emotional process, but it&rsquo;s imporrtant to approach it logically ' />
            <button className='viewm'>View more</button>
        
   
        </div>
        
           
        <div className=' cardy '>
           <img src={Lur} alt="" />
      

            <Bh stuff='Buying and making a home' />
            <Pc context='Buying a home can be an emotional process, but it&rsquo;s imporrtant to approach it logically ' />
            <button className='viewm'>View more</button>
        
   
        </div>



           
        <div className=' cardy '>
           <img src={Lur} alt="" />
      

            <Bh stuff='Buying and making a home' />
            <Pc context='Buying a home can be an emotional process, but it&rsquo;s imporrtant to approach it logically ' />
            <button className='viewm'>View more</button>
        
   
        </div>
        
        
        
        
        
        </div> 
        
        <div className='position'>
          <Zirr name='View more' />  
        </div>
        
        </>
     );
}
 
export default Seccards;