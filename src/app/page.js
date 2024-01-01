import React from 'react'
import Navbar from '../components/navbar_2'

import styles from '@/styles/components/home_page.module.scss'
import Footer from '../components/footer'
import Image from 'next/image'

function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.main}>

        <div className={styles.background}>

        <Image className={styles.line}
              src="/images/background/Group98.png"
              fill
              object-fit="contain"

            />

     

          <div className={styles.dot_background_1}>
            <Image
              src="/images/background/dot_page1.png"
              fill
              object-fit="contain"

            />
          </div>


          <div className={styles.dot_background_2}>
            <Image
              src="/images/background/dot_bg.png"
              fill
              object-fit="contain"

            />
          </div>


        </div>


        <h1>  םתאש םיצרמה םע םייטרפ םירועיש </h1>
        <h1>   רואים בקורסים אונליין </h1>



        <ul>


          <card className={styles.card}>
            <h2>ארז כהן</h2>
            <p>  ןוינכטה תמגוד ,ץראב םיבשחנ תודסומב דמלמ ,ירוקנא לש דומיל ירפס רבחמ .םוחתב ןויסינ תונש 20 לעמ םע ריכב הצרמ</p>
            <button>תמליצו ותרוויחו </button>

            <div className={styles.card_img}>
              <Image
                src="/images/page1/card_img1.png"
                fill
                objectFit='contain'

              />
            </div>
          </card>

          <card className={styles.card}>
            <h2>  עידו מרבך </h2>
            <p>  ןוינכטה תמגוד ,ץראב םיבשחנ תודסומב דמלמ ,ירוקנא לש דומיל ירפס רבחמ .םוחתב ןויסינ תונש 20 לעמ םע ריכב הצרמ  </p>
            <button> תמליצו ותרוויחו </button>

            <div className={styles.card_img}>
              <Image
                src="/images/page1/card_img2.png"
                fill
                objectFit='contain'
              />
            </div>

          </card>

          <card className={styles.card}>
            <h2>ארז כהן</h2>
            <p>  ןוינכטה תמגוד ,ץראב םיבשחנ תודסומב דמלמ ,ירוקנא לש דומיל ירפס רבחמ .םוחתב ןויסינ תונש 20 לעמ םע ריכב הצרמ</p>
            <button>תמליצו ותרוויחו </button>

            <div className={styles.card_img}>
              <Image
                src="/images/page1/card_img3.png"
                fill
                objectFit='contain'

              />
            </div>

          </card>

        </ul>


      </div>


      <Footer />

    </>
  )
}

export default Home