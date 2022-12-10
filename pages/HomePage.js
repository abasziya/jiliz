import React from 'react'
import Header from './component/Header'
import Image from 'next/image'
import styles from '../styles/Homepage.module.css'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useEffect } from 'react';
import axios  from 'axios';
import Footer from './component/Footer';

const HomePage = () => {


const[nav,setnav]=useState(true)
  const [apiData, setdata] = useState([])
  const Getdata = async () => {
       
    try {
        const { data } = await axios.get(
            "https://fakestoreapi.com/products"
        )
    
        setdata(data)
        console.log( data )
      console.log(islogin)
    } catch (error) {
      console.log(error.message);
    }
    
    

    
}

useEffect(() => {
  Getdata();
}, []);

  
useEffect(()=>{
  


  
  window.addEventListener("scroll", (e) => {
    
      
  
  console.log(window.scrollY)

    if (window.scrollY  <= 350) {
      
      setnav(false);
      
       
    
      
    }else if(window.scrollY >= 350 && window.scrollY <= 1750 ) {
       
   setnav(true)
 
    } else  {

console.log(nav)
      setnav(false)
    }
  });
  
})







  return (
    <>
    
    
     <div className={styles.container}>
    <Header />


   


 
  <div   className={styles.mainpage} >

<div className={styles.aboutProduct}>

<h3  >اگهی های تبلیغاتی </h3>
</div>

<div className={styles.productcontainer}>




  {apiData.map((item,index)=>
  <div key={index} className={styles.Products} >
    
      <p className={styles.Ptitle}>{item.title}</p>
      <p >{item.rating.rate}</p>
      <img src={item.image}   className={styles.images}   ></img>
      <p >{item.price}</p>
      <p >{item.category}</p>

      {/* <div className={styles.overley }>
      
      <p  >{item.description}</p>
 
      </div> */}

      
      
     
  
  </div>
     
     )}
     </div>

<div className={styles.sidebar}>
<div className={ nav ? styles.insidenavactive : styles.insidenav } >
<form>
<div className={styles.fillterbox}> <h2  style={{"top":"10px"}}>فیلتر ها </h2>  <br></br></div>
<select className={styles.filterselect} >
      <option>نوع دستگاه </option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
                  
</select>
  
<select className={styles.filterselect} >
      <option> زیرشاخه  </option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>

</select>

<select name="state" className={styles.filterselect} >
		<option value="0">لطفا استان را انتخاب نمایید</option>
		<option value="1">تهران</option>
		<option value="2">گیلان</option>
		<option value="3">آذربایجان شرقی</option>
		<option value="4">خوزستان</option>
		<option value="5">فارس</option>
		<option value="6">اصفهان</option>
		<option value="7">خراسان رضوی</option>
		<option value="8">قزوین</option>
		<option value="9">سمنان</option>
		<option value="10">قم</option>
		<option value="11">مرکزی</option>
		<option value="12">زنجان</option>
		<option value="13">مازندران</option>
		<option value="14">گلستان</option>
		<option value="15">اردبیل</option>
		<option value="16">آذربایجان غربی</option>
		<option value="17">همدان</option>
		<option value="18">کردستان</option>
		<option value="19">کرمانشاه</option>
		<option value="20">لرستان</option>
		<option value="21">بوشهر</option>
		<option value="22">کرمان</option>
		<option value="23">هرمزگان</option>
		<option value="24">چهارمحال و بختیاری</option>
		<option value="25">یزد</option>
		<option value="26">سیستان و بلوچستان</option>
		<option value="27">ایلام</option>
		<option value="28">کهگلویه و بویراحمد</option>
		<option value="29">خراسان شمالی</option>
		<option value="30">خراسان جنوبی</option>
		<option value="31">البرز</option>
	</select>
	
  <select className={styles.filterselect} >
      <option> نوع محصول  </option>
      <option value="1">نو </option>
      <option value="2">دسته دوم </option>
      

</select>
<select className={styles.filterselect} >
      <option> کشور سازنده  </option>
      <option value="1">نو </option>
      <option value="2">دسته دوم </option>
      

</select>
<select className={styles.filterselect} >
      <option> قیمت</option>
      <option value="1">المان  </option>
      <option value="2"> اروپا  </option>
      <option value="2"> امریکا   </option>
      <option value="2"> دبی  </option>

    
</select>
<select className={styles.filterselect} >
      <option> برند  </option>
      <option value="1">کاوانی  </option>
      <option value="2"> رولز زویز   </option>
      <option value="2"> نایک    </option>
      <option value="2"> البانی  </option>

    
</select>

</form>

</div>


  </div>

   <Footer/>


  </div>

     </div>
    
   <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js' />



    </>
  )
}

export default HomePage
