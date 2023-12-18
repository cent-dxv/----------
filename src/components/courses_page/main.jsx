import React from 'react'

import styles from "@/styles/components/commons.module.scss"
import CustomSwiper from '@/src/container/swiper';
import Card from '@/src/container/card';

// import { Swiper, SwiperSlide } from 'swiper/react';


function Course_Main() {


  const result_data = [


    {
      "image_url": "https://images.unsplash.com/photo-1664574654700-75f1c1fad74e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "image_url": "https://images.unsplash.com/photo-1664574654700-75f1c1fad74e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "title": "4 רטסמס הקיטמתמ תניכמ",
      "subtitle": "ןושאר",
      "lectureure": "ןהכ זרא",
      "lecturer_img": "https://xsgames.co/randomusers/avatar.php?g=male",
      "rates": "4.8",
      "price": "185.00",

    }, {
      "image_url": "https://images.unsplash.com/photo-1664574654700-75f1c1fad74e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "image_url": "https://images.unsplash.com/photo-1664574654700-75f1c1fad74e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "title": "רטסמס הקיטמתמ תניכמ",
      "subtitle": "ןושאר",
      "lectureure": "ןהכ זרא",
      "lecturer_img": "https://xsgames.co/randomusers/avatar.php?g=male",
      "rates": "4.8",
      "price": "185.00",

    }, {
      "image_url": "https://images.unsplash.com/photo-1664574654700-75f1c1fad74e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "title": "רטסמס הקיטמתמ תניכמ",
      "subtitle": "ןושאר",
      "lectureure": "ןהכ זרא",
      "lecturer_img": "https://xsgames.co/randomusers/avatar.php?g=male",
      "rates": "4.8",
      "price": "185.00",

    }, {
      "image_url": "https://images.unsplash.com/photo-1664574654700-75f1c1fad74e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "title": "רטסמס הקיטמתמ תניכמ",
      "subtitle": "ןושאר",
      "lectureure": "ןהכ זרא",
      "lecturer_img": "https://xsgames.co/randomusers/avatar.php?g=male",
      "rates": "4.8",
      "price": "185.00",

    }, {
      "image_url": "https://images.unsplash.com/photo-1664574654700-75f1c1fad74e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "title": "רטסמס הקיטמתמ תניכמ",
      "subtitle": "ןושאר",
      "lectureure": "ןהכ זרא",
      "lecturer_img": "https://xsgames.co/randomusers/avatar.php?g=male",
      "rates": "4.8",
      "price": "185.00",

    }, {
      "image_url": "https://images.unsplash.com/photo-1664574654700-75f1c1fad74e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "title": "רטסמס הקיטמתמ תניכמ",
      "subtitle": "ןושאר",
      "lectureure": "ןהכ זרא",
      "lecturer_img": "https://xsgames.co/randomusers/avatar.php?g=male",
      "rates": "4.8",
      "price": "185.00",

    }, {
      "image_url": "https://images.unsplash.com/photo-1664574654700-75f1c1fad74e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    {
      "image_url": "https://images.unsplash.com/photo-1664574654700-75f1c1fad74e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    <div>

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
        <CustomSwiper data={result_data} />


      </article>


      <article>
        <div className={styles.title}>
          <p className={styles.seeall}> ←  דוע האר</p>
          <h3 className={styles.text}>םיאלמ םיסרוק</h3>
        </div>
        <CustomSwiper data={result_data} />

      </article>

      <h2 className={styles.h2}>
        הקיזיפ תניכמ
      </h2>

      <article>
        <div className={styles.title}>
          <p className={styles.seeall}> ←  דוע האר</p>
          <h3 className={styles.text}>םיאלמ םיסרוק</h3>
        </div>

        <CustomSwiper data={result_data} />

      </article>



    </div>
  )
}

export default Course_Main