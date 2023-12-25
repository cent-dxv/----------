import React from 'react'

import styles from "@/styles/components/commons.module.scss"
import CustomSwiper from '@/src/container/swiper';
import Card from '@/src/container/card';
import Image from 'next/image'

// import { Swiper, SwiperSlide } from 'swiper/react';


function Course_Main() {


  const result_data = [


    {
      "image_url": "https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "title": "1 רטסמס הקיטמתמ תניכמ",
      "subtitle": "ןושאר",
      "lectureure": "ןהכ זרא",
      "lecturer_img": "https://xsgames.co/randomusers/avatar.php?g=male",
      "rates": "4.8",
      "price": "185.00",

    },
    {
      "image_url": "https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG9ubGluZSUyMGNvdXJzZXxlbnwwfHwwfHx8MA%3D%3D",
      "title": "2 רטסמס הקיטמתמ תניכמ",
      "subtitle": "ןושאר",
      "lectureure": "ןהכ זרא",
      "lecturer_img": "https://xsgames.co/randomusers/avatar.php?g=male",
      "rates": "4.8",
      "price": "185.00",

    }, {
      "image_url": "https://plus.unsplash.com/premium_photo-1661670262286-d6a32dbb3c78?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "title": "3 רטסמס הקיטמתמ תניכמ",
      "subtitle": "ןושאר",
      "lectureure": "ןהכ זרא",
      "lecturer_img": "https://xsgames.co/randomusers/avatar.php?g=male",
      "rates": "4.8",
      "price": "185.00",

    }, {
      "image_url": "https://images.pexels.com/photos/4497761/pexels-photo-4497761.jpeg",
      "title": "4 רטסמס הקיטמתמ תניכמ",
      "subtitle": "ןושאר",
      "lectureure": "ןהכ זרא",
      "lecturer_img": "https://xsgames.co/randomusers/avatar.php?g=male",
      "rates": "4.8",
      "price": "185.00",

    }, {
      "image_url": "https://images.pexels.com/photos/5466193/pexels-photo-5466193.jpeg",
      "title": "5 רטסמס הקיטמתמ תניכמ",
      "subtitle": "ןושאר",
      "lectureure": "ןהכ זרא",
      "lecturer_img": "https://xsgames.co/randomusers/avatar.php?g=male",
      "rates": "4.8",
      "price": "185.00",

    }, {
      "image_url": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "title": "רטסמס הקיטמתמ תניכמ",
      "subtitle": "ןושאר",
      "lectureure": "ןהכ זרא",
      "lecturer_img": "https://xsgames.co/randomusers/avatar.php?g=male",
      "rates": "4.8",
      "price": "185.00",

    }, {
      "image_url": "https://images.pexels.com/photos/4492160/pexels-photo-4492160.jpeg",
      "title": "רטסמס הקיטמתמ תניכמ",
      "subtitle": "ןושאר",
      "lectureure": "ןהכ זרא",
      "lecturer_img": "https://xsgames.co/randomusers/avatar.php?g=male",
      "rates": "4.8",
      "price": "185.00",

    }, {
      "image_url": "https://images.pexels.com/photos/6929206/pexels-photo-6929206.jpeg",
      "title": "רטסמס הקיטמתמ תניכמ",
      "subtitle": "ןושאר",
      "lectureure": "ןהכ זרא",
      "lecturer_img": "https://xsgames.co/randomusers/avatar.php?g=male",
      "rates": "4.8",
      "price": "185.00",

    }, {
      "image_url": "https://images.pexels.com/photos/920382/pexels-photo-920382.jpeg",
      "title": "רטסמס הקיטמתמ תניכמ",
      "subtitle": "ןושאר",
      "lectureure": "ןהכ זרא",
      "lecturer_img": "https://xsgames.co/randomusers/avatar.php?g=male",
      "rates": "4.8",
      "price": "185.00",

    }, {
      "image_url": "https://images.pexels.com/photos/838413/pexels-photo-838413.jpeg",
      "title": "רטסמס הקיטמתמ תניכמ",
      "subtitle": "ןושאר",
      "lectureure": "ןהכ זרא",
      "lecturer_img": "https://xsgames.co/randomusers/avatar.php?g=male",
      "rates": "4.8",
      "price": "185.00",

    }, {
      "image_url": "https://images.pexels.com/photos/4623357/pexels-photo-4623357.jpeg",
      "title": "רטסמס הקיטמתמ תניכמ",
      "subtitle": "ןושאר",
      "lectureure": "ןהכ זרא",
      "lecturer_img": "https://xsgames.co/randomusers/avatar.php?g=male",
      "rates": "4.8",
      "price": "185.00",

    }, {
      "image_url": "https://images.pexels.com/photos/6517343/pexels-photo-6517343.jpeg",
      "title": "רטסמס הקיטמתמ תניכמ",
      "subtitle": "ןושאר",
      "lectureure": "ןהכ זרא",
      "lecturer_img": "https://xsgames.co/randomusers/avatar.php?g=male",
      "rates": "4.8",
      "price": "185.00",

    },
    {
      "image_url": "https://images.pexels.com/photos/6281877/pexels-photo-6281877.jpeg",
      "title": "רטסמס הקיטמתמ תניכמ",
      "subtitle": "ןושאר",
      "lectureure": "ןהכ זרא",
      "lecturer_img": "https://xsgames.co/randomusers/avatar.php?g=male",
      "rates": "4.8",
      "price": "185.00",

    },
    {
      "image_url": "https://images.pexels.com/photos/5553045/pexels-photo-5553045.jpeg",
      "title": "רטסמס הקיטמתמ תניכמ",
      "subtitle": "ןושאר",
      "lectureure": "ןהכ זרא",
      "lecturer_img": "https://xsgames.co/randomusers/avatar.php?g=male",
      "rates": "4.8",
      "price": "185.00",

    },
    {
      "image_url": "https://images.pexels.com/photos/5905748/pexels-photo-5905748.jpeg",
      "title": "רטסמס הקיטמתמ תניכמ",
      "subtitle": "ןושאר",
      "lectureure": "ןהכ זרא",
      "lecturer_img": "https://xsgames.co/randomusers/avatar.php?g=male",
      "rates": "4.8",
      "price": "185.00",

    },
    {
      "image_url": "https://images.unsplash.com/photo-1664574654700-75f1c1fad74e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "title": "רטסמס הקיטמתמ תניכמ",
      "subtitle": "ןושאר",
      "lectureure": "ןהכ זרא",
      "lecturer_img": "https://xsgames.co/randomusers/avatar.php?g=male",
      "rates": "4.8",
      "price": "185.00",

    },
  ]


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

      <article style={{position:'relative'}}>
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