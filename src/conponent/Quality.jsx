import React, { Component } from 'react';
import './Quality.css';
import Aqua from '../assets/Quality.svg';
import Aqua2 from '../assets/Quality2.svg';
import Aqua3 from '../assets/Quality3.svg';
import Zirr from '../common/Button';



const QUA = () => {
    return ( 
<>

 <div className='diplos'>


<div className='block'>
    <img src={Aqua} alt="" />
   <p className='bold'>Best Private Bank in Egypt</p>
   <p className='small'>Global Finance - 2023</p>

</div>



<div className='block'>
    <img src={Aqua2} alt="" />
   <p className='bold'>Best Mergers & Acquisitions Deals in MENA</p>
   <p className='small'>Global Finance - 2023</p>

</div>



<div className='block'>
    <img src={Aqua3} alt="" />
   <p className='bold'>Best Bank in Egypt</p>
   <p className='small'>Global Finance - 2023</p>

</div>


 </div>

<div className='welll'>
    <Zirr name='See all our awards' />
</div>
</>



     );
}
 
export default QUA;