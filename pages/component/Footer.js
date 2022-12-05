import React from 'react'

const Footer = () => {
  return (

     <footer className="footer">
    <div className="top-footer">
      <div className="top-footer-top">
        <div className="footer-logo-background">  <img src="./images/logo.png" /></div>
        <h1>خدمات سایت و آموزش آی تی تیم</h1>
      </div>
      <div className="top-footer-bottom">
        <div className="right-footer">
          <ul>
            <li>تهران-میدان ونک-خیابان حقانی - نبش گاندی شمالی</li>
            <li>09121235667</li>
            <li>09123346714</li>
            <li>88883605</li>
            <li>88883650</li>
          </ul>

        </div>
        <div className="left-footer">
          <div className="left-footer-right">
            <h1>خدمات آی تی تیم</h1>
            <ul>
              <li><a href="#"> صفحه اصلی</a></li>
              <li><a href="#"> وبلاگ</a></li>
              <li><a href="#"> آموزش</a></li>
              <li><a href="#"> نمونه کارها</a></li>
              <li><a href="#"> درباره ما</a></li>
            </ul>
            <label>جهت مشاوره رایگان ایمیل خود را وارد کنید</label>
            <input type="email" placeholder="..." />
          </div>
          <div className="left-footer-left">
            <h1>وبلاگ</h1>
            <ul>
              <li><a href="#">آموزش سئو </a></li>
              <li><a href="#"> آموزش وردپرس</a></li>
              <li><a href="#"> برنامه نویس یار</a></li>
              <li><a href="#"> سخت افزار</a></li>



              <li><a href="#"> هاست و دامنه</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="bottom-footer">
      <p>
        کلیه حقوق مادی و معنوی این وبسایت متعلق به مجموعه " آی تی تیم "
        میباشد.
      </p>
    </div>
  </footer>
  )
}

export default Footer
