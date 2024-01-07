import React, { useState, useRef, useEffect, useContext } from 'react';
import styles from '@/styles/components/navbar.module.scss';

import Image from 'next/image'
import { CartContext } from '../app/contextApi';



const Cart_Dropdown = ({ children, content, arrow }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 35, left: -10 });
  const triggerRef = useRef(null);
  const { cartItems, addItemToCart, removeItemFromCart, clearCart } = useContext(CartContext);


  const handleMouseEnter = () => {

    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    console.log("mouse leav")

    setIsOpen(false);
  };



  return (
    <div
      className={styles.cart_dropdown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={triggerRef}>{children}</div>

      <div style={{ display: isOpen ? 'block' : 'none' }}
      // onMouseEnter={handleMouseEnter}
      >

        <div className={styles.CartContent} style={position}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave} >

          <div className={styles.CartContent__nav}>
            <svg  onClick={()=>{setIsOpen(false)}} xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 26" fill="none">
              <path opacity="0.4" d="M16.34 2.84399H7.67C4.28 2.84399 2 5.34959 2 9.0764V17.6775C2 21.3938 4.28 23.8994 7.67 23.8994H16.34C19.73 23.8994 22 21.3938 22 17.6775V9.0764C22 5.34959 19.73 2.84399 16.34 2.84399Z" fill="#FF5B37" />
              <path d="M15.0156 15.2358L13.2366 13.364L15.0146 11.4922C15.3566 11.1332 15.3566 10.5489 15.0146 10.1899C14.6726 9.82773 14.1196 9.82879 13.7776 10.1888L11.9986 12.0607L10.2196 10.1867C9.87758 9.82668 9.32358 9.82879 8.98158 10.1867C8.64058 10.5468 8.64058 11.1311 8.98158 11.4901L10.7616 13.364L8.98558 15.2327C8.64358 15.5927 8.64358 16.177 8.98558 16.5349C9.15658 16.716 9.37958 16.8055 9.60358 16.8055C9.82858 16.8055 10.0516 16.716 10.2226 16.536L11.9986 14.6663L13.7786 16.5391C13.9496 16.7192 14.1726 16.8087 14.3966 16.8087C14.6206 16.8087 14.8446 16.7181 15.0156 16.5391C15.3576 16.1791 15.3576 15.5959 15.0156 15.2358Z" fill="#FF5B37" />
            </svg>
            <div>
              <h1>הסל שלי</h1>
              <p> פריטים </p>
            </div>
          </div>

          <div className={styles.horizontal_divider}></div>

          <ul className={styles.cart_content}>

            {cartItems.map((items) => (
            <li>
              <svg  onClick={()=>{removeItemFromCart(items?.id) }} xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                <path d="M11.8833 5.64526C11.8833 5.64526 11.5213 10.3722 11.3113 12.3633C11.2113 13.3143 10.6533 13.8716 9.73927 13.8892C7.99994 13.9221 6.25861 13.9242 4.51994 13.8856C3.64061 13.8667 3.09194 13.3024 2.99394 12.3683C2.78261 10.3596 2.42261 5.64526 2.42261 5.64526" stroke="#B4BBC5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.8056 3.37949H1.50024" stroke="#B4BBC5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.6271 3.37941C10.1038 3.37941 9.65313 2.98988 9.55047 2.45016L9.38847 1.59672C9.28847 1.20298 8.9498 0.930664 8.5638 0.930664H5.7418C5.3558 0.930664 5.01713 1.20298 4.91713 1.59672L4.75513 2.45016C4.65247 2.98988 4.2018 3.37941 3.67847 3.37941" stroke="#B4BBC5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              <div>
                <span>
                  <h1>מכינת מתמטיקה- סמסטר ראשון</h1>
                  <p> ₪  {items?.price}  </p>
                </span>
                <div className={styles.img}>

                  <Image
                    src= {items?.image_url}
                    layout="fill"
                    // object-fit="cover"
                    />
                </div>
              </div>
            </li>
            ))}
          </ul>
          <div className={styles.horizontal_divider}></div>

          <div className={styles.price}>
            <h1> ₪  {cartItems.reduce((sum,item)=> sum + parseInt( item?.price) , 0)} </h1>
            <h2>סה"כ</h2>
          </div>
          <div className={styles.horizontal_divider}></div>

          <div className={styles.action_btn}>
            <button>צפייה בסל</button>
            <button>לתשלום</button>
          </div>

        </div>
      </div>
      {/* // )} */}
    </div>
  );
};

export default Cart_Dropdown;
