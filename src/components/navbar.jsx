
"use client"

import React, { useState } from 'react'
import style_navbar from '@/styles/components/navbar.module.scss'
import Link from 'next/link'
import Image from 'next/image'

import Dropdown from '../container/dropdown'
import EasyDropdown from '../container/easydropdown'
import Drawer_component from '../container/drawer'
import Navigation_dropdown from '../container/navigation_dropdown'
import WindowSize from '../utils/windowsize'

// import navigation_dropdown from '../container/navigation_dropdown'


function Navbar() {
  const [open, setOpen] = useState(false);
  const [open_Dropdown, setDropdown] = useState(false);

  const { width, height } = WindowSize()

  return (
    <nav className={`${style_navbar.nav}`}>
      <div>
        <section className={`${style_navbar.top_nav}`} >
          <div className={style_navbar.EasyDropdown}>
            {/* this is where nav bar 2 will  .heart_cart_icon replaced for unautorized user*/}
            <EasyDropdown />

          </div>



          <div className={style_navbar.top_nav_drawer} style={{ display: 'flex', alignItems: "center" }} >

            <div className={style_navbar.nav_bar_link} style={{ display: 'flex', alignItems: "center", "margin-top": "8px" }}>
              <Link href="#">יטרפ רועיש תעיבק</Link>
              <Link href="#">MOK - ב ףסכ וחיוורת</Link>
              <Link href="/">ישאר</Link>
            </div>


            <Drawer_component open={open} setOpen={setOpen} />


            <div style={{ display: 'flex' }}>


              <button className={`${style_navbar.drawer}`} onClick={() => setOpen(true)}>
                <Image
                  width={41}
                  height={41}
                  src="/icons/drawer.svg"
                  objectFit='contain'
                  alt="drawer"
                />
              </button>
              <Image
                className={`${style_navbar.drawer}`}
                style={{ "margin-left": "5px" }}
                width={40}
                height={40}
                src="/icons/cart.svg"
                objectFit='contain'
                alt="cart"
              />


            </div>


            <Link href="/" className={`${style_navbar.logo}`}>
              <Image
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
                      <h2>םייראלופופ םיסרוק
                        <Image
                          width={10}
                          height={10}
                          src="/icons/arrow-left.svg"
                          style={{ marginLeft: "5px" }}
                        />
                      </h2>
                      <p>ןושאר רטסמס - הקיטמתמ תניכמ</p>
                      <p> ינש רטסמס - הקיטמתמ תניכמ</p>
                      <p>ןוינכטל הלבק גוויס ןחבמל הנכה </p>
                      <p> הניכמל הסינכ ןחבמל הנכה</p>
                    </div>
                    <div>
                      <h1> דכל מוסדות הלימוד </h1>
                      <h2>ןוינכט

                        <Image
                          width={10}
                          height={10}
                          src="/icons/arrow-left.svg"
                          style={{ marginLeft: "5px" }}
                        />
                      </h2>
                      <p>הפיח תטיסרבינוא</p>
                      <p>יח לת תימדקאה הללכמה</p>
                      <p>הדוארב טרוא תימדקאה הללכמה</p>

                      <h2>דומיל םוחת
                        <Image
                          width={10}
                          height={10}
                          src="/icons/arrow-left.svg"
                          style={{ marginLeft: "5px" }}
                        />
                      </h2>
                      <p>הקיסיפ </p>

                      <h2> הקיטמתמ
                        <Image
                          width={10}
                          height={10}
                          src="/icons/arrow-left.svg"
                          style={{ marginLeft: "5px" }}
                        />
                      </h2>
                      <p>תילגנא</p>

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
                      <h2>םייראלופופ םיסרוק
                        <Image
                          width={10}
                          height={10}
                          src="/icons/arrow-left.svg"
                          style={{ marginLeft: "5px" }}
                        />
                      </h2>
                      <p>ןושאר רטסמס - הקיטמתמ תניכמ</p>
                      <p> ינש רטסמס - הקיטמתמ תניכמ</p>
                      <p>ןוינכטל הלבק גוויס ןחבמל הנכה </p>
                      <p> הניכמל הסינכ ןחבמל הנכה</p>
                    </div>
                    <div>
                      <h1> דכל מוסדות הלימוד </h1>
                      <h2>ןוינכט

                        <Image
                          width={10}
                          height={10}
                          src="/icons/arrow-left.svg"
                          style={{ marginLeft: "5px" }}
                        />
                      </h2>
                      <p>הפיח תטיסרבינוא</p>
                      <p>יח לת תימדקאה הללכמה</p>
                      <p>הדוארב טרוא תימדקאה הללכמה</p>

                      <h2>דומיל םוחת
                        <Image
                          width={10}
                          height={10}
                          src="/icons/arrow-left.svg"
                          style={{ marginLeft: "5px" }}
                        />
                      </h2>
                      <p>הקיסיפ </p>

                      <h2> הקיטמתמ
                        <Image
                          width={10}
                          height={10}
                          src="/icons/arrow-left.svg"
                          style={{ marginLeft: "5px" }}
                        />
                      </h2>
                      <p> מכינות </p>

                    </div>
                  </div>
                }>
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
                    <path d="M0.827213 0.163933C1.02201 -0.0347736 1.32684 -0.0528378 1.54165 0.10974L1.60319 0.163933L5.99984 4.64894L10.3965 0.163933C10.5913 -0.0347736 10.8961 -0.0528378 11.1109 0.10974L11.1725 0.163933C11.3673 0.362639 11.385 0.673582 11.2256 0.892695L11.1725 0.95547L6.38782 5.83607C6.19302 6.03477 5.8882 6.05284 5.67339 5.89026L5.61185 5.83607L0.827213 0.95547C0.612934 0.736893 0.612934 0.38251 0.827213 0.163933Z" fill="white" />
                  </svg>
                  תוניכמ</p>
              </Dropdown>


              <Dropdown
                arrow="55%"
                content={
                  <div className={`${style_navbar.dropdown}`}>
                    <div>
                      <h2>םייראלופופ םיסרוק
                        <Image
                          width={10}
                          height={10}
                          src="/icons/arrow-left.svg"
                          style={{ marginLeft: "5px" }}
                        />
                      </h2>
                      <p>ןושאר רטסמס - הקיטמתמ תניכמ</p>
                      <p> ינש רטסמס - הקיטמתמ תניכמ</p>
                      <p>ןוינכטל הלבק גוויס ןחבמל הנכה </p>
                      <p> הניכמל הסינכ ןחבמל הנכה</p>
                    </div>
                    <div>
                      <h1> דכל מוסדות הלימוד </h1>
                      <h2>ןוינכט

                        <Image
                          width={10}
                          height={10}
                          src="/icons/arrow-left.svg"
                          style={{ marginLeft: "5px" }}
                        />
                      </h2>
                      <p>הפיח תטיסרבינוא</p>
                      <p>יח לת תימדקאה הללכמה</p>
                      <p>הדוארב טרוא תימדקאה הללכמה</p>

                      <h2>דומיל םוחת
                        <Image
                          width={10}
                          height={10}
                          src="/icons/arrow-left.svg"
                          style={{ marginLeft: "5px" }}
                        />
                      </h2>
                      <p>הקיסיפ </p>

                      <h2> הקיטמתמ
                        <Image
                          width={10}
                          height={10}
                          src="/icons/arrow-left.svg"
                          style={{ marginLeft: "5px" }}
                        />
                      </h2>
                      <p>תילגנא</p>

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