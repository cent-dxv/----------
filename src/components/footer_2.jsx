
"use client"

import React, { useState } from 'react'

import styles from '@/styles/components/footer.module.scss'
import Image from 'next/image'
import Navigation_dropdown from '../container/navigation_dropdown'


function Footer() {


  const [open_Dropdown, setDropdown] = useState(0);



  return (


    <footer>





      <div className={styles.white_layer_2}>

        <div className={styles.mobile}>


          <div className={`${styles.dropdown__container} `}
            onClick={() => { setDropdown(open_Dropdown != 1 ? 1 : 0) }}
          >
            <button className={styles.dropdown__btn}>
              <Image
                loading="lazy"

                src='/icons/arrow-down-2.svg'
                width={14}
                height={14}
              />
              <span>5 תודיחי</span>

            </button>
            <div className={styles.dropdown__content} style={{ "max-height": open_Dropdown == 1 ? '150px' : '0' }} >
              <p>806 ןולאש</p>
              <p>807 ןולאש</p>
              <p>תואחסונ יפד</p>
            </div>
          </div>

          <div className={`${styles.dropdown__container} `}
            onClick={() => { setDropdown(open_Dropdown != 2 ? 2 : 0) }}
          >
            <button className={styles.dropdown__btn}>
              <Image
                loading="lazy"

                src='/icons/arrow-down-2.svg'
                width={14}
                height={14}
              />
              <span>4 תודיחי</span> </button>
            <div className={styles.dropdown__content} style={{ "max-height": open_Dropdown == 2 ? '150px' : '0' }} >
              <p>Item 1</p>
              <p>Item 2</p>
              <p>Item 3</p>
            </div>
          </div>


          <div className={`${styles.dropdown__container} `}
            onClick={() => { setDropdown(open_Dropdown != 3 ? 3 : 0) }}
          >
            <button className={styles.dropdown__btn}>
              <Image
                loading="lazy"

                src='/icons/arrow-down-2.svg'
                width={14}
                height={14}
              />
              <span>3 תודיחי</span> </button>
            <div className={styles.dropdown__content} style={{ "max-height": open_Dropdown == 3 ? '150px' : '0' }} >
              <p>Item 1</p>
              <p>Item 2</p>
              <p>Item 3</p>
            </div>
          </div>


          <div className={`${styles.dropdown__container} `}
            onClick={() => { setDropdown(open_Dropdown != 4 ? 4 : 0) }}
          >
            <button className={styles.dropdown__btn}>
              <Image
                loading="lazy"

                src='/icons/arrow-down-2.svg'
                width={14}
                height={14}
              />
              <span>הקיטמתמ םדק</span> </button>
            <div className={styles.dropdown__content} style={{ "max-height": open_Dropdown == 4 ? '150px' : '0' }} >
              <p>Item 1</p>
              <p>Item 2</p>
              <p>Item 3</p>
            </div>
          </div>


        </div>








        <div className={styles.list}>
          <span>
            <h1> ישומיש עדימ</h1>
            <p>רתאה ןונקת</p>
            <p>תושיגנ תרהצה</p>
            <p>רתאה תפמ</p>
          </span>

          <span>
            <h1>הימדקא</h1>
            <p>מ1 הרבגלא</p>
            <p>תיראניל הרבגלא</p>
            <p>תיראניל הרבגלא</p>
            <p>ר"דמ </p>
          </span>

          <span>
            <h1>תוניכמ</h1>
            <p> ןוינכט</p>
            <p>ןוירוג ןב</p>
            <p>הדוארב</p>
            <p>ימוחתניב</p>
          </span>

          <span>
            <h1>הקיטמתמ םדק</h1>
            <p>הירטמואיגו הרבגלא םדק</p>

          </span>



          <span>
            <h1> 3 תודיחי</h1>
            <p>803 ןולאש</p>
            <p>תואחסונ יפד</p>
          </span>


          <span>
            <h1>4 תודיחי</h1>
            <p>804 ןולאש</p>
            <p>805 ןולאש</p>
            <p>תואחסונ יפד</p>
            <p>2021  תוניחב ןורתפ</p>
            <p>ץיק תורגב </p>
          </span>



          <span>
            <h1>5 תודיחי</h1>
            <p>806 ןולאש</p>
            <p>807 ןולאש</p>
            <p>תואחסונ יפד</p>
          </span>


        </div>

        <div className={styles.root}>
          <p> הימדקאו תוניכמ ,תויורגבל הנכה - MOK ©  </p>
        </div>


      </div>

    </footer>
  )
}




export default Footer