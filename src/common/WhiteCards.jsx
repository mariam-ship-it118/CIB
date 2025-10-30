import React, { Component } from 'react';
import "./WhiteCards.css";
import Refo from '../assets/wc1.svg';
import Refio from '../assets/wc2.svg';
import Refyo from '../assets/wc3.svg';

const Wcards = (props) => {
    return (  

        <>
        <div className='sort'>
        <div className='cardwhite'>
          <img src={Refo} alt="" />
         <p className='blueing'>Apply for a New Account</p>
        </div>

  <div className='cardwhite'>
          <img src={Refio} alt="" />
         <p className='blueing'>Apply for a card</p>
        </div>


  <div className='cardwhite'>
          <img src={Refyo} alt="" />
         <p className='blueing'>Apply for a card</p>
        </div>


        </div>

        </>
    );
}
 
export default Wcards;