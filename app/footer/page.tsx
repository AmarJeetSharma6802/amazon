import React from 'react'
import style from '../style/footer.module.css'
import SecondFooter from "../footer/SecondFooter"
import {
  SignedOut,
  SignInButton,
} from '@clerk/nextjs';

function Footer() {
  return (
    <>
    <div className={style.footer}>
      <div className={style.footer_cover}>
      <div className={style.footer_Login_details}>
      <h2>See personalized recommendations</h2>   
      </div>
      <div className={style.footer_Login_setup}>
 {/* <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn> */}

      {/* User not signed in => show sign in button */}
      <SignedOut>
        <SignInButton mode="modal">
        <div className={style.Footer_btn_login}>
        <p className={style.footer_sign_in}>Sign in</p>
        <p>
        New customer? <span className={style.start_Here}> Start here.</span>
        </p>
        </div>
        </SignInButton>
      </SignedOut>
      </div>
      </div>
        
    </div>
    <SecondFooter/>
    </>
  )
}

export default Footer