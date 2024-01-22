'use client'
import Footer from '@/src/components/footer'
import Navbar from '@/src/components/navbar_2'
import React, { useState } from 'react'

import styles from '@/styles/components/teacher_page.module.scss'
import page_status_style from '@/styles/components/course_detail_page.module.scss'

import Image from 'next/image'
import { Progress } from 'antd';

function Tearcher_page() {
  const [Seemore, setSeeless] = useState(false);
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

        <div className={styles.teacher_description}>
          <span>
            <h1>ארז כהן</h1>
            <p>מרצה בכיר במתמטיקה</p>
          </span>

          <h3>אודות המרצה</h3>
          <p>מרצה בכיר במתמטיקה בעל 25 שנות ותק בתחום אשר הכין מאות אלפי תלמידים ברחבי הארץ להצלחה לבגרויות במתמטיקה\
            לאורך השנים כתב עשרות ספרים של רשת אנקורי ולימד במוסדות המוכרים בארץ, כמו הטכניון. </p>
          <section>

            <div>
              <p className={styles.price}> ₪ 185.00</p>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                  <path d="M12.25 1.375L7 6.625L1.75 1.375" stroke="#200E32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                שיעור אישי
              </button>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                  <path d="M12.25 1.375L7 6.625L1.75 1.375" stroke="#200E32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                שיעורים
              </button>
            </div>

            <button className={styles.action_btn}> להירשם לקורס </button>


          </section>

        </div>
        <div className={styles.teacher_img}>
          <Image
            src={'/images/page1/teacher_img.png'}
            fill
            objectFit='cover'
          />

        </div>
      </div>

      <main className={styles.main}>
      <div className={`${page_status_style.status} , ${Seemore && page_status_style.status_extend}`} >
            <h1>המלצות תלמידים</h1>
            <h2>התלמידים שלנו ממליצים על המורה הזה</h2>

            <div className={page_status_style.status_bar}>
              <span className={page_status_style.Progress}>
                <div> <p className={page_status_style.percent}>30% </p> <Progress className={page_status_style.progrss_bar} strokeColor="#0E695C" percent={30} showInfo={false} status="active" />   <p>    מְעוּלֶה     </p> </div>
                <div> <p className={page_status_style.percent}>50% </p> <Progress className={page_status_style.progrss_bar} strokeColor="#0E695C" percent={50} showInfo={false} status="active" />   <p>    טוב מאוד  </p> </div>
                <div> <p className={page_status_style.percent}>70% </p> <Progress className={page_status_style.progrss_bar} strokeColor="#0E695C" percent={70} showInfo={false} status="active" />   <p>    מְמוּצָע     </p> </div>
                <div> <p className={page_status_style.percent}>100% </p> <Progress className={page_status_style.progrss_bar} strokeColor="#0E695C" percent={100} showInfo={false} status="active" /> <p>   עני        </p> </div>
                <div> <p className={page_status_style.percent}>50% </p> <Progress className={page_status_style.progrss_bar} strokeColor="#0E695C" percent={50} showInfo={false} status="active" />  <p>    נורא      </p> </div>
              </span>

              <span className={page_status_style.rating}>
                <h1> 5</h1>
                <div>

                  {Array(2).fill().map((_, i) => (<>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                      <path d="M12.8457 9.59434C12.6506 9.78343 12.561 10.0569 12.6054 10.3251L13.2751 14.0315C13.3316 14.3456 13.199 14.6635 12.9361 14.8451C12.6785 15.0334 12.3357 15.056 12.0547 14.9053L8.71822 13.1651C8.60221 13.1034 8.47339 13.0702 8.34155 13.0665H8.1374C8.06659 13.077 7.99728 13.0996 7.934 13.1343L4.59674 14.8827C4.43176 14.9656 4.24493 14.995 4.06187 14.9656C3.6159 14.8812 3.31833 14.4564 3.3914 14.0081L4.06187 10.3017C4.10632 10.0313 4.01667 9.75631 3.82156 9.56421L1.10127 6.92754C0.873762 6.70681 0.794662 6.37535 0.898622 6.07627C0.999569 5.77795 1.25721 5.56024 1.56834 5.51127L5.3124 4.96812C5.59716 4.93874 5.84727 4.76547 5.97534 4.50934L7.62513 1.12687C7.66431 1.05154 7.71478 0.982235 7.7758 0.923475L7.8436 0.870741C7.87901 0.831568 7.91969 0.799175 7.96489 0.772808L8.047 0.742675L8.17507 0.689941H8.49222C8.77547 0.719321 9.02483 0.888821 9.15515 1.14194L10.8268 4.50934C10.9473 4.75568 11.1816 4.92669 11.4521 4.96812L15.1961 5.51127C15.5125 5.55647 15.777 5.77494 15.8817 6.07627C15.9804 6.37836 15.8952 6.70983 15.6632 6.92754L12.8457 9.59434Z" fill="#F7AC3E" />
                    </svg>
                  </>))}
                </div>
                <p> 12 ביקורות </p>
              </span>

            </div>

            {Array(4).fill().map((data, index) => (<>
              <div className={`${page_status_style.profile} , ${index > 1 ? page_status_style.seemore_overflow : ''} `}>

                <div className=''>
                  <span className={page_status_style.name_rate}>
                    <h3> דני מזרחי  </h3>
                    <span>
                      {Array(5).fill().map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                          <path d="M13.9317 9.9335C13.7159 10.1427 13.6167 10.4452 13.6659 10.7418L14.4067 14.8418C14.4692 15.1893 14.3226 15.541 14.0317 15.7418C13.7467 15.9502 13.3676 15.9752 13.0567 15.8085L9.36591 13.8835C9.23758 13.8152 9.09508 13.7785 8.94925 13.7743H8.72341C8.64508 13.786 8.56841 13.811 8.49841 13.8493L4.80675 15.7835C4.62425 15.8752 4.41758 15.9077 4.21508 15.8752C3.72175 15.7818 3.39258 15.3118 3.47341 14.816L4.21508 10.716C4.26425 10.4168 4.16508 10.1127 3.94925 9.90016L0.940079 6.9835C0.688412 6.73933 0.600912 6.37266 0.715912 6.04183C0.827579 5.71183 1.11258 5.471 1.45675 5.41683L5.59841 4.816C5.91341 4.7835 6.19008 4.59183 6.33175 4.3085L8.15674 0.566829C8.20008 0.483496 8.25591 0.406829 8.32341 0.341829L8.39841 0.283496C8.43758 0.240163 8.48258 0.204329 8.53258 0.175163L8.62341 0.141829L8.76508 0.0834961H9.11591C9.42924 0.115996 9.70508 0.303496 9.84925 0.583496L11.6984 4.3085C11.8317 4.581 12.0909 4.77016 12.3901 4.816L16.5317 5.41683C16.8817 5.46683 17.1742 5.7085 17.2901 6.04183C17.3992 6.376 17.3051 6.74266 17.0484 6.9835L13.9317 9.9335Z" fill="#F7AC3E" />
                        </svg>
                      ))}
                    </span>
                  </span>
                  <div className={page_status_style.avatar}>
                    <Image
                      alt="AV"
                      src="https://xsgames.co/randomusers/avatar.php?g=male"
                      width={2250}
                      height={1390}
                    // layout="responsive"
                    />
                  </div>
                </div>
                <p>
                  לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף.
                </p>
              </div>

              {index != 3 && <div className={`${page_status_style.horizontal_divider} ${index > 0 && page_status_style.seemore_overflow}`}   ></div>}


            </>))}

            <button className={page_status_style.seemore} onClick={() => setSeeless(!Seemore)}>
              <svg style={{ transform: Seemore ? "rotate(180deg)" : "" }} xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                <path d="M15 1.5L8 8.5L1 1.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              לראות עוד המלצות

            </button>

          </div>

      </main>

      <Footer />
    </>
  )
}

export default Tearcher_page