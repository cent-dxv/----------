
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

          <div className={style_navbar.heart_cart_icon}>

            <button>
              תורבחתה
            </button>

            <button>
              הרשמה
            </button>

            <Image
              className={`${style_navbar.jhkh}`}
              style={{ "margin-left": "5px" }}
              width={30}
              height={33}
              src="/icons/cart.svg"
              objectFit='contain'
              alt="Logo"
            />
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.85 0.500648C14.481 0.500648 15.111 0.589648 15.71 0.790648C19.401 1.99065 20.731 6.04065 19.62 9.58065C18.99 11.3896 17.96 13.0406 16.611 14.3896C14.68 16.2596 12.561 17.9196 10.28 19.3496L10.03 19.5006L9.77002 19.3396C7.48102 17.9196 5.35002 16.2596 3.40102 14.3796C2.06102 13.0306 1.03002 11.3896 0.390016 9.58065C-0.739983 6.04065 0.590017 1.99065 4.32102 0.769648C4.61102 0.669648 4.91002 0.599648 5.21002 0.560648H5.33002C5.61102 0.519648 5.89002 0.500648 6.17002 0.500648H6.28002C6.91002 0.519648 7.52002 0.629648 8.11102 0.830648H8.17002C8.21002 0.849648 8.24002 0.870648 8.26002 0.889648C8.48102 0.960648 8.69002 1.04065 8.89002 1.15065L9.27002 1.32065C9.36184 1.36962 9.4649 1.44445 9.55397 1.50912C9.61041 1.55009 9.66123 1.58699 9.70002 1.61065C9.71634 1.62028 9.73293 1.62996 9.74965 1.63972C9.83539 1.68977 9.9247 1.74191 10 1.79965C11.111 0.950648 12.46 0.490648 13.85 0.500648ZM16.51 7.70065C16.92 7.68965 17.27 7.36065 17.3 6.93965V6.82065C17.33 5.41965 16.481 4.15065 15.19 3.66065C14.78 3.51965 14.33 3.74065 14.18 4.16065C14.04 4.58065 14.26 5.04065 14.68 5.18965C15.321 5.42965 15.75 6.06065 15.75 6.75965V6.79065C15.731 7.01965 15.8 7.24065 15.94 7.41065C16.08 7.58065 16.29 7.67965 16.51 7.70065Z" fill="#B3BAC3" />
              </svg>
            </span>
          </div>



          <div className={style_navbar.top_nav_drawer} style={{ display: 'flex', alignItems: "center" }} >

            <div className={style_navbar.nav_bar_link} style={{ display: 'flex', alignItems: "center", "margin-top": "8px" }}>
              <Link href="#">יטרפ רועיש תעיבק</Link>
              <Link href="#">MOK - ב ףסכ וחיוורת</Link>
              <Link href="#">ישאר</Link>
            </div>


            <Drawer_component open={open} setOpen={setOpen} />


            <div style={{ display: 'flex' }}>


              <button className={`${style_navbar.drawer}`} onClick={() => setOpen(true)}>
                <Image
                  width={41}
                  height={41}
                  src="/icons/drawer.svg"
                  objectFit='contain'
                  alt="Logo"
                />
              </button>
              <Image
                className={`${style_navbar.drawer}`}
                style={{ "margin-left": "5px" }}
                width={40}
                height={40}
                src="/icons/cart.svg"
                objectFit='contain'
                alt="Logo"
              />


            </div>

            <p className={`${style_navbar.logo}`}>
              <Image
                fill
                src="/favicon.png"
                objectFit='contain'
                alt="Logo"
              />
            </p>
          </div>
        </section>

        <section className={`${style_navbar.bottom_nav}`}>


          {width < 700 ?
            (
              <div className={style_navbar.drop_down_triger} style={{ width: '100%', height: '100%' }} onClick={() => setDropdown(!open_Dropdown)}>
                <div className={style_navbar.items}>

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
                <p>הימדקא</p>
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
                      <p>תילגנא</p>

                    </div>
                  </div>
                }>
                <p>תוניכמ</p>
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
                <p> הקיטמתמב תויורגב</p>
              </Dropdown>
            </>)}










        </section>
      </div>
    </nav>
  )
}

export default Navbar