import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {




    
const [isActive, setIsActive] = useState(false);
  
const[isnavactive,setisnavactive]=useState(false);



useEffect(()=>{
  


  
  window.addEventListener("scroll", (ref) => {
    
    

    if (window.scrollY <= 100) {
      
      setIsActive();
      

      // console.log(window.screenY)
      
    }else if(window.scrollY >= 80) {
      
      setIsActive(true);
      // console.log(">-80")
    }else if(window.screenY>=300){
      console.log("fuuuuuuuuclk")
    }
  });
  
})

const  navactive=()=>{
setisnavactive(true)

}
 const closebtn=()=>{

  setisnavactive(false)
 }
  return (
  <>
   <header  className={isActive ? 'scroll ' : ''}>
    
    <svg   onClick={navactive} className="menu-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
        <path fill="#6CB4EE"
          d="M25.457,7.504c-6.171-0.17-11.438,0.347-17.579,0.978c-0.611,0.063-1.244,0.136-1.77,0.453 c-1.354,0.815-1.381,2.156-1.244,3.731c0.045,0.522,0.163,1.146,0.65,1.338c0.135,0.053,0.283,0.064,0.429,0.074 c11.101,0.736,23.465,0.383,34.557-0.468c1.366-0.105,1.708-0.247,2.437-1.407c0.825-1.312,0.618-3.068-0.707-3.871 c-1.326-0.802-1.721-0.872-3.271-0.875C34.773,7.45,29.641,7.62,25.457,7.504z" />
        <path fill="#010101"
          d="M18.881,14.979c-4.255,0-8.643-0.115-12.972-0.402c-0.152-0.01-0.364-0.022-0.58-0.107 c-0.84-0.332-0.93-1.369-0.963-1.76C4.228,11.119,4.229,9.483,5.85,8.508c0.639-0.385,1.381-0.461,1.977-0.521 c5.787-0.595,11.256-1.161,17.644-0.981l0,0C28.058,7.078,31.02,7.038,33.883,7c1.76-0.023,3.487-0.043,5.076-0.042 c1.623,0.004,2.104,0.086,3.528,0.947c0.684,0.414,1.163,1.076,1.35,1.865c0.212,0.896,0.038,1.879-0.478,2.7 c-0.83,1.318-1.318,1.523-2.822,1.639C34.74,14.554,27.059,14.979,18.881,14.979z M23.075,7.972 c-5.341,0-10.122,0.492-15.146,1.009C7.297,9.046,6.781,9.115,6.366,9.364c-1.034,0.622-1.149,1.586-1.004,3.26 c0.046,0.538,0.159,0.847,0.335,0.916c0.067,0.026,0.183,0.033,0.275,0.039c12.594,0.833,25.706,0.207,34.489-0.467 c1.224-0.094,1.417-0.165,2.051-1.175c0.374-0.595,0.502-1.301,0.352-1.936c-0.088-0.373-0.315-0.891-0.895-1.241 c-1.239-0.749-1.533-0.799-3.013-0.803C37.371,7.953,35.651,7.977,33.896,8c-2.874,0.038-5.845,0.077-8.453,0.005l0,0 C24.64,7.982,23.852,7.972,23.075,7.972z" />
        <path fill="#6CB4EE"
          d="M24.805,21.407c-5.722,0.191-11.388,0.051-17.111,0.228c-1.011,0.031-2.189,0.153-2.727,1.009 c-0.53,0.844-0.354,2.297-0.215,3.315c0.124,0.906,0.713,1.324,1.623,1.415c1.055,0.106,2.48,0.064,3.542,0.083 c9.226,0.17,19.083-0.229,28.12-0.008c1.239,0.03,2.573-0.209,3.492-1.04c0.753-0.681,1.083-1.731,1.122-2.746 c0.033-0.861-0.162-1.803-0.827-2.351c-0.651-0.537-1.571-0.559-2.415-0.554C34.351,20.788,29.861,21.239,24.805,21.407z" />
        <path fill="#010101"
          d="M15.117,28.002c-1.754,0-3.497-0.013-5.209-0.044c-1.052-0.021-2.492,0.023-3.582-0.086 c-1.521-0.151-1.965-1.087-2.069-1.845c-0.173-1.268-0.308-2.7,0.288-3.648c0.735-1.17,2.356-1.22,3.135-1.244 c2.804-0.086,5.637-0.097,8.376-0.107c2.859-0.011,5.815-0.022,8.733-0.12l0,0c2.062-0.068,4.057-0.187,5.986-0.3 c2.768-0.163,5.63-0.331,8.632-0.349c0.767,0,1.911-0.011,2.735,0.669c0.697,0.572,1.055,1.552,1.008,2.756 c-0.05,1.293-0.507,2.393-1.286,3.098c-1.124,1.017-2.714,1.195-3.84,1.169c-4.692-0.114-9.705-0.061-14.55-0.009 C20.718,27.972,17.904,28.002,15.117,28.002z M24.822,21.907c-2.933,0.098-5.897,0.109-8.763,0.12 c-2.733,0.011-5.56,0.021-8.349,0.107c-0.97,0.029-1.923,0.145-2.319,0.775c-0.452,0.721-0.251,2.191-0.143,2.982 c0.06,0.435,0.246,0.892,1.177,0.985c1.035,0.104,2.465,0.062,3.501,0.08c4.418,0.082,9.054,0.032,13.538-0.017 c4.855-0.052,9.875-0.105,14.585,0.009c0.95,0.026,2.266-0.116,3.145-0.911c0.78-0.705,0.935-1.803,0.958-2.395 c0.02-0.512-0.038-1.445-0.645-1.945c-0.504-0.414-1.284-0.442-2.094-0.44c-2.976,0.018-5.698,0.178-8.58,0.347 C28.898,21.72,26.896,21.838,24.822,21.907L24.822,21.907z" />
        <path fill="#6CB4EE"
          d="M23.814,33.916c-5.881,0.053-11.022-0.458-16.907-0.229c-0.386,0.015-0.795,0.112-1.069,0.385 c-0.377,0.376-0.343,0.985-0.283,1.514l0.133,1.173c0.114,1.008,1.017,2.776,2.032,2.782c8.718,0.05,16.994,0.025,25.712-0.074 c1.72-0.02,3.444-0.042,5.154-0.226c1.07-0.115,2.134-0.292,3.184-0.532c0.394-0.09,0.813-0.205,1.074-0.513 c0.214-0.254,0.285-0.597,0.33-0.926c0.08-0.579,0.105-1.165,0.077-1.748c-0.05-1.034-0.899-1.865-1.933-1.895 C35.427,33.455,29.755,33.863,23.814,33.916z" />
        <path fill="#010101"
          d="M16.402,40.067c-2.868,0-5.748-0.008-8.687-0.025c-1.398-0.008-2.402-2.136-2.525-3.226 l-0.133-1.173c-0.053-0.471-0.152-1.347,0.427-1.926c0.326-0.324,0.811-0.508,1.403-0.53c3.345-0.128,6.51-0.021,9.571,0.085 c2.362,0.082,4.802,0.169,7.351,0.144l0,0c2.266-0.021,4.527-0.093,6.714-0.164c3.518-0.114,7.154-0.23,10.808-0.124 c1.293,0.038,2.355,1.079,2.418,2.371c0.03,0.614,0.003,1.233-0.081,1.841c-0.055,0.405-0.147,0.83-0.443,1.18 c-0.359,0.425-0.883,0.572-1.346,0.678c-1.064,0.243-2.155,0.425-3.241,0.542c-1.765,0.189-3.591,0.21-5.202,0.229 C27.573,40.035,22.011,40.067,16.402,40.067z M10.118,34.127c-1.043,0-2.101,0.018-3.192,0.061 C6.594,34.2,6.333,34.285,6.19,34.427C5.981,34.635,6,35.08,6.051,35.53l0.133,1.173c0.106,0.942,0.935,2.335,1.538,2.339 c8.681,0.052,16.849,0.027,25.703-0.074c1.667-0.019,3.39-0.038,5.107-0.223c1.047-0.113,2.099-0.289,3.125-0.522 c0.319-0.073,0.645-0.16,0.804-0.349c0.13-0.154,0.181-0.413,0.216-0.67c0.076-0.547,0.1-1.104,0.073-1.656 c-0.038-0.773-0.674-1.397-1.448-1.42c-3.623-0.106-7.244,0.01-10.747,0.124c-2.192,0.07-4.459,0.144-6.737,0.164l0,0 c-2.565,0.028-5.021-0.062-7.394-0.144C14.291,34.198,12.237,34.127,10.118,34.127z" />
      </svg>
     
      <nav   className = { isActive ? 'scroll  header-right-side   ': "header-right-side  "} >
         <div className={isnavactive ? 'scroll  header-right-side active ' : '' } >
         <button onClick={closebtn} className= {isnavactive ? 'close-btn ' : 'close-btn-none' } ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style={{backgroundcolor:"black"}} className="bi bi-x-lg" viewBox="0 0 16 16">
    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
  </svg></button> 
  
        
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         صفحه  اصلی 
          </a>
          <ul className="dropdown-menu">
            <li> <Link  href="/">  صفحه  اصلی  </Link></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
           
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           لوازم کافه و رستوران

          </a>
          <ul className="dropdown-menu">
            <li><Link  href="/weblog">  لوازم کافه و رستوران</Link></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
           
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         خوراک و نوشیدنی  
          
          </a>
          <ul className="dropdown-menu">
            <li><Link href="/learn">   خوراک و نوشیدنی  </Link></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
           
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>


        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          
        قطعات و خات دم 
          </a>
          <ul className="dropdown-menu">
            <li> <Link href="/portofolio " >  قطعات و خات دم </Link></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
           
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               درباره ما
          </a>
          <ul className="dropdown-menu">
            <li> <Link href="/aboutus">درباره ما</Link></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
           
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
         </div>
      </nav>
  
      <div className="header-left-side">

     <Image src="/images/logo-v2.svg"  alt='logo' width={200} height={80} /> 
            
       
      </div>

      
    </header>
  
  </>
  )
}

export default Header
