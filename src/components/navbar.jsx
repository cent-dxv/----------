
"use client"

import React, { useContext, useState } from 'react'
import style_navbar from '@/styles/components/navbar.module.scss'
import Link from 'next/link'
import Image from 'next/image'

import Dropdown from '../container/dropdown'
import EasyDropdown from '../container/easydropdown'
import Drawer_component from '../container/drawer'
import Navigation_dropdown from '../container/navigation_dropdown'
import WindowSize from '../utils/windowsize'
import { CartContext } from '../app/contextApi'
import Cart_Dropdown from '../container/cart_drop'


// import navigation_dropdown from '../container/navigation_dropdown'


function Navbar({ }) {
  const [open, setOpen] = useState(false);
  const [open_Dropdown, setDropdown] = useState(false);


  const { width, height } = WindowSize()
  const { cartItems, addItemToCart, removeItemFromCart, clearCart } = useContext(CartContext);

  return (
    <nav className={`${style_navbar.nav}`}>
      <div>
        <section className={`${style_navbar.top_nav}`} >

          <div className={style_navbar.EasyDropdown}>
            {/* this is where nav bar 2 will  .heart_cart_icon replaced for unautorized user*/}
            <EasyDropdown />

            <div className={style_navbar.heart_cart_icon} style={{ "margin-left": "10px" }}>

              <button>
                תורבחתה
              </button>

              <button>
                הרשמה
              </button>


              <div className={style_navbar.cart_icon}>

                <Cart_Dropdown
                  arrow="47%">
                  <div className={style_navbar.placeholder}></div>

                  <Image
                    loading="lazy"

                    // className={`${style_navbar.jhkh}`}
                    style={{ "margin-left": "5px" }}
                    width={30}
                    height={33}
                    src="/icons/cart.svg"
                    objectFit='contain'
                    alt="Logo"
                  />
                </Cart_Dropdown>


                {cartItems?.length != 0 && (<span className={style_navbar.cart_icon_num}>
                  {cartItems?.length}
                </span>)}

              </div>

              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.85 0.500648C14.481 0.500648 15.111 0.589648 15.71 0.790648C19.401 1.99065 20.731 6.04065 19.62 9.58065C18.99 11.3896 17.96 13.0406 16.611 14.3896C14.68 16.2596 12.561 17.9196 10.28 19.3496L10.03 19.5006L9.77002 19.3396C7.48102 17.9196 5.35002 16.2596 3.40102 14.3796C2.06102 13.0306 1.03002 11.3896 0.390016 9.58065C-0.739983 6.04065 0.590017 1.99065 4.32102 0.769648C4.61102 0.669648 4.91002 0.599648 5.21002 0.560648H5.33002C5.61102 0.519648 5.89002 0.500648 6.17002 0.500648H6.28002C6.91002 0.519648 7.52002 0.629648 8.11102 0.830648H8.17002C8.21002 0.849648 8.24002 0.870648 8.26002 0.889648C8.48102 0.960648 8.69002 1.04065 8.89002 1.15065L9.27002 1.32065C9.36184 1.36962 9.4649 1.44445 9.55397 1.50912C9.61041 1.55009 9.66123 1.58699 9.70002 1.61065C9.71634 1.62028 9.73293 1.62996 9.74965 1.63972C9.83539 1.68977 9.9247 1.74191 10 1.79965C11.111 0.950648 12.46 0.490648 13.85 0.500648ZM16.51 7.70065C16.92 7.68965 17.27 7.36065 17.3 6.93965V6.82065C17.33 5.41965 16.481 4.15065 15.19 3.66065C14.78 3.51965 14.33 3.74065 14.18 4.16065C14.04 4.58065 14.26 5.04065 14.68 5.18965C15.321 5.42965 15.75 6.06065 15.75 6.75965V6.79065C15.731 7.01965 15.8 7.24065 15.94 7.41065C16.08 7.58065 16.29 7.67965 16.51 7.70065Z" fill="#B3BAC3" />
                </svg>
              </span>
            </div>
          </div>





          <div className={style_navbar.top_nav_drawer} style={{ display: 'flex', alignItems: "center" }} >

            <div className={style_navbar.nav_bar_link} style={{ display: 'flex', alignItems: "center", "margin-top": "8px" }}>
              <Link href="#"> קביעת שיעור פרטי </Link>
              <Link href="/affiliates"> המליצו ותרוויחו </Link>
              <Link href="/">ראשי</Link>
            </div>


            <Drawer_component open={open} setOpen={setOpen} />


            <div className={style_navbar.drawer_mobile}>

              <button className={`${style_navbar.drawer}`} onClick={() => setOpen(true)}>
                <Image
                  loading="lazy"

                  width={41}
                  height={41}
                  src="/icons/drawer.svg"
                  objectFit='contain'
                  alt="Logo"
                />
              </button>
              <div className={style_navbar.cart_icon}>
                <Cart_Dropdown
                  arrow="47%">
                  <div className={style_navbar.placeholder}></div>


                  <Image
                    loading="lazy"

                    // className={`${style_navbar.jhkh}`}
                    style={{ "margin-left": "5px" }}
                    width={30}
                    height={33}
                    src="/icons/cart.svg"
                    objectFit='contain'
                    alt="Logo"
                  />
                </Cart_Dropdown>

                {cartItems?.length != 0 && (<span className={style_navbar.cart_icon_num}>
                  {cartItems?.length}
                </span>)}

              </div>




            </div>

            <Link href="/" className={`${style_navbar.logo}`}>
              <Image
                loading="lazy"

                fill
                src="/favicon.png"
                objectFit='contain'
                alt="Logo"
              />
            </Link>


          </div>
        </section>

        <section className={`${style_navbar.bottom_nav}`}>


          {width < 700 ?
            (
              <div className={style_navbar.drop_down_triger} style={{ width: '100%', height: '100%' }} >
                <div className={style_navbar.items} onClick={() => setDropdown(!open_Dropdown)}>

                  <Image
                    loading="lazy"

                    src='/icons/arrow-down-2.svg'
                    width={16}
                    height={16}
                  />
                  <span>

                    בחירת תחום לימוד
                  </span>
                </div>

                <Navigation_dropdown isOpen={open_Dropdown} setIsOpen={setDropdown} />
              </div>
            ) :
            (<>


              <Dropdown
                arrow="47%"
                content={
                  <div className={`${style_navbar.dropdown}`}>
                    <div>
                      <Link href={"/קורסים פופולאריים/אקדמיה"}>
                        <h2> קורסים פופולאריים
                          <Image
                            loading="lazy"

                            width={10}
                            height={10}
                            src="/icons/arrow-left.svg"
                            style={{ marginLeft: "5px" }}
                          />
                        </h2>
                      </Link>
                      <Link href={"/מכינת מתמטיקה - סמסטר ראשון/קורסים פופולאריים/אקדמיה"}> <p>מכינת מתמטיקה - סמסטר ראשון</p>  </Link>
                      <Link href={"/מכינת מתמטיקה - סמסטר שני/קורסים פופולאריים/אקדמיה"}> <p>מכינת מתמטיקה - סמסטר שני</p> </Link>
                      <Link href={"/הכנה למבחן סיווג קבלה לטכניון/קורסים פופולאריים/אקדמיה"}> <p> הכנה למבחן סיווג קבלה לטכניון</p> </Link>
                      <Link href={"/הכנה למבחן כניסה למכינה/קורסים פופולאריים/אקדמיה"}> <p>הכנה למבחן כניסה למכינה </p> </Link>
                    </div>
                    <div>
                      <h1> דכל מוסדות הלימוד </h1>
                      <Link href={"/טכניון/אקדמיה"}>
                        <h2>
                          טכניון
                          <Image
                            loading="lazy"

                            width={10}
                            height={10}
                            src="/icons/arrow-left.svg"
                            style={{ marginLeft: "5px" }}
                          />
                        </h2>
                      </Link>


                      <Link href={"/אוניברסיטת חיפה/טכניון/אקדמיה"}> <p>אוניברסיטת חיפה</p> </Link>
                      <Link href={"/המכללה האקדמית תל חי/טכניון/אקדמיה"}> <p>המכללה האקדמית תל חי</p> </Link>
                      <Link href={"/המכללה האקדמית אורט בראודה/טכניון/אקדמיה"}> <p>המכללה האקדמית אורט בראודה</p> </Link>

                      <Link href={"/תחום לימוד/אקדמיה"}>
                        <h2>  תחום לימוד
                          <Image
                            loading="lazy"

                            width={10}
                            height={10}
                            src="/icons/arrow-left.svg"
                            style={{ marginLeft: "5px" }}
                          />
                        </h2>
                      </Link>
                      <Link href={"/פיסיקה/תחום לימוד/אקדמיה"} > <p>פיסיקה </p> </Link>

                      <Link href={"/מתמטיקה/אקדמיה"}>

                        <h2> מתמטיקה
                          <Image
                            loading="lazy"

                            width={10}
                            height={10}
                            src="/icons/arrow-left.svg"
                            style={{ marginLeft: "5px" }}
                          />
                        </h2>
                      </Link>
                      <Link href={"/אנגלית/מתמטיקה/אקדמיה"}> <p> אנגלית </p> </Link>

                    </div>
                  </div>
                }>
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
                    <path d="M0.827213 0.163933C1.02201 -0.0347736 1.32684 -0.0528378 1.54165 0.10974L1.60319 0.163933L5.99984 4.64894L10.3965 0.163933C10.5913 -0.0347736 10.8961 -0.0528378 11.1109 0.10974L11.1725 0.163933C11.3673 0.362639 11.385 0.673582 11.2256 0.892695L11.1725 0.95547L6.38782 5.83607C6.19302 6.03477 5.8882 6.05284 5.67339 5.89026L5.61185 5.83607L0.827213 0.95547C0.612934 0.736893 0.612934 0.38251 0.827213 0.163933Z" fill="white" />
                  </svg>
                  אקדמיה </p>
              </Dropdown>


              <Dropdown
                className={`${style_navbar.dropdown}`}
                arrow="43%"
                content={
                  <div className={`${style_navbar.dropdown}`}>
                    <div>
                      <Link href={"/קורסים פופולאריים/מכינות "}>
                        <h2> קורסים פופולאריים
                          <Image
                            loading="lazy"

                            width={10}
                            height={10}
                            src="/icons/arrow-left.svg"
                            style={{ marginLeft: "5px" }}
                          />
                        </h2>
                      </Link>
                      <Link href={"/מכינת מתמטיקה - סמסטר ראשון/קורסים פופולאריים/מכינות"}> <p>מכינת מתמטיקה - סמסטר ראשון</p>  </Link>
                      <Link href={"/מכינת מתמטיקה - סמסטר שני/קורסים פופולאריים/מכינות"}> <p>מכינת מתמטיקה - סמסטר שני</p> </Link>
                      <Link href={"/הכנה למבחן סיווג קבלה לטכניון/קורסים פופולאריים/מכינות"}> <p> הכנה למבחן סיווג קבלה לטכניון</p> </Link>
                      <Link href={"/הכנה למבחן כניסה למכינה/קורסים פופולאריים/מכינות"}> <p>הכנה למבחן כניסה למכינה </p> </Link>
                    </div>
                    <div>
                      <h1> דכל מוסדות הלימוד </h1>
                      <Link href={"/טכניון/מכינות "}>
                        <h2>
                          טכניון
                          <Image
                            loading="lazy"

                            width={10}
                            height={10}
                            src="/icons/arrow-left.svg"
                            style={{ marginLeft: "5px" }}
                          />
                        </h2>
                      </Link>


                      <Link href={"/אוניברסיטת חיפה/טכניון/מכינות"}> <p>אוניברסיטת חיפה</p> </Link>
                      <Link href={"/המכללה האקדמית תל חי/טכניון/מכינות"}> <p>המכללה האקדמית תל חי</p> </Link>
                      <Link href={"/המכללה האקדמית אורט בראודה/טכניון/מכינות"}> <p>המכללה האקדמית אורט בראודה</p> </Link>

                      <Link href={"/תחום לימוד/מכינות"}>
                        <h2>  תחום לימוד
                          <Image
                            loading="lazy"

                            width={10}
                            height={10}
                            src="/icons/arrow-left.svg"
                            style={{ marginLeft: "5px" }}
                          />
                        </h2>
                      </Link>
                      <Link href={"/פיסיקה/תחום לימוד/מכינות"}> <p>פיסיקה </p> </Link>


                      <Link href={"/מתמטיקה/מכינות"}>

                        <h2> מתמטיקה
                          <Image
                            loading="lazy"

                            width={10}
                            height={10}
                            src="/icons/arrow-left.svg"
                            style={{ marginLeft: "5px" }}
                          />
                        </h2>
                      </Link>
                      <Link href={"/אנגלית/מתמטיקה/מכינות"}> <p> אנגלית </p> </Link>

                    </div>
                  </div>
                }>
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
                    <path d="M0.827213 0.163933C1.02201 -0.0347736 1.32684 -0.0528378 1.54165 0.10974L1.60319 0.163933L5.99984 4.64894L10.3965 0.163933C10.5913 -0.0347736 10.8961 -0.0528378 11.1109 0.10974L11.1725 0.163933C11.3673 0.362639 11.385 0.673582 11.2256 0.892695L11.1725 0.95547L6.38782 5.83607C6.19302 6.03477 5.8882 6.05284 5.67339 5.89026L5.61185 5.83607L0.827213 0.95547C0.612934 0.736893 0.612934 0.38251 0.827213 0.163933Z" fill="white" />
                  </svg>
                  מכינות</p>
              </Dropdown>


              <Dropdown
                arrow="55%"
                content={
                  <div className={`${style_navbar.dropdown}`}>
                    <div>
                      <Link href={"/קורסים פופולאריים/בגרויות במתמטיקה"}>
                        <h2> קורסים פופולאריים
                          <Image
                            loading="lazy"

                            width={10}
                            height={10}
                            src="/icons/arrow-left.svg"
                            style={{ marginLeft: "5px" }}
                          />
                        </h2>
                      </Link>
                      <Link href={"/מכינת מתמטיקה - סמסטר ראשון/קורסים פופולאריים/בגרויות במתמטיקה"}> <p>מכינת מתמטיקה - סמסטר ראשון</p>  </Link>
                      <Link href={"/מכינת מתמטיקה - סמסטר שני/קורסים פופולאריים/בגרויות במתמטיקה"}> <p>מכינת מתמטיקה - סמסטר שני</p> </Link>
                      <Link href={"/הכנה למבחן סיווג קבלה לטכניון/קורסים פופולאריים/בגרויות במתמטיקה"}> <p> הכנה למבחן סיווג קבלה לטכניון</p> </Link>
                      <Link href={"/הכנה למבחן כניסה למכינה/קורסים פופולאריים/בגרויות במתמטיקה"}> <p>הכנה למבחן כניסה למכינה </p> </Link>
                    </div>
                    <div>
                      <h1> דכל מוסדות הלימוד </h1>
                      <Link href={"/טכניון/בגרויות במתמטיקה"}>
                        <h2>
                          טכניון
                          <Image
                            loading="lazy"

                            width={10}
                            height={10}
                            src="/icons/arrow-left.svg"
                            style={{ marginLeft: "5px" }}
                          />
                        </h2>
                      </Link>

                      <Link href={"/אוניברסיטת חיפה/טכניון/בגרויות במתמטיקה"}> <p>אוניברסיטת חיפה</p> </Link>
                      <Link href={"/המכללה האקדמית תל חי/טכניון/בגרויות במתמטיקה"}> <p>המכללה האקדמית תל חי</p> </Link>
                      <Link href={"/המכללה האקדמית אורט בראודה/טכניון/בגרויות במתמטיקה"}> <p>המכללה האקדמית אורט בראודה</p> </Link>

                      <Link href={"/תחום לימוד/בגרויות במתמטיקה"}>
                        <h2>  תחום לימוד
                          <Image
                            loading="lazy"

                            width={10}
                            height={10}
                            src="/icons/arrow-left.svg"
                            style={{ marginLeft: "5px" }}
                          />
                        </h2>
                      </Link>
                      <Link href={"/פיסיקה/תחום לימוד/בגרויות במתמטיקה"}> <p>פיסיקה </p> </Link>


                      <Link href={"/מתמטיקה/בגרויות במתמטיקה"}>
                        <h2> מתמטיקה
                          <Image
                            loading="lazy"

                            width={10}
                            height={10}
                            src="/icons/arrow-left.svg"
                            style={{ marginLeft: "5px" }}
                          />
                        </h2>
                      </Link>

                      <Link href={"/אנגלית/מתמטיקה/בגרויות במתמטיקה"}>  <p> אנגלית </p> </Link>

                    </div>
                  </div>
                }>
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
                    <path d="M0.827213 0.163933C1.02201 -0.0347736 1.32684 -0.0528378 1.54165 0.10974L1.60319 0.163933L5.99984 4.64894L10.3965 0.163933C10.5913 -0.0347736 10.8961 -0.0528378 11.1109 0.10974L11.1725 0.163933C11.3673 0.362639 11.385 0.673582 11.2256 0.892695L11.1725 0.95547L6.38782 5.83607C6.19302 6.03477 5.8882 6.05284 5.67339 5.89026L5.61185 5.83607L0.827213 0.95547C0.612934 0.736893 0.612934 0.38251 0.827213 0.163933Z" fill="white" />
                  </svg>
                  בגרויות במתמטיקה  </p>
              </Dropdown>


            </>)}

        </section>
      </div>
    </nav>
  )
}

export default Navbar