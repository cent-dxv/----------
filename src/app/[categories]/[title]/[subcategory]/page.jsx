import Image from 'next/image'
import styles from "@/styles/components/commons.module.scss"
// import Course_Main from '../components/main'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import CustomSwiper from '@/src/container/swiper';


import result_data from "../../../../../mok_data"

export default function Categories({ params }) {
  console.log( "\n" *5 , "===" *10 , decodeURIComponent(params.title)  , decodeURIComponent(params.categories),  "===" *10 , "\n" *5 ,  )
  return (
    <>
      <div className={``}>
        <Navbar />
        <div className={styles.main}>

          <div className={styles.background}>

            <div className={styles.line}>
              <Image
                src="/images/background/line.png"
                fill
                object-fit="contain"
              />
            </div>

            <div className={styles.dot_background_1}>
              <Image
                src="/images/background/dot_background.png"
                fill
                object-fit="contain"

              />
            </div>



            <div className={styles.dot_background_2}>
              <Image
                src="/images/background/dot_background.png"
                fill
                object-fit="contain"

              />


            </div>

            <div className={styles.dot_background_3}>
              <Image
                src="/images/background/dot_background.png"
                fill
                object-fit="contain"

              />


            </div>

          </div>

          <section className={styles.header}>
            <h1 className={styles.h1}> {decodeURIComponent(params.categories)}  </h1>
            <h2 className={styles.h2}>   מכינת מתמטיקה </h2>
          </section>

          <article>
            <div className={styles.title}>
              <button className={styles.seeall}> ←   ראה עוד  </button>
              <h3 className={styles.text}> קורסים מלאים    </h3>
            </div>
            {/* <Card /> */}
            <CustomSwiper data={result_data.sort(function () { return 0.5 - Math.random() })} />
          </article>


          <article>
            <div className={styles.title}>
              <p className={styles.seeall}> ←   ראה עוד  </p>
              <h3 className={styles.text}>  מבחנים וסימולציות    </h3>
            </div>
            <CustomSwiper data={result_data.reverse()} />

          </article>

          <h2 className={styles.h2}>
            מכינת פיזיקה
          </h2>

          <article style={{ position: 'relative' }}>
            <div className={styles.title}>
              <p className={styles.seeall}> ←  ראה עוד  </p>
              <h3 className={styles.text}>  קורסים מלאים    </h3>
            </div>

            <CustomSwiper data={result_data.sort(function () { return 0.3 - Math.random() })} />

            <div className={styles.red_line}>
              <Image
                src="/images/background/red_line.png"
                fill
                object-fit="contain"
              />
            </div>
          </article>
        </div>
      </div>
      <Footer />


    </>
  )
}
