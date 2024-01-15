"use client"

import React, { useState, useRef } from 'react'
import Navbar from '@/components/navbar_2'

import styles from '@/styles/components/home.module.scss'
import Footer from '@/components/footer'
import Image from 'next/image'
import CustomSwiper from '@/src/container/swiper';
import style_swiper from '@/styles/components/commons.module.scss'

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

const data = [
  {
    position: { marginLeft: "-390px" },
    heading: "קורסים של תואר ראשון",
    description: `בחלק של מכינות אקדמיות באתר MOK תמצאו קורסים החופפים לקורסי ליבה הנלמדים בתואר הראשון למדעים מדוייקים 
  או תארי הנדסה וכוללים קורסים כמו אלגברה 1מ, אלגברה לינארית, חדוא 1, חדוא 2, אינפי ועוד. 
  הקורסים נועדו כדי להקל על סטודנטים לתואר ראשון להנגיש 
  תכנים הנלמדים באוניברסיטאות ומכללות בצורה של שיעורים מוקלטים, מתוייגים ומסודרים
  אשר מועברים בהתאם לתכניות לימוד של מוסדות להשכלה גבוהה ונלמדים ע”י מרצים בכירים בתעשייה כמו טכניון ואוניברסיטת
  בן גוריון.`,
    carousel: [
      {
        header: "קורסי ליבה",
        list: [
          { title: `מד”ר`, position: { marginLeft: "auto" }, image: "/icons/home/root.png" },
          { title: `אלגברה 1מ`, position: { margin: "auto" }, image: "/icons/home/fx.png" },
          { title: ` אלגברה לינארית `, position: { marginRight: "auto" }, image: "/icons/home/book.png" },
        ]
      }
    ]

  },

  {
    position: { marginLeft: "-50px" },
    heading: "קורסים של מכינות קדם אקדמיות",
    description: `בחלק של מכינות אקדמיות ב-MOK תמצאו קורסים המשפרים את סיכויים להצליח במכינה שלכם על ידי boost נוסף 
  של ארגון החומר לפי סרטוני וידאו מסודרים בהתאם לסילבוס עדכני וייעודי למוסד לימוד שלכם.
  בנוסף תראו קורסים המתאימים לתלמידים הלומדים עצמאית ומנסים לשפר את סיכויי הקבלה שלהם 
  לתואר ראשון לאוניברסטאות, טכניון ומכללות. 
  התכנים כוללים מכינות במתמטיקה, פיסיקה, מבחני סיווג לקבלה למוסדות לימוד  `,
    carousel: [
      {
        header: " אוניברסיטת בן גוריון  ",
        list: [
          { title: `מכינת מתמטיקה - סמסטר ראשון`, position: { marginLeft: "auto" }, image: "/icons/home/fx.png" },
          { title: `מכינת מתמטיקה - תואר שני`, position: { marginLeft: "auto" }, image: "/icons/home/fx.png" },
          { title: ` בחינות סימולציה `, position: { margin: "auto" }, image: "/icons/home/root.png" },
          { title: ` פתרונות  `, position: { marginLeft: "auto" }, image: "/icons/home/tools.png" },
        ]
      },
      {
        header: " טכניון ",
        list: [
          { title: `מכינת מתמטיקה - סמסטר ראשון`, position: { marginLeft: "auto" }, image: "/icons/home/fx.png" },
          { title: `מכינת מתמטיקה - תואר שני  `, position: { marginLeft: "auto" }, image: "/icons/home/fx.png" },
          { title: ` מבחן סיווג קבלה לטכניון `, position: { marginRight: "auto" }, image: "/icons/home/book.png" },
          [{ title: ` פתרונות   `, position: { marginLeft: "auto" }, image: "/icons/home/root.png" },
          { title: ` בחינות סימולציה  `, position: { marginLeft: "auto" }, image: "/icons/home/root.png" },]
        ]
      }
    ]
  },

  {
    position: { marginLeft: "360px" },
    heading: "קורסים של בגרויות במתמטיקה",
    description: `ב תמצאו קורסים אונליין ללימוד כל הרמות במתמטיקה עבור 5, 4, 3 יחידות לימוד בהתאם ים
  העדכנית של משרד החינוך. הקורסים מתאימים הן לתלמידי בית ספר שרוצים לשפר את השליטה שלהם בחומר לפני הבחינה או המתכונת והן
  לחיילים משוחררים שרוצים להעלות את הסכם ולשפר את תעודת הבגרות לקראת שיפור תנאי הקבלה לתואר ראשון.
  הקורסים מועברים ע”י מרצים מוכרים בתעשייה בעלי רקורד עשיר בתחום ולימדו במוסדות הנבחרים במדינה.`,
    carousel: [
      {
        header: " קורס ריענון  ",
        list: [
          { title: `קדם אלגברה וגיאומטריה `, position: { marginLeft: "auto" }, image: "/icons/home/fx.png" },
        ]
      },
      {
        header: "  יחידות  3   ",
        list: [
          { title: `קורס לשאלון 382 (803)`, position: { marginLeft: "auto" }, image: "/icons/home/fx.png" },
        ]
      },
      {
        header: "  4 יחידות ",
        list: [
          { title: `קורס לשאלון 481 (804)`, position: { marginLeft: "auto" }, image: "/icons/home/fx.png" },
          { title: `קורס לשאלון 482 (805)`, position: { marginLeft: "auto" }, image: "/icons/home/fx.png" },
        ]
      },
      {
        header: "  5 יחידות",
        list: [
          { title: `קורס לשאלון 581 (806)`, position: { marginLeft: "auto" }, image: "/icons/home/fx.png" },
          { title: `קורס לשאלון 582 (807)`, position: { marginLeft: "auto" }, image: "/icons/home/fx.png" },
        ]
      }
    ]
  }

]


