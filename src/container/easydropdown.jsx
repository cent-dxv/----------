// components/Dropdown.js

import { useState } from 'react';
import styles from '@/styles/container/drop.module.scss';

import Image from 'next/image'

const EasyDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.dropdownContainer} ${isOpen ? styles.active : ''}`}     
      onMouseEnter={() => { setIsOpen(true) }}
      onMouseLeave={() => { setIsOpen(false) }}
    >
      <div className={styles.dropdownEasy}>

        <div >
          <div>
            <p className={styles.name}> סייו הילוי</p>
            <p className={styles.email}>syulia06@gmail.com</p>
          </div>
          <p className={styles.avatar}>
            <Image
              alt="AV"
              src="https://xsgames.co/randomusers/avatar.php?g=female"
              width={2250}
              height={1390}
              // layout="responsive"
            />
          </p>
        </div>
        <div className={styles.horizontalline} ></div>
        <ul>
          <li>
            <p> ילש םיסרוק</p>
            <p>
              <Image
                width={20}
                height={20}
                src="/icons/play.svg"
                
              />
            </p>
          </li>

          <li className={styles.cart}>
              <span className={styles.cart_amount}>
                8
              </span>
            <span>
            <p> תוינק לס</p>
            <p>
              <Image
                width={20}
                height={20}
                src="/icons/iconly-light-buy.svg"
                
              />
            </p>
            </span>
          </li>

          <li>
            <p>םיפדעומ </p>
            <p>
              <Image
                width={20}
                height={20}
                src="/icons/iconly-light-heart-1.svg"
                
              />
            </p>
          </li>


          <li>
            <p> םירבחל יתצלמהש םיסרוק </p>
            <p>
              <Image
                width={20}
                height={20}
                src="/icons/iconly-light-3-user.svg"
                
              />
            </p>
          </li>

          <div className={styles.horizontalline} ></div>


          <li>
            <p>  םירבחל יתצלמהש םיסרוק </p>
            <p>
              <Image
                width={20}
                height={20}
                src="/icons/iconly-light-edit-1.svg"
                
              />
            </p>
          </li>

          
          <li>
            <p>  םירבחל יתצלמהש םיסרוק </p>
            <p>
              <Image
                width={20}
                height={20}
                src="/icons/iconly-light-wallet-1.svg"
                
              />
            </p>
          </li>

          <div className={styles.horizontalline} ></div>


          <li >
            <p className={styles.logout}> תוקתנתה </p>
            <p>
              <Image
                width={20} 
                height={20}
                src="/icons/iconly-light-logout-1.svg"
              
              />
            </p>
          </li>

        </ul>
        {/* Add more items as needed */}
      </div>
    </div>
  );
};

export default EasyDropdown;
