import React from 'react'

import Navbar from '@/src/components/navbar'
import Footer from '@/src/components/footer'
import styles from '@/styles/components/registration.module.scss'

import Image from 'next/image'

function page() {
  return (
    <>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.banner}>

          <div className={styles.background_pattern}>
            <Image
              src={"/images/home/bg_pattern.svg"}
              fill
              objectFit='cover'
            />
          </div>

          <div className={styles.avatar}>
            <Image
              className={styles.image_1}
              alt="GF"
              src="/images/register/ellipse-46.svg"
              width={1000}
              height={1000}
            // layout="responsive"
            />
          </div>


          <div className={styles.avatar}>
            <Image
              className={styles.image_2}

              alt="GF"
              src="/images/register/ellipse-45.svg"
              width={1000}
              height={1000}
            // layout="responsive"
            />
          </div>


          <div className={styles.avatar}>

            <Image
              className={styles.image_3}
              alt="GF"
              src="/images/register/ellipse-42.svg"
              width={1000}
              height={1000}
            // layout="responsive"
            />
          </div>


          <div className={styles.avatar}>
            <Image
              className={styles.image_4}

              alt="GF"
              src="/images/register/ellipse-41.png"
              width={1000}
              height={1000}
            // layout="responsive"
            />
          </div>



          <div className={styles.avatar}>
            <Image
              className={styles.image_5}

              alt="GF"
              src="/images/register/ellipse-44.svg"
              width={1000}
              height={1000}
            // layout="responsive"
            />
          </div>


          <div className={styles.avatar}>
            <Image
              className={styles.image_6}

              alt="GF"
              src="/images/register/ellipse-43.png"
              width={1000}
              height={1000}
            // layout="responsive"
            />
          </div>

        </div>
        <div className={styles.forms}>

          <h1>
            תצרו חשבון MOK
          </h1>
          <div className={styles.inputs}>

            <input type="text" dir="rtl" placeholder='שם מלא' />
            <input type="text" dir="rtl" placeholder=' אימייל ' />
            <input type="text" dir="rtl" placeholder=' ססמא ' />
            <input type="text" dir="rtl" placeholder='נייד' />
            <button className={styles.action_btn}> הרשמה </button>
            <div>
              <p> אשמח לקבל עדכונים במייל או באמצעי תתקשורת נוספים לגבי חידושים באתר  </p>
              <input type="checkbox" name="" id="" />
            </div>
          </div>


          <p>     ןובשח ךל שי רבכ?   </p>
          <h3> התחברות</h3>
        </div>
      </main>

    </>
  )
}

export default page