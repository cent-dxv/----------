"use client"

import Navbar from '@/src/components/navbar_2'
import React, { useContext, useState } from 'react'

import styles from '@/styles/components/checkout.module.scss'
import Image from 'next/image'
import Footer from '@/src/components/footer'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { CartContext } from '@/context'


function checkout() {
  const [Dropdown, setDropdown] = useState([])
  const { cartItems, updateItem, addItemToCart, removeItemFromCart, clearCart } = useContext(CartContext);

{console.log(cartItems)}
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <h1>סל קניות</h1>

        <div className={styles.container}>

          <card className={styles.price_card}>
            <h2>סה"כ </h2>
            <span>₪ {cartItems.reduce((sum,item)=>sum + parseInt(item.price) ,0)}</span>
            {/* <p>את קודי הנחות וניצול צבירה ניתן להכניס בעמוד התשלום</p> */}
            <button> םולשתל</button>
          </card>

          <div className={styles.course_container}>

            {cartItems.map((item, index) => (
              <section  key= {index} >
                <div className={styles.hearder}>
                  <button className={styles.delet_btn} onClick={()=>{removeItemFromCart(item.id)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
                    <path d="M10.2722 5.52295C10.2722 5.52295 9.95547 9.4517 9.77172 11.1066C9.68422 11.897 9.19597 12.3602 8.39622 12.3748C6.87431 12.4022 5.35064 12.4039 3.82931 12.3719C3.05989 12.3561 2.57981 11.8871 2.49406 11.1107C2.30914 9.4412 1.99414 5.52295 1.99414 5.52295" stroke="#1C2135" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M11.0797 3.63981H1.1875" stroke="#1C2135" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9.17383 3.63974C8.71592 3.63974 8.32158 3.31599 8.23175 2.86741L8.09 2.15808C8.0025 1.83083 7.70617 1.60449 7.36842 1.60449H4.89917C4.56142 1.60449 4.26508 1.83083 4.17758 2.15808L4.03583 2.86741C3.946 3.31599 3.55167 3.63974 3.09375 3.63974" stroke="#1C2135" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  </button>

                  <div>
                    <h1>מכינת מתמטיקה - סמסטר ראשון </h1>
                    <p> מרצה הקורס: ארז כהן</p>
                  </div>
                </div>

                <div className={styles.course_list}>
                  <Swiper 
                  // navigation={true}
                    // slidesPerView={2.5}
                    // initialSlide={2}
                    // centeredSlides={true}
                    className="mySwiper"


                    breakpoints={{
                      200: {
                        slidesPerView: 1.5,
                        initialSlide: 2,
                        spaceBetween: 50,
                      },
                      320: {
                        slidesPerView: 2.1,

                        initialSlide: 2,
                        spaceBetween: 50,
                      },
                      380: {
                        slidesPerView: 2.3,

                        initialSlide: 2,
                        spaceBetween: 50,
                      },
                      450: {
                        slidesPerView: 2.5,

                        initialSlide: 2,
                        spaceBetween: 50,
                      },
                      550: {
                        slidesPerView: 2.9,

                        initialSlide: 2,
                        spaceBetween: 50,
                      },
                      650: {
                        slidesPerView: 3.5,

                        initialSlide: 2,
                        spaceBetween: 10,
                      },
                      750: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                      },
                    }}>

                    {Array(4).fill().map((e, index) => {

                      const month = index === 0 ? 1 : index === 1 ? 3 : index === 2 ? 6 : 12;
                      const selected = "subscription_period" in item & item.subscription_period === month ? true : null;

                      return (

                        <SwiperSlide key={index}>
                          <button className={styles.cart_btn} onClick={() => { updateItem(item.id, month) }} style={selected ? { border: "3px solid #FF5E3B", borderRadius: "16px" } : {}}>

                            <card >
                              <div className={styles.course_img}>
                                <Image
                                  fill
                                  objectFit='cover'
                                  src={item.image_url}
                                />
                                <div className={styles.course_img_cover}>
                                  <h1> {month} </h1>
                                  <h2>חודשים</h2>
                                </div>
                              </div>
                              <h3>מרצה הקורס: ארז כהן</h3>
                              <p>  שדוחל ₪ s75   </p>
                            </card>

                          </button>
                          {selected && (<svg className={styles.check_box} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.7525 0.5H11.255C13.7975 0.5 15.5 2.285 15.5 4.94V11.0683C15.5 13.715 13.7975 15.5 11.255 15.5H4.7525C2.21 15.5 0.5 13.715 0.5 11.0683V4.94C0.5 2.285 2.21 0.5 4.7525 0.5ZM7.5725 10.2425L11.135 6.68C11.39 6.425 11.39 6.0125 11.135 5.75C10.88 5.495 10.46 5.495 10.205 5.75L7.1075 8.8475L5.795 7.535C5.54 7.28 5.12 7.28 4.865 7.535C4.61 7.79 4.61 8.2025 4.865 8.465L6.65 10.2425C6.7775 10.37 6.9425 10.43 7.1075 10.43C7.28 10.43 7.445 10.37 7.5725 10.2425Z" fill="#FF5E3B" />
                            <path d="M11.1351 6.68009L7.57258 10.2426C7.44508 10.3701 7.28008 10.4301 7.10758 10.4301C6.94258 10.4301 6.77758 10.3701 6.65008 10.2426L4.86508 8.46509C4.61008 8.20259 4.61008 7.79009 4.86508 7.53509C5.12008 7.28009 5.54008 7.28009 5.79508 7.53509L7.10758 8.84759L10.2051 5.75009C10.4601 5.49509 10.8801 5.49509 11.1351 5.75009C11.3901 6.01259 11.3901 6.42509 11.1351 6.68009Z" fill="white" />
                          </svg>)}



                        </SwiperSlide>)
                    }

                    )}



                  </Swiper>

                </div>
              </section>


            ))}




            <div className={styles.card} style={ Dropdown.includes(1) ? { maxHeight: "300px" } : { maxHeight: "71px" }} >
              <button className={styles.hearder} onClick={() => setDropdown(Dropdown.includes(1) ? Dropdown.filter(item => item !== 1) : [...Dropdown, 1])}>
                <svg style={Dropdown.includes(1) ? { transform: 'rotate(180deg)' } : {}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.0625 8C1.0625 11.831 4.16825 14.9375 8 14.9375C11.831 14.9375 14.9375 11.831 14.9375 8C14.9375 4.169 11.831 1.0625 8 1.0625C4.16825 1.0625 1.0625 4.169 1.0625 8Z" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M5.39648 6.91821L7.99973 9.53271L10.603 6.91821" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <div>
                  <h1> נצלו הסכום שצברת </h1>
                  <p style={Dropdown.includes(1) ? { opacity: "1" } : { opacity: "0" }}> <span> ₪ 189.00</span>  צברת </p>
                </div>
              </button>

              <h3> :תרשום את הסכום שתרצה לנצל </h3>
              <span> <button>הפעל </button> <input  type="text"  dir="rtl" /> </span>
              <p>  שים לב: אפשר להמשיך לצבור ולנצל את היתרה בקנייה הבאה</p>

            </div>


            <div className={styles.card} style={  Dropdown.includes(2) ? { maxHeight: "300px" } : { maxHeight: "71px" }} >
              <button className={styles.hearder} onClick={() => setDropdown(Dropdown.includes(2) ? Dropdown.filter(item => item !== 2) : [...Dropdown, 2])}>
                <svg style={Dropdown.includes(2) ? { transform: 'rotate(180deg)' } : {}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.0625 8C1.0625 11.831 4.16825 14.9375 8 14.9375C11.831 14.9375 14.9375 11.831 14.9375 8C14.9375 4.169 11.831 1.0625 8 1.0625C4.16825 1.0625 1.0625 4.169 1.0625 8Z" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M5.39648 6.91821L7.99973 9.53271L10.603 6.91821" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <div>
                  <h1> ?יש לך קוד הנחה\קופון</h1>
                </div>
              </button>

              <h3> הזינו את הקוד שברשותכם: </h3>
              <span> <button>הפעל </button> <input type="text"   dir="rtl" /> </span>

            </div>
            <div className={styles.payment}>
              <h1> בחירת אמצעי תשלום</h1>

              <span>

                <div onClick={() => document.querySelector('input[name="paymentMethod"]').click()}>

                  <label htmlFor="paymentMethod">כרטיס אשראי</label>
                  <input type="radio" name="paymentMethod" value="creditCard" />
                </div>

                <div onClick={() => document.querySelector('#paypal').click()}>
                  <label htmlFor="paypal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="102" height="59" viewBox="0 0 102 59" fill="none">
                      <g clip-path="url(#clip0_106_2528)">
                        <path d="M78.8485 23.3193H73.3438C73.02 23.3193 72.6961 23.6404 72.5342 23.9615L70.2676 38.0894C70.2676 38.4105 70.4295 38.5711 70.7533 38.5711H73.6676C73.9914 38.5711 74.1533 38.4105 74.1533 38.0894L74.8009 34.0758C74.8009 33.7547 75.1247 33.4337 75.6104 33.4337H77.3914C81.1152 33.4337 83.22 31.6677 83.7057 28.1357C84.0295 26.6908 83.7057 25.4064 83.0581 24.6037C82.0866 23.801 80.6295 23.3193 78.8485 23.3193ZM79.4961 28.6173C79.1723 30.5438 77.7152 30.5438 76.258 30.5438H75.2866L75.9342 26.8513C75.9342 26.6908 76.0961 26.5302 76.42 26.5302H76.7438C77.7152 26.5302 78.6866 26.5302 79.1723 27.1724C79.4961 27.333 79.4961 27.8146 79.4961 28.6173Z" fill="#139AD6" />
                        <path d="M39.1825 23.3193H33.6778C33.3539 23.3193 33.0301 23.6404 32.8682 23.9615L30.6016 38.0894C30.6016 38.4105 30.7635 38.5711 31.0873 38.5711H33.6778C34.0016 38.5711 34.3254 38.25 34.4873 37.9289L35.1349 34.0758C35.1349 33.7547 35.4587 33.4337 35.9444 33.4337H37.7254C41.4492 33.4337 43.5539 31.6677 44.0397 28.1357C44.3635 26.6908 44.0397 25.4064 43.392 24.6037C42.4206 23.801 41.1254 23.3193 39.1825 23.3193ZM39.8301 28.6173C39.5063 30.5438 38.0492 30.5438 36.592 30.5438H35.7825L36.4301 26.8513C36.4301 26.6908 36.592 26.5302 36.9158 26.5302H37.2397C38.2111 26.5302 39.1825 26.5302 39.6682 27.1724C39.8301 27.333 39.992 27.8146 39.8301 28.6173Z" fill="#263B80" />
                        <path d="M55.8591 28.4568H53.2686C53.1067 28.4568 52.7829 28.6174 52.7829 28.7779L52.621 29.5806L52.4591 29.2596C51.8115 28.4568 50.6781 28.1357 49.3829 28.1357C46.4686 28.1357 43.8782 30.3834 43.3924 33.4337C43.0686 35.0392 43.5543 36.4841 44.3639 37.4473C45.1734 38.4106 46.3067 38.7317 47.7639 38.7317C50.1924 38.7317 51.4877 37.2868 51.4877 37.2868L51.3258 38.0895C51.3258 38.4106 51.4877 38.5712 51.8115 38.5712H54.24C54.5638 38.5712 54.8877 38.2501 55.0496 37.929L56.5067 28.9385C56.3448 28.7779 56.021 28.4568 55.8591 28.4568ZM52.1353 33.5943C51.8115 35.0392 50.6781 36.163 49.0591 36.163C48.2496 36.163 47.602 35.8419 47.2781 35.5208C46.9543 35.0392 46.7924 34.397 46.7924 33.5943C46.9543 32.1494 48.2496 31.0255 49.7067 31.0255C50.5162 31.0255 51.0019 31.3466 51.4877 31.6677C51.9734 32.1494 52.1353 32.9521 52.1353 33.5943Z" fill="#263B80" />
                        <path d="M95.361 28.4568H92.7706C92.6087 28.4568 92.2848 28.6174 92.2848 28.7779L92.1229 29.5806L91.961 29.2596C91.3134 28.4568 90.1801 28.1357 88.8849 28.1357C85.9706 28.1357 83.3801 30.3834 82.8944 33.4337C82.5706 35.0392 83.0563 36.4841 83.8658 37.4473C84.6753 38.4106 85.8087 38.7317 87.2658 38.7317C89.6944 38.7317 90.9896 37.2868 90.9896 37.2868L90.8277 38.0895C90.8277 38.4106 90.9896 38.5712 91.3134 38.5712H93.742C94.0658 38.5712 94.3896 38.2501 94.5515 37.929L96.0086 28.9385C95.8467 28.7779 95.6848 28.4568 95.361 28.4568ZM91.6372 33.5943C91.3134 35.0392 90.1801 36.163 88.561 36.163C87.7515 36.163 87.1039 35.8419 86.7801 35.5208C86.4563 35.0392 86.2944 34.397 86.2944 33.5943C86.4563 32.1494 87.7515 31.0255 89.2087 31.0255C90.0182 31.0255 90.5039 31.3466 90.9896 31.6677C91.6372 32.1494 91.7991 32.9521 91.6372 33.5943Z" fill="#139AD6" />
                        <path d="M69.9413 28.4568H67.1889C66.8651 28.4568 66.7032 28.6173 66.5413 28.7779L62.9794 34.2364L61.3603 29.099C61.1984 28.7779 61.0365 28.6173 60.5508 28.6173H57.9603C57.6365 28.6173 57.4746 28.9384 57.4746 29.2595L60.3889 37.7683L57.6365 41.6214C57.4746 41.9425 57.6365 42.4241 57.9603 42.4241H60.5508C60.8746 42.4241 61.0365 42.2635 61.1984 42.103L70.1032 29.4201C70.5889 28.9384 70.2651 28.4568 69.9413 28.4568Z" fill="#263B80" />
                        <path d="M98.4385 23.8013L96.1719 38.2503C96.1719 38.5714 96.3338 38.7319 96.6576 38.7319H98.9243C99.2481 38.7319 99.5719 38.4108 99.7338 38.0897L102 23.9618C102 23.6408 101.839 23.4802 101.515 23.4802H98.9243C98.7623 23.3197 98.6004 23.4802 98.4385 23.8013Z" fill="#139AD6" />
                        <path d="M18.619 18.5027C17.4857 17.2183 15.381 16.5762 12.4667 16.5762H4.37143C3.88571 16.5762 3.4 17.0578 3.2381 17.5394L0 38.5707C0 39.0524 0.32381 39.3735 0.647619 39.3735H5.66667L6.96191 31.5068V31.8279C7.12381 31.3462 7.60952 30.8646 8.09524 30.8646H10.5238C15.219 30.8646 18.781 28.9381 19.9143 23.6401C19.9143 23.4796 19.9143 23.319 19.9143 23.1585C19.7524 23.1585 19.7524 23.1585 19.9143 23.1585C20.0762 21.0714 19.7524 19.7871 18.619 18.5027Z" fill="#263B80" />
                        <path d="M19.7511 23.1589C19.7511 23.3195 19.7511 23.48 19.7511 23.6406C18.6178 29.0991 15.0559 30.8651 10.3606 30.8651H7.93207C7.44635 30.8651 6.96064 31.3467 6.79873 31.8283L5.17969 41.6215C5.17969 41.9426 5.34159 42.2637 5.82731 42.2637H10.0368C10.5225 42.2637 11.0083 41.9426 11.0083 41.461V41.3004L11.8178 36.3236V36.0025C11.8178 35.5208 12.3035 35.1998 12.7892 35.1998H13.4368C17.4844 35.1998 20.7225 33.5943 21.5321 28.778C21.8559 26.8515 21.694 25.0855 20.7225 23.9617C20.5606 23.6406 20.2368 23.3195 19.7511 23.1589Z" fill="#139AD6" />
                        <path d="M18.62 22.6767C18.4581 22.6767 18.2962 22.5162 18.1343 22.5162C17.9724 22.5162 17.8105 22.5162 17.6486 22.3556C17.001 22.1951 16.3534 22.1951 15.5438 22.1951H9.22956C9.06765 22.1951 8.90575 22.1951 8.74384 22.3556C8.42003 22.5162 8.25813 22.8372 8.25813 23.1583L6.96289 31.5066V31.8277C7.1248 31.3461 7.61051 30.8645 8.09622 30.8645H10.5248C15.22 30.8645 18.7819 28.9379 19.9153 23.64C19.9153 23.4794 19.9153 23.3189 20.0772 23.1583C19.7534 22.9978 19.5915 22.8372 19.2677 22.8372C18.7819 22.6767 18.7819 22.6767 18.62 22.6767Z" fill="#232C65" />
                      </g>
                      <defs>
                        <clipPath id="clip0_106_2528">
                          <rect width="102" height="59" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </label>
                  <input id="paypal" type="radio" name="paymentMethod" value="creditCard" />
                </div>

              </span>
            </div>


          </div>

        </div>


      </main>

      <Footer />
    </>
  )
}

export default checkout