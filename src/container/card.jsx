import React from 'react'
import styles from '@/styles/container/card.module.scss'
import Image from 'next/image'

function Card({ items_data }) {

  console.log("\n" * 30, " =>>>", items_data?.title, "\n", items_data)
  return (
    <div className={styles.card}>
      <div className={styles.card_image} >
        <Image
          fill
          src="https://images.unsplash.com/photo-1664574654700-75f1c1fad74e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          objectFit='cover'
          alt="Logo"
        />
      </div>
      <h1>
        {items_data?.title}
      </h1>
      <h2>
          {items_data?.subtitle }
      </h2>
      <div className={styles.card_image} >

        <div className={styles.profile}>
          <p> {items_data?.lectureure}  </p>
          <div className={styles.avatar}>
            <Image
              alt="AV"
              src={items_data?.lecturer_img }
              width={2250}
              height={1390}
            // layout="responsive"
            />
          </div>
        </div>
        <div>
          <div className={styles.end}>
            <div className={styles.horizontalline}> </div>
            <div className={styles.footer}>
              <span className={styles.rates}> ⭐ {items_data?.rates}  </span>
              <span className={styles.price}>₪ {items_data?.price}  </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card