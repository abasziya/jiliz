import React from 'react'
import Image from 'next/image'
import s from "../styles/aval.module.css"

import { BsSearch } from "react-icons/bs";
import MainFilter from "./component/MainFilter"

const Aval = () => {






  return (

    <div className={s.container}>

<div className={s.mainimagediv}>
<Image src="/images/edit .jpg"  alt='logo' width={2000} height={500} /> 
<div  className={s.maintextdiv}>

<h1 >جستجوی کار های اطراف شما   </h1>
</div>

<div className={s.searchinputdiv}>
  <div className={s.firstinput }>
  
  <input  type="text" className={s.searchinput}  placeholder=" فعالیت شغلی,نام کسب و کار  , خدمات ومحصولات و ..."  />
  </div>

<div className={s.secenddiv}>
  <span>
    در 
  </span>
  <input   className={s.placeinput }   placeholder="شهر,محله ,منطقه ,خیابان و..." />
</div>
<button className={s.searchbutton }> <span>جستجو </span> <BsSearch /></button>

</div>
</div>
  <div >

<h2 className={s.filtertext}> دسته بندی مشاغل </h2>
  </div>
<section className={s.filtersection  }>

<MainFilter/>
</section>
    </div>
  )
}

export default Aval
