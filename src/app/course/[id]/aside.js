import React, { useContext } from 'react'
import styles from '@/styles/components/course_detail_page.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { CartContext } from '../../contextApi';




function Aside({ data }) {


  const { cartItems, addItemToCart, removeItemFromCart, clearCart } = useContext(CartContext);



  return (
    <aside className={styles.aside}>
      <p className={styles.price_info}>
        ₪ 185.00 -  החל מ
      </p>

      <button className={styles.action_btn} onClick={() => {
        addItemToCart(data);
      }}>

        <p>
          תוינק לסל ףסוה
        </p>
        <div className={styles.cart} >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.1855 14.7651C5.53716 14.7651 5.823 15.051 5.823 15.4026C5.823 15.7543 5.53716 16.0393 5.1855 16.0393C4.83383 16.0393 4.54883 15.7543 4.54883 15.4026C4.54883 15.051 4.83383 14.7651 5.1855 14.7651Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5623 14.7651C14.914 14.7651 15.1998 15.051 15.1998 15.4026C15.1998 15.7543 14.914 16.0393 14.5623 16.0393C14.2106 16.0393 13.9248 15.7543 13.9248 15.4026C13.9248 15.051 14.2106 14.7651 14.5623 14.7651Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M1.29199 0.956543L3.02533 1.25654L3.82783 10.8174C3.89283 11.5965 4.54366 12.1949 5.32533 12.1949H14.4187C15.1653 12.1949 15.7987 11.6465 15.9062 10.9065L16.697 5.44154C16.7945 4.76738 16.272 4.16404 15.5912 4.16404H3.30366" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.7715 7.24406H13.0823" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>

      </button>


      <div className={styles.coupon}>
        <div >
          <p>רתאב םיסרוקה לכ לע החנה 20% ולבק</p>
          <p> 20YES :דוקה םע</p>
        </div>
        <div className={styles.coupon_icon}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none">
            <path opacity="0.4" d="M10.4591 5.08586V3.40265C10.1286 3.40265 9.85461 3.13647 9.85461 2.81549V0.811301C9.85461 0.544337 9.63701 0.33374 9.36299 0.33374H3.82624C2.08543 0.33374 0.666992 1.71084 0.666992 3.40265V5.42955C0.666992 5.58691 0.731467 5.73565 0.844297 5.84526C0.957128 5.95408 1.11025 6.01671 1.27144 6.01671C1.88395 6.01671 2.35139 6.43947 2.35139 6.99532C2.35139 7.57544 1.87589 8.03734 1.2795 8.04438C0.949068 8.04438 0.666992 8.27142 0.666992 8.60023V10.6052C0.666992 12.2962 2.08543 13.6663 3.81818 13.6663H9.36299C9.63701 13.6663 9.85461 13.4541 9.85461 13.1887V11.4969C9.85461 11.1689 10.1286 10.9097 10.4591 10.9097V9.39173C10.1286 9.39173 9.85461 9.12477 9.85461 8.80457V5.67302C9.85461 5.35204 10.1286 5.08586 10.4591 5.08586Z" fill="#1C9080" />
            <path d="M15.6492 6.99561C15.6492 7.57495 16.1327 8.03685 16.7211 8.04468C17.0515 8.04468 17.3336 8.27172 17.3336 8.5927V10.6047C17.3336 12.2965 15.9232 13.6666 14.1824 13.6666H11.5551C11.2891 13.6666 11.0634 13.4544 11.0634 13.1882V11.4972C11.0634 11.1684 10.7975 10.91 10.459 10.91V9.39203C10.7975 9.39203 11.0634 9.12506 11.0634 8.80486V5.67332C11.0634 5.35155 10.7975 5.08615 10.459 5.08615V3.40217C10.7975 3.40217 11.0634 3.13598 11.0634 2.815V0.811595C11.0634 0.544631 11.2891 0.333252 11.5551 0.333252H14.1824C15.9232 0.333252 17.3336 1.7033 17.3336 3.39434V5.36721C17.3336 5.52379 17.2691 5.67332 17.1563 5.78214C17.0434 5.89174 16.8903 5.95437 16.7291 5.95437C16.1327 5.95437 15.6492 6.42489 15.6492 6.99561Z" fill="#1C9080" />
          </svg>
        </div>
      </div>

      <div className={styles.horizontal_divider}></div>

      <div className={styles.description}>
        <h3>:הקורס כולל </h3>
        וידאו לצפייה340
        <br />
        הכולל ספרים דיגיטליים all inclusive קורס
        <br />
        תרגולים וסימולציות מובנים להכנה לבחינה
        <br />
        בניית תכנית לימודים אישית לפי הצורך
        <br />
        בניית תכנית לימודים אישית לפי הצורך
        <br />
        תכנים בנויים לפי הסילבוס המעודכן
      </div>

      <div className={styles.horizontal_divider}></div>


      <div className={styles.lecturare}>

        <h3>מרצה הקורס:</h3>
        <Link href='/teacher/ארז כהן' style={{ textDecoration: "none" }}>
          <div className={styles.lecturare_info}>
            <div className={styles.lecturare_name}>
              <p>   ארז כהן </p>
              <p> הקיטמתמב ריכב הצרמ</p>
            </div>
            <div className={styles.avatar}>
              <Image
                loading="lazy"

                alt="AV"
                src="https://xsgames.co/randomusers/avatar.php?g=male"
                width={2250}
                height={1390}
              // layout="responsive"
              />
            </div>
          </div>
        </Link>

      </div>


    </aside>
  )
}

export default Aside