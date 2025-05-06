'use client';
import React, { useState } from 'react';
import style from '../style/header.module.css'
import Secondheader from './Secondheader';
import {
  SignedOut,
  SignedIn,
  SignInButton,
  UserButton
} from '@clerk/nextjs';


function Header() {
  const  [ Allselctor ,setAllSlector] = useState(false)

  const handleslector =()=>{
    setAllSlector(!Allselctor)
  }
  
  return (
  <>
  <div className={style.topHead}>
    <div className={style.logo}>
      <div className={style.image}>
        <img src="/amazonLogo.png" id={style.img_logo}/>
      </div>
      <div className={style.div_p}>
        <p className={style.in}>.in</p>
      </div>
    </div>

    <div className={style.header_address}>
      <div className={style.location_svg}>
        <img src="locationLogo.png" id={style.location_img} />
      </div>
      <div className={style.addressLocation}>
        <p className={style.Delivering}>Delivering to Gurugram 122001</p>
        <p className={style.updateAddress}>Update Location</p>
      </div>
    </div>

    <div className={style.input_slector}>
    <div className={style.slector_option}>

    <div className={style.caret_all} onClick={handleslector}>
    <p className={style.All}>All</p>
    <i className="fa-solid fa-caret-down" id={style.caret_down}></i>
    </div>
   {
    Allselctor && (
      <div className={`${style.slector}`}>
      <ul className={style.slector_ul}>
        <li>Alexa Skills</li>
        <li>Amazon Fashions</li>
        <li>Amazon Fresh</li>
        <li>Amazon Pharmacy</li>
        <li>Appliances</li>
        <li>Apps & Games</li>
        <li>Baby</li>
        <li>Beautys</li>
        <li>Books</li>
        <li>Car & Motorbike</li>
        <li>Clothing & Accessories</li>
        <li>Computers & Accessories</li>
      </ul>
    </div>
    )
   }
    
    </div>

      <div className={style.search}>
        <input type="text" id={style.search_input} placeholder="Search for products"/>
      </div>
      <div className={style.searchLogo}>
    <i className="fa-solid fa-magnifying-glass" id={style.magnifying}></i>
    </div>
    </div>

    <div className={style.indianFlag}>
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/640px-Flag_of_India.svg.png" id={style.indiaFlag_img}/>
      <span className={style.En}>EN</span>
    </div>
    
    <div className={style.login}>
    <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>

      {/* User not signed in => show sign in button */}
      <SignedOut>
        <SignInButton mode="modal">
        <div className={style.btn_login}>
        <button className={style.singIn}>Hello, <span className={style.sign_span}>sign in</span></button> 
          <p className={style.AccountList}>Account & List</p>
        </div>
        </SignInButton>
      </SignedOut>
     
    </div>
   <div className={style.return}>
    <p className={style.retruns}>Returns</p>
    <p className={style.orders}>& Oders</p>
   </div>
    
    <div className={style.cartLogo}>
      <p className={style.cart}><i className="fa-solid fa-cart-shopping"></i></p>
      <p className={style.count}>0</p>
    </div>

  </div>
    <Secondheader/>
  </>
  );
}

export default Header;