import result_data from "../../mok_data";
import Course_dropdown from '../container/corse_dropdown'
import Card from '../container/card'
// import Course_dropdown from "@/components/"

function Home() {

  const [tab_items, setActive_tab] = useState(data[1])
  const [sub_active_items, setsub_Active_tab] = useState(3)
  const [open_Dropdown, setDropdown] = useState(false);


  const swiperRef = useRef(null);

  const changeInitialSlide = (newInitialSlide) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(newInitialSlide);
    }
  };


  return (
    <>
      <Navbar />

      <div className={styles.landing}>
        <div className={styles.background_pattern}>
          <Image
            src={"/images/home/bg_pattern.svg"}
            fill
            objectFit='cover'
          />
        </div>

        <div className={styles.student_img}>
          <Image
            src={"/images/home/student_lg.png"}
            fill
            objectFit='contain'
          />

        </div>

        <div className={styles.header}>


          <h1>קורסים אונליין
            <br />
            לבגרויות, מכינות קדם אקדמיות
            <br />
            ותואר ראשון</h1>
          <p>
            םיררחושמ םילייחו תויורגב ירפשמו ימילשמ ,רפס תיב ידימלתל טנרטניאב םידומיל
            <br /> .הקיסיפו הקיטמתמב דומיל תומר לכב
            <br />
            ןושאר ראותל הלבק יאנת רופיש תארקל תוימדקא םדק תוניכמ ידומיל
            <br /> .ההובג הלכשה תודסומב םידמולל הביל יסרוקו תוללכמו תואטיסרבינואל
          </p>


          <button className={styles.action_btn}> !יש לי שאלה </button>

          <span>
            <p>45k+ משתמשים קבועים.</p>


            <div className={styles.profiles}>

              <div className={styles.avatar}>
                <Image
                  alt="affilliates.module.scss"
                  src="https://xsgames.co/randomusers/avatar.php?g=female"
                  width={2250}
                  height={1390}
                // layout="responsive"
                />
              </div>

              <div className={styles.avatar}>
                <Image
                  alt="affilliates.module.scss"
                  src="https://xsgames.co/randomusers/avatar.php?g=male"
                  width={2250}
                  height={1390}
                // layout="responsive"
                />
              </div>

              <div className={styles.avatar}>
                <Image
                  alt="affilliates.module.scss"
                  src="https://xsgames.co/randomusers/avatar.php?g=female"
                  width={2250}
                  height={1390}
                // layout="responsive"
                />
              </div>

              <div className={styles.avatar}>
                <Image
                  alt="affilliates.module.scss"
                  src="https://xsgames.co/randomusers/avatar.php?g=male"
                  width={2250}
                  height={1390}
                // layout="responsive"
                />
              </div>
            </div>



          </span>
        </div>

      </div>


      <section className={styles.section}>


        <div className={styles.background}>
          <Image
            className={styles.first_line}

            src={"/images/home/line_background.png"}
            fill
            objectFit='cover'
          />

        </div>


        <main className={`${style_swiper.main}  ${styles.main}`}>


          <section className={styles.courses}>

            <h1>  מבחר ענק של קורסים אונליין </h1>
            <h2>דומלל וצרתש םוחת ורחבת </h2>

            <div className={styles.tab_bar}>
              <nav>
                <button onClick={() => setActive_tab(data[0])}>תואר ראשון</button>
                <button onClick={() => setActive_tab(data[1])}> מכינות קדם אקדמיות </button>
                <button onClick={() => setActive_tab(data[2])}> הקיטמתמב תויורגב </button>
                <button className={styles.mobile_version} onClick={() => setDropdown(!open_Dropdown)}>  תבחרו תחום שתרצו ללמוד </button>
              </nav>
              <div className={`${styles.arrow} `} style={tab_items?.position}>
                <div className={styles.pointer}></div>
              </div>
              <Course_dropdown isOpen={open_Dropdown} setIsOpen={setDropdown} setActive_tab={setActive_tab} data={data} setsub_Active_tab={changeInitialSlide} />

              {tab_items  && (
              <div className={styles.description}
              style={open_Dropdown ?  {opacity:0.2} : {opacity:1}}
              >

                <div>
                  <h1>{tab_items?.heading}  </h1>
                  <p>
                    {tab_items?.description}
                  </p>
                </div>
              </div>)}


            </div>
          </section>


          {tab_items && (<div className={styles.carousel}>
            {
              <>

                <div className={styles.carousel_descktop}>
                  {tab_items?.carousel.map((item, index) =>
                  (<card key={index} className={styles.card}>
                    <h2>   {item.header} </h2>
                    <div className={styles.horizontal_divider}></div>
                    <ul>
                      {item.list.map((list_item, index) =>
                        Array.isArray(list_item) ?
                          (
                            <span style={{ display: "flex" }}>
                              {list_item.map((li_item) => (
                                <li key={index} style={li_item.position}>
                                  {li_item.title}
                                  <Image src={li_item.image} width={14} height={14} />
                                </li>
                              ))}
                            </span>
                          ) : (
                            <li key={index} style={list_item.position}>
                              {list_item.title}
                              <Image src={list_item.image} width={14} height={14} />
                            </li>
                          )
                      )}

                    </ul>
                    <button className={styles.action_btn}>  צפייה בכל הקורסים  </button>
                  </card>)
                  )}
                </div>

                <Swiper
                  style={{
                    "--swiper-pagination-color": "#F19B1A"
                  }}
                  // initialSlide={0}
                  ref={swiperRef}
                  pagination={{
                    dynamicBullets: true,
                  }}
                  modules={[Pagination]}
                  className={styles.carousel_mobile}>
                  {tab_items?.carousel.map((item, index) => {
                    return (<SwiperSlide>
                      <card key={index}>

                        <h2>   {item.header} </h2>
                        <div className={styles.horizontal_divider}></div>
                        <ul>
                          {item.list.map((list_item, index) =>
                            Array.isArray(list_item) ?
                              (
                                <span style={{ display: "flex" }}>
                                  {list_item.map((li_item) => (
                                    <li key={index} style={li_item.position}>
                                      {li_item.title}
                                      <Image src={li_item.image} width={14} height={14} />
                                    </li>
                                  ))}
                                </span>
                              ) : (
                                <li key={index} style={list_item.position}>
                                  {list_item.title}
                                  <Image src={list_item.image} width={14} height={14} />
                                </li>
                              )
                          )}

                        </ul>
                        <button className={styles.action_btn}>  צפייה בכל הקורסים  </button>
                      </card>
                    </SwiperSlide>)
                  }
                  )}
                </Swiper>

              </>
            }
          </div>)}


          <div className={styles.banner}>
            <h1>תהפכו להיות MOK-ים ותרוויחו</h1>

            <div className={styles.banner_img}>

              <Image
                className={styles.descktop}
                src={"/images/home/banner.png"}
                fill
                objectFit='contain'
              />

              <Image
                className={styles.mobile}
                src={"/images/home/banner_mobile.png"}
                fill
                objectFit='contain'
              />

            </div>

          </div>
        </main>

        <div className={`${style_swiper.main} , ${styles.carousel_swiper}`}>

          <article>
            <div className={style_swiper.title}>
              <button className={style_swiper.seeall}> ←   ראה עוד  </button>
              <h3 className={style_swiper.text}> קורסים מלאים    </h3>
            </div>
            {/* <Card /> */}
            <div className={styles.descktop}>

              <CustomSwiper data={result_data.sort(function () { return 0.5 - Math.random() })} />
            </div>

            <div className={styles.mobile}>
              <Swiper


                className={styles.carousel_mobile}>
                {result_data.sort(function () { return 0.5 - Math.random() }).map((item, index) => {
                  return (<SwiperSlide>
                    <Card key={index} items_data={item} />
                  </SwiperSlide>)
                }
                )}
              </Swiper>

            </div>
          </article>

          <article>
            <div className={style_swiper.title}>
              <button className={style_swiper.seeall}> ←   ראה עוד  </button>
              <h3 className={style_swiper.text}> קורסים מלאים    </h3>
            </div>
            {/* <Card /> */}
            <div className={styles.descktop}>

              <CustomSwiper data={result_data.sort(function () { return 0.5 - Math.random() })} />
            </div>

            <div className={styles.mobile}>
              <Swiper


                className={styles.carousel_mobile}>
                {result_data.sort(function () { return 0.5 - Math.random() }).map((item, index) => {
                  return (<SwiperSlide>
                    <Card key={index} items_data={item} />
                  </SwiperSlide>)
                }
                )}
              </Swiper>

            </div>
          </article>

          <article>
            <div className={style_swiper.title}>
              <button className={style_swiper.seeall}> ←   ראה עוד  </button>
              <h3 className={style_swiper.text}> קורסים מלאים    </h3>
            </div>
            {/* <Card /> */}
            <div className={styles.descktop}>

              <CustomSwiper data={result_data.sort(function () { return 0.5 - Math.random() })} />
            </div>

            <div className={styles.mobile}>
              <Swiper


                className={styles.carousel_mobile}>
                {result_data.sort(function () { return 0.5 - Math.random() }).map((item, index) => {
                  return (<SwiperSlide>
                    <Card key={index} items_data={item} />
                  </SwiperSlide>)
                }
                )}
              </Swiper>

            </div>
          </article>

        </div>

        <div className={styles.full_banner}>

          <div className={styles.background_pattern}>
            <Image
              src={"/images/home/bg_pattern.svg"}
              fill
              objectFit='cover'
            />
          </div>

          <div className={styles.img}>

            <Image
              src={"/images/home/Group72.png"}
              fill
              objectFit='contain'
            />
          </div>

          <div className={styles.description}>
            <h3>
              זה מדהים איך בתוך חודש הצלחתי <br />
              ללמוד יותר מאשר למדתי  בכל <br />
              הסמסטר. תודה רבה לכם על העזרה <br />
            </h3>

            <span>
              <h3>דני מזרחי</h3>
              <p>סטודנט במכינת מתמטיקה בבן גוריון</p>
            </span>
          </div>
        </div>

      </section>


      <section className={styles.showCast}>

        <div className={styles.background2}>
          <Image
            className={styles.line_bg2}
            src={"/images/home/line_bg_2.png"}
            fill
            objectFit='cover'
          />


        </div>


        <h1>  ?תדבוע MOK ךיא </h1>

        <div className={styles.section}>
          <div className={styles.img}>
            <Image
              src={"/images/home/card/Group194.png"}
              fill
              objectFit='contain'
            />
          </div>

          <div className={styles.description}>
            <h1> תתחילו מצפייה חינם בפרקים  </h1>
            <p>
              אנחנו לא רוצים שתקנו חתול בשק, תבחרו כל קורס שמעניין אתכם ותוכלו לראות לגמרי בחינם מספר פרקים שבחרנו בשבילכם מבלי לרכוש את הקורס כדי שתתרשמו מאיכות המרצים ושיטת ההוראה שלנו
            </p>

            <span>
              <button className={styles.action_btn}>  צפו בקורסים  </button>
              <button className={styles.action_btn}>  תמליצו ותרוויחו  </button>
            </span>
          </div>
        </div>

        <div className={styles.section}>


          <div className={styles.description}>
            <h1> למדו עם ספרים דיגיטליים מותאמים  <br /> לקנייה </h1>
            <p>
              לא בטוחים לכמה זמן תצטרכו גישה לקורס? נותנים לכם גמישות בגישה לקורסים שלנו בהתאם לצרכים שלכם כדי שלא תצטרכו להתחייב ולשלם יותר סתם
            </p>

            <span>
              <button className={styles.action_btn}>  צפו בקורסים  </button>
              <button className={styles.action_btn}>  תמליצו ותרוויחו  </button>
            </span>
          </div>
          <div className={styles.img}>
            <Image
              src={"/images/home/card/Group199.png"}
              fill
              objectFit='contain'
            />
          </div>

        </div>

        <div className={styles.section}>
          <div className={styles.img}>
            <Image
              src={"/images/home/card/Group200.png"}
              fill
              objectFit='contain'
            />
          </div>

          <div className={styles.description}>
            <h1> ביצוע סימולציות לפני הבחינה  <br />  ותרוויחו  </h1>
            <p>
              you’re good to go. תחזיקו אצבעות עד שאותו חבר יקנה את הקורס! כי כשהוא קונה, אתם מרווחים... כן כן, ממש ככה            </p>

            <span>
              <button className={styles.action_btn}>  צפו בקורסים  </button>
              <button className={styles.action_btn}>  תמליצו ותרוויחו  </button>
            </span>
          </div>
        </div>

        <div className={styles.section}>



          <div className={styles.description}>
            <h1> עקבו בפאנל אישי אחרי כל  <br />   הקורסים שלכם  </h1>
            <p>
              תוכלו לעקוב בצורה פשוטה אחרי כל הקורסים ששיתפתם, לראות את הסטטוס שלהם, אם החבר שלכם קנה את הקורס ולראות כמה צברתם למימוש באתר            </p>

            <span>
              <button className={styles.action_btn}>  צפו בקורסים  </button>
              <button className={styles.action_btn}>  תמליצו ותרוויחו  </button>
            </span>
          </div>
          <div className={styles.img}>
            <Image
              src={"/images/home/card/Group201.png"}
              fill
              objectFit='contain'
            />
          </div>

        </div>

      </section>

      <Footer />

    </>
  )
}

export default Home