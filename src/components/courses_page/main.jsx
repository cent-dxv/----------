import React from 'react'

import styles from "@/styles/components/commons.module.scss"
import CustomSwiper from '@/src/container/swiper';
import Card from '@/src/container/card';
import Image from 'next/image'

import result_data from "../../../mok_data"
// import { Swiper, SwiperSlide } from 'swiper/react';


function Course_Main() {





  return (
    <div className={styles.main}>

      <div className={styles.background}>

        <div className={styles.line}>
          <Image
            src="/images/page3/line.png"
            fill
            object-fit="contain"
          />
        </div>




        <div className={styles.dot_background_1}>
          <Image
            src="/images/page3/dot_background.png"
            fill
            object-fit="contain"

          />
        </div>



        <div className={styles.dot_background_2}>
          <Image
            src="/images/page3/dot_background.png"
            fill
            object-fit="contain"

          />


        </div>

        <div className={styles.dot_background_3}>
          <Image
            src="/images/page3/dot_background.png"
            fill
            object-fit="contain"

          />


        </div>




      </div>

      <section className={styles.header}>
        <h1 className={styles.h1}> ןוינכט</h1>
        <h2 className={styles.h2}>הקיטמתמ תניכמ</h2>
      </section>

      <article>
        <div className={styles.title}>
          <p className={styles.seeall}> ← דוע האר</p>
          <h3 className={styles.text}>םיאלמ םיסרוק</h3>
        </div>
        {/* <Card /> */}
        <CustomSwiper data={result_data.sort(function () { return 0.5 - Math.random() })} />


      </article>


      <article>
        <div className={styles.title}>
          <p className={styles.seeall}> ←  דוע האר</p>
          <h3 className={styles.text}>םיאלמ םיסרוק</h3>
        </div>
        <CustomSwiper data={result_data.reverse()} />

      </article>

      <h2 className={styles.h2}>
        הקיזיפ תניכמ
      </h2>

      <article style={{ position: 'relative' }}>
        <div className={styles.title}>
          <p className={styles.seeall}> ←  דוע האר</p>
          <h3 className={styles.text}>םיאלמ םיסרוק</h3>
        </div>

        <CustomSwiper data={result_data.sort(function () { return 0.3 - Math.random() })} />

        <div className={styles.red_line}>
          <Image
            src="/images/page3/red_line.png"
            fill
            object-fit="contain"
          />
        </div>
      </article>




    </div>
  )
}

export default Course_Main