import React from 'react'
import Header from './component/Header'
import { useState } from 'react'
import Footer from './component/Footer'

const makeadvertise = () => {

  const[Adname,setAdname]=useState("")
  const[image,setimage]=useState("")
  const[discription ,setdiscription]=useState("")
  const [flag, setflag] = useState(true);


 


  return (
    <>
   <Header /> 



    <div className='container'> 



  
            
          
          

 
   <div>
   <div className="regester-container">  
   <div className="ADtype">  
                <label className='lable-box' for="">نوع   اگهی   </label>  
                <select  className="form-control text-center" id="exampleFormControlSelect1">  
                  <option> ماشین </option>  
                  <option>دکوراسیون داخلی </option>  
                  <option>محصول </option>  
                  <option> محصولات دسته دوم </option>
                  <option>غیره </option>   
                </select>    
              </div>  
      <form className="form-box " > 
        <div className="regester-header">  
          <h1>ثبت تبلیغ</h1>    
        </div>   
         
        <div className="form-group">  
          <label className="lable-box ">نام تبلیغ</label>   
          <input   
            onChange={(e) => setAdname(e.target.value)}  
            type={"text"}  
            className="form-control"  
            placeholder="نام تبلیغ را وارد کنید "  
          ></input> 
        </div> 
        <div className="form-group ">  
          <label className="lable-box"> عکس تبلیغ</label>  
          <input  
            onChange={(e) => setimage(e.target.value)} 
            type={"number"} 
            className="form-control text-center"  
            placeholder="عکس تبلیغ را وازد کنید " 
            required="required" 
            ></input> 
        </div>  

        <div className="form-group"> 
          <label className="lable-box">توضیحات </label> 
          <input
          required="required"
          onChange={(e) => setdiscription(e.target.value)}
          type={"text"} 
          className="form-control"
          placeholder="توضیحات راجب تبلیغ وارد کنید "
          ></input>
        </div>

        <div className="form-group">
          <label className="lable-box">قیمت  </label>
          <input
          required="required"
          onChange={(e) => setdiscription(e.target.value)}
          type={"text"}
          className="form-control"
          placeholder=" قیمت محصول  به تومان "
          ></input>
        </div>
        
         {/* {!flag && <alert color="primary">Please fill evry thing</alert>} */}
    
       


      </form>
    
            </div>
   </div>
    </div>
    <Footer/>

    
</>
  )
}

export default makeadvertise
