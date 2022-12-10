import React, { useState } from 'react'
import Footer from './component/Footer'
import Header from './component/Header'
import styles from '../styles/register.module.css'
import { useMemo } from 'react'
const register = () => {
const[switcher,setswicher]=useState(true)
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



        <section className={styles["forms-section"]}>
  <h1 className="section-title"> ورود و ثبت نام </h1>
  <div className="forms">
    <div className={switcher ? "form-wrapper ":"form-wrapper is-active"}>
      <button onClick={()=>{
            setswicher(false)
            setswicher2(true)
      }} type="button" className={switcher ? "switcher switcher-login is-active":"switcher switcher-login"}>
   ورود 
        <span className="underline"></span>
      </button>
      <form className="form form-login">
        <fieldset>
          <legend>لطفا رمز عبور و پسورد خود را وارد کنید .</legend>
          <div className="input-block">
            <label for="login-email"> ایمیل </label>
            <input id="login-email" type="email" required></input>
          </div>
          <div className="input-block">
            <label for="login-password"> رمز عبور </label>
            <input id="login-password" type="password" required></input>
          </div>
        </fieldset>
        <button type="submit" className="btn-login">ورود </button>
      </form>
    </div>
    <div className={ switcher2 ? "form-wrapper   " : "form-wrapper  is-active  "}>
      <button  onClick={()=>{
        setswicher(true)
        
       setswicher2(false )
      }} type="button" className={   switcher2  ?  "switcher switcher-signup  is-active" :"switcher switcher-signup " }>
       ثبت نام 
        <span className="underline"></span>
      </button>
      <form className="form form-signup ">
        <fieldset>
          <legend>Please, enter your email, password and password confirmation for sign up.</legend>
          <div className="input-block">
            <label for="signup-email">ایمیل </label>
            <input id="signup-email" type="email" required></input>
          </div>
          <div className="input-block">
            <label for="signup-password">رمزعبور </label>
            <input id="signup-password" type="password" required></input>
          </div>
          <div className="input-block">
            <label for="signup-password-confirm">تایید رمز عبور </label>
            <input id="signup-password-confirm" type="password" required></input>
          </div>
        </fieldset>
        <button type="submit" className="btn-signup"> ادامه </button>
      </form>
    </div>
  </div>
</section>
    
    <Footer/>

    </>
  )
}

export default register
