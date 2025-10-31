import React, { Component } from 'react';
import "./Meeting.css"
import Ting from '../assets/Meeting.svg';
import Ting2 from '../assets/Meeting2.svg';
import Ting3 from '../assets/Meeting3.svg';


const Meet = () => {
    return ( 

        <>
        
        <div className='stone'>

<div className='two'>

  <img src={Ting} alt="" />
<div className='blockaa'>
    <p className='bolblue'>Online</p>
    <p className='justtext'>Chat with `Zaki` our digital assistant to guide you through our products and services, or reach out on social media.</p>
</div>

</div>
{/* card 2 */}

<div className='two olaf'>

  <img src={Ting2} alt="" />
<div className='blockaa'>
    <p className='bolblue'>On the phone</p>
    <p className='justtext'>Chat with `Zaki` our digital assistant to guide you through our products and services, or reach out on social media.</p>
</div>

</div>

{/* cards 3 */}
<div className='two olaf'>

  <img src={Ting3} alt="" />
<div className='blockaa'>
    <p className='bolblue'>In branch</p>
    <p className='justtext'>Chat with `Zaki` our digital assistant to guide you through our products and services, or reach out on social media.</p>
</div>

</div>



        </div>
        
        
        
        
        </>
     );
}
 
export default Meet;