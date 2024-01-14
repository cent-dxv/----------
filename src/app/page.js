import React from 'react'
import Navbar from '@/components/navbar_2'

import styles from '@/styles/components/home.module.scss'
import Footer from '@/components/footer'
import Image from 'next/image'

function Home() {
  return (
    <>
      <Navbar />

      <div className={styles.landing}>


        <div className={styles.background_img}>
          <Image
            src={"/images/home/bg_pattern.svg"}
            fill
            objectFit='contain'
          />
        </div>

        <Image
          className={styles.student_img}
          src={"/images/home/student.png"}
          fill
          objectFit='contain'
        />

        <div className={styles.header}>
          <h1>קורסים אונליין</h1>
          <h1>לבגרויות, מכינות קדם אקדמיות</h1>
          <h1>ותואר ראשון</h1>
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
            <div>

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
            </div>

          </span>
        </div>
      </div>

      <div className={styles.main}>

        {/* <div className={styles.background}>

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


        </div> */}

      </div>


      <Footer />

    </>
  )
}

export default Home