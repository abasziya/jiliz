import React, { useState } from 'react'
import Footer from './component/Footer'
import Header from './component/Header'
import styles from '../styles/register.module.css'
import { useMemo } from 'react'
const register = () => {
const[switcher,setswicher]=useState(false)
 const[switcher2,setswicher2]=useState(false)

    // switcher.forEach( item   => {
    //     item.addEventListener('click', function() { 
           
    //         switcher.forEach(item => item.parentElement.classList.remove('is-active'))
    //         this.parentElement.classList.add('is-active')
    //     })
    // })

  return (

    <>
        <Header/>



        <section className="forms-section">
  <h1 className="section-title">Animated Forms</h1>
  <div className="forms">
    <div className={switcher ? "form-wrapper ":"form-wrapper is-active"}>
      <button onClick={()=>{
            setswicher(true)
            setswicher2(false)
      }} type="button" className={switcher ? "switcher switcher-login is-active":"switcher switcher-login"}>
        Login
        <span className="underline"></span>
      </button>
      <form className="form form-login">
        <fieldset>
          <legend>Please, enter your email and password for login.</legend>
          <div className="input-block">
            <label for="login-email">E-mail</label>
            <input id="login-email" type="email" required></input>
          </div>
          <div className="input-block">
            <label for="login-password">Password</label>
            <input id="login-password" type="password" required></input>
          </div>
        </fieldset>
        <button type="submit" className="btn-login">Login</button>
      </form>
    </div>
    <div className={setswicher2 ? "form-wrapper ":"form-wrapper is-active"}>
      <button  onClick={()=>{
            setswicher2(true)
            setswicher(false)
            
      }} type="button" className={   switcher2  ?  "switcher switcher-signup " :"switcher switcher-signup is-active" }>
        Sign Up
        <span className="underline"></span>
      </button>
      <form className="form form-signup">
        <fieldset>
          <legend>Please, enter your email, password and password confirmation for sign up.</legend>
          <div className="input-block">
            <label for="signup-email">E-mail</label>
            <input id="signup-email" type="email" required></input>
          </div>
          <div className="input-block">
            <label for="signup-password">Password</label>
            <input id="signup-password" type="password" required></input>
          </div>
          <div className="input-block">
            <label for="signup-password-confirm">Confirm password</label>
            <input id="signup-password-confirm" type="password" required></input>
          </div>
        </fieldset>
        <button type="submit" className="btn-signup">Continue</button>
      </form>
    </div>
  </div>
</section>
    
    <Footer/>

    </>
  )
}

export default register
