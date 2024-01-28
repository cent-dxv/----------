
"use client"

import React, { useState } from 'react'

import styles from '@/styles/components/footer.module.scss'
import Image from 'next/image'
import Navigation_dropdown from '../container/navigation_dropdown'


function Footer() {


  const [open_Dropdown, setDropdown] = useState(0);



  return (


    <footer>
      <div className={`${styles.first_layer} `}>

        <Image
          loading="lazy"

          className={styles.backgroudn_img}
          src="/images/footer-1.png"
          fill
          objectFit='cover'
          objectPosition='center'
        />

        <div className={styles.first_layer_images}>
          <Image
            loading="lazy"

            src="/images/footer-parteners.png"
            fill
            objectFit='contain'
            objectPosition='center'
          />

        </div>

        <div className={styles.action}>
          <h1>
            םירבחל םיצילממ
          </h1>
          <h1>
            MOK-ב םיחוורמו
          </h1>
          <p>
            ,םינוק םה םאו םירבחל םיצילממ !לקו טושפ ךכ לכ
            <br />
            םתרבצש ףסכב שמתשהל ולכות םיחוורמ םתא
            <br />
            !רתאב סרוק לכ תיינקל
          </p>
          <button className={styles.action_button}>
            וישכע חיוורהל וליחתת
          </button>
        </div>

      </div>

      <div className={`${styles.golden_layer} `}>

        <Image
          loading="lazy"

          className={styles.backgroudn_img}
          src="/images/golden_layer.png"
          fill
          objectFit='cover'
          objectPosition='bottom'
        />

        <h1>
          רשק תריצי
        </h1>

        <form className={styles.contact}>
          <button type="submit" className={styles.contact_dart}>
            חלש
          </button>

          <span className={styles.profile}>
            <input type="tel" placeholder='ןופלט' />

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.24246 2.65514C1.4797 2.26156 2.78764 0.832824 3.71967 0.875956C3.99852 0.899832 4.245 1.06774 4.44528 1.26337H4.44605C4.90513 1.71317 6.22231 3.41071 6.29626 3.76808C6.47881 4.64458 5.43354 5.14984 5.75321 6.03326C6.56816 8.02733 7.97238 9.43142 9.9674 10.2455C10.8501 10.5659 11.3554 9.52153 12.232 9.7033C12.5894 9.77801 14.2879 11.0943 14.737 11.5541V11.5541C14.9318 11.7536 15.1013 12.0008 15.1244 12.2796C15.1591 13.2617 13.6416 14.5872 13.3458 14.7566C12.648 15.2565 11.7375 15.2473 10.6275 14.7312C7.53024 13.4427 2.58043 8.5865 1.26788 5.37243C0.765657 4.26872 0.731765 3.35217 1.24246 2.65514Z" stroke="#8B5609" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M9.92407 1.0625C12.7006 1.37075 14.8928 3.56075 15.2048 6.3365" stroke="#8B5609" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M9.92407 3.71973C11.2516 3.97848 12.2888 5.01573 12.5476 6.34323" stroke="#8B5609" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
          <span>
            <input required type="email" placeholder='ל”אוד' />

            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
              <path d="M12.9507 5.79584L9.75162 8.37154C9.14621 8.84619 8.29753 8.84619 7.69212 8.37154L4.46558 5.79584" stroke="#8B5609" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.1659 1.625H12.2368C13.2564 1.63644 14.2268 2.06745 14.922 2.81765C15.6172 3.56786 15.9766 4.57177 15.9165 5.59559V10.4915C15.9766 11.5153 15.6172 12.5192 14.922 13.2694C14.2268 14.0196 13.2564 14.4506 12.2368 14.4621H5.1659C2.97597 14.4621 1.5 12.6805 1.5 10.4915V5.59559C1.5 3.40659 2.97597 1.625 5.1659 1.625Z" stroke="#8B5609" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
          <span >
            <input type="text" placeholder=' אלמ םש' />
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="17" viewBox="0 0 14 17" fill="none">
              <ellipse cx="6.68411" cy="4.45852" rx="3.58352" ry="3.58352" stroke="#8B5609" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.00001 13.026C0.999049 12.7741 1.05539 12.5253 1.16477 12.2984C1.50802 11.6119 2.47598 11.248 3.27919 11.0833C3.85846 10.9596 4.44573 10.8771 5.03663 10.8361C6.13063 10.74 7.23095 10.74 8.32495 10.8361C8.9158 10.8775 9.50304 10.9601 10.0824 11.0833C10.8856 11.248 11.8536 11.5775 12.1968 12.2984C12.4168 12.761 12.4168 13.298 12.1968 13.7606C11.8536 14.4814 10.8856 14.8109 10.0824 14.9688C9.5038 15.0976 8.91632 15.1825 8.32495 15.2228C7.43453 15.2983 6.53994 15.3121 5.64761 15.264C5.44166 15.264 5.24258 15.264 5.03663 15.2228C4.44747 15.183 3.86224 15.0981 3.28605 14.9688C2.47598 14.8109 1.51489 14.4814 1.16477 13.7606C1.05595 13.531 0.999664 13.2801 1.00001 13.026Z" stroke="#8B5609" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>

          <button type="submit" className={styles.contact_dart_mobile}>
            חלש
          </button>

        </form>

      </div>


      <div className={styles.white_layer}>

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