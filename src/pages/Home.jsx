import React, { Component } from 'react';
import Navie from '../conponent/Navbar';
import Star from '../conponent/Navbar';
import Heading from '../conponent/Header';
import MenuTap from '../common/MainMenuTap';
import Smallt from '../common/SmallHead';
import Orange from '../common/BigHead';
import Wcards from '../common/WhiteCards';
import Parac from '../common/MiddleTitle';
import Seccards from '../common/SecondCard';
import Newsesh from '../common/Newssec';
import Scaler from '../conponent/Scale';
import Susi from '../conponent/Sus';
import QUA from '../conponent/Quality';
import Meet from '../conponent/Meeting';
import Foot from '../conponent/Footer';
const Home = () => {
    return ( 


        <>
        
  <Star />
<Heading />
<MenuTap />   
<Smallt shead='Apply Online' />
<Orange or='Apply online now for cards and loans with ease!' /> 
      <Wcards />
     <Orange or='Learning Center' /> 
     <Parac />

<Seccards />
<Orange or='New' />
     <Newsesh />
       <Scaler />
       <Smallt shead='SUSTAINALBLE FINANCE' />  
        <Orange or='Sustainable is an integral part of the way we work ' />
   <Susi />
  
<Smallt shead='AWARDS' />
<Orange or='CIB`s integrity and quality are recognized internationally' />

<QUA />

<Smallt shead='WE CARE' />
<Orange or='Our dedicated team is committed to meeting your needs' />

<Meet />

<Foot />



        </>
     );
}
 
export default Home ;