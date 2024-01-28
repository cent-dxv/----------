import React, { useContext, useState } from 'react';
import { Button, Drawer, Radio, Space } from 'antd';


import styles from '@/styles/container/drop.module.scss'
import Image from 'next/image'
import { CartContext } from '@/context'
import Link from 'next/link'

const Drawer_component = ({ open, setOpen }) => {


  const { cartItems, updateItem, addItemToCart, removeItemFromCart, clearCart } = useContext(CartContext);



  return (
    <>

      <Drawer
        title="סייו הילוי"
        placement="left"
        closable={false}
        onClose={() => setOpen(false)}
        open={open}
      // key={placement}
      >

        <div className={styles.drawer_container}>

          <div className={styles.drawer}>
            <div>
              <p className={styles.name}> סייו הילוי</p>
              <p className={styles.email}>syulia06@gmail.com</p>
            </div>
            <p className={styles.avatar}>
              <Image
                loading="lazy"

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

              <Image
                loading="lazy"

                width={20}
                height={20}
                src="/icons/play.svg"

              />

            </li>

            <li className={styles.cart}>
              <Link href="/checkout">
                <span>
                  <span style={{ marginLeft: "0" }} className={styles.cart_amount}>
                    {cartItems.length}
                  </span>

                </span>
                <span>
                  <p > תוינק לס</p>
                  <p>
                    <Image
                      loading="lazy"

                      width={20}
                      height={20}
                      src="/icons/iconly-light-buy.svg"

                    />
                  </p>
                </span>
              </Link>
            </li>

            <li>
              <p>םיפדעומ </p>
              <p>
                <Image
                  loading="lazy"

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
                  loading="lazy"

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
                  loading="lazy"

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
                  loading="lazy"

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
                  loading="lazy"

                  width={20}
                  height={20}
                  src="/icons/iconly-light-logout-1.svg"

                />
              </p>
            </li>

          </ul>

        </div>



      </Drawer >
    </>
  );
};
export default Drawer_component;
