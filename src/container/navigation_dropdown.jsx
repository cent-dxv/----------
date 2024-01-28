import React, { useState } from 'react'

import styles from '@/styles/container/navigation_dropdown.module.scss'
import Image from 'next/image'
import Link from 'next/link'


const Navigation_dropdown = ({ isOpen, setIsOpen }) => {

  const [open_Dropdown, setDropdown] = useState(0);

  // const [isOpen, setIsOpen] = useState(false);


  return (
    <div className={`${styles.dropdownContainer} ${isOpen ? styles.active : ''}`} >
      <div className={styles.dropdownContent}>

        <div className={`${styles.dropdown__container} `}
          onClick={() => { setDropdown(open_Dropdown != 1 ? 1 : 0) }}
        >
          <button className={styles.dropdown__btn}>
            <Image
              loading="lazy"

              src='/icons/arrow-down-2.svg'
              width={12}
              height={12}

              style={{ "transform": open_Dropdown == 1 ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
            <span>בגרויות במתמטיקה</span>

          </button>
          <div className={styles.dropdown__content} style={{ "max-height": open_Dropdown == 1 ? 'fit-content' : '0' }} >
            <Link href={"/מכינת מתמטיקה - סמסטר ראשון/קורסים פופולאריים/בגרויות במתמטיקה"}> <p>מכינת מתמטיקה - סמסטר ראשון</p>  </Link>
            <Link href={"/מכינת מתמטיקה - סמסטר שני/קורסים פופולאריים/בגרויות במתמטיקה"}> <p>מכינת מתמטיקה - סמסטר שני</p> </Link>
            <Link href={"/הכנה למבחן סיווג קבלה לטכניון/קורסים פופולאריים/בגרויות במתמטיקה"}> <p> הכנה למבחן סיווג קבלה לטכניון</p> </Link>
            <Link href={"/הכנה למבחן כניסה למכינה/קורסים פופולאריים/בגרויות במתמטיקה"}> <p>הכנה למבחן כניסה למכינה </p> </Link>



          </div>
        </div>

        <div className={`${styles.dropdown__container} `}
          onClick={() => { setDropdown(open_Dropdown != 2 ? 2 : 0) }}
        >
          <button className={styles.dropdown__btn}>
            <Image
              loading="lazy"

              src='/icons/arrow-down-2.svg'
              width={12}
              height={12}

              style={{ "transform": open_Dropdown == 2 ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
            <span>מכינות</span>

          </button>
          <div className={styles.dropdown__content} style={{ "max-height": open_Dropdown == 2 ? 'fit-content' : '0' }} >
            <Link href={"/אוניברסיטת חיפה/טכניון/מכינות"}> <p>אוניברסיטת חיפה</p> </Link>
            <Link href={"/המכללה האקדמית תל חי/טכניון/מכינות"}> <p>המכללה האקדמית תל חי</p> </Link>
            <Link href={"/המכללה האקדמית אורט בראודה/טכניון/מכינות"}> <p>המכללה האקדמית אורט בראודה</p> </Link>
          </div>
        </div>


        <div className={`${styles.dropdown__container} `}
          onClick={() => { setDropdown(open_Dropdown != 3 ? 3 : 0) }}
        >
          <button className={styles.dropdown__btn}>
            <Image
              loading="lazy"

              src='/icons/arrow-down-2.svg'
              width={12}
              height={12}

              style={{ "transform": open_Dropdown == 3 ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
            <span>אקדמיה </span>

          </button>
          <div className={styles.dropdown__content} style={{ "max-height": open_Dropdown == 3 ? 'fit-content' : '0' }} >
            <p>item 1</p>
            <p>item 2</p>
            <p>item 3</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navigation_dropdown