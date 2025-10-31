import React, { Component } from 'react';
import "./Footer.css";
import Ftlink from '../common/FooterLinks';
import Logooo from '../assets/logo.svg';
import Google from '../assets/googleplay.svg';
import Apple from '../assets/appstore.svg';

const Foot = () => {
    return ( 


        <>



        <div className='yal'>


<div className='savour'>

            <img src={Logooo} alt="" className='mrgnl' />
<div className='dex'>

        <Ftlink footy='FAQs' />
        <Ftlink footy='Learning Center' />
                <Ftlink footy='Fees & Charges' />
        <Ftlink footy='Terms & Conditions' />
</div>
       
       <div className='dex'>

        <Ftlink footy='Local' />
        <Ftlink footy='Abroad' />
                <Ftlink footy='Business' />
        <Ftlink footy='Corporate' />
</div>
       
          
       <div className='dex'>

        <Ftlink footy='Careers' />
        <Ftlink footy='Why CIB' />
                <Ftlink footy='Email us' />
        <Ftlink footy='System status' />
</div>
<div className='loopa'>
       <img src={Apple} alt="" />
<img src={Google} alt="" className='mr' />
</div>
      
       
  </div>
       
        </div>

        
        </>
     );
}
 
export default Foot;