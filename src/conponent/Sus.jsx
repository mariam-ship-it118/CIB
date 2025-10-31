import React, { Component } from 'react';
import "./Sus.css";
import Work1 from '../assets/Finance.svg';
import Work2 from '../assets/Finance2.svg';
import Work3 from '../assets/Finance3.svg';

const Susi = () => {
    return ( 
<>
<div className='deep'>

<div>
    <img src={Work1} alt=""  className='omg' />
    <p className='susp'>S&P/EGX EGP Index</p>
</div>

<div>
    <img src={Work2} alt="" className='omg' />
    <p className='susp'>Bloomberg Gender Equality Index</p>
</div>


<div>
    <img src={Work3} alt="" className='omg' />
    <p className='susp'>Bloomberg Gender Equality Index</p>
</div>


</div>

</>


     );
}
 
export default Susi;
