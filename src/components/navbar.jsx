
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
            {/* dansdlkas */}
            <EasyDropdown />

          </div>
          <div className={style_navbar.top_nav_drawer} style={{ display: 'flex' }} >

            <div className={style_navbar.nav_bar_link} style={{ display: 'flex' }}>
              <Link href="#">יטרפ רועיש תעיבק</Link>
              <Link href="#">MOK - ב ףסכ וחיוורת</Link>
              <Link href="#">ישאר</Link>
            </div>


            <Drawer_component open={open} setOpen={setOpen} />
          

          <div style={{display:'flex'}}>


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
            style={{"margin-left": "5px"}}
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


          {width < 480 ?
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
                arrow="80%"
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
                arrow="80%"
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
                arrow="90%"
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