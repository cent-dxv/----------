import React from 'react'
import styles from '@/styles/container/card.module.scss'
import Image from 'next/image'
import Link from 'next/link';


function Card({ items_data }) {




  // console.log("\n" * 30, " =>>>", items_data?.title, "\n", items_data)
  return (
    <Link style={{textDecoration:"none"}} href={`/course/${items_data.id}`} as={`/course/${items_data.id}`}>


       <div className={styles.card}>
      <div className={styles.card_image} >
        <div className={styles.like_icon}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2082 0.0838733C12.734 0.0838733 13.259 0.15804 13.7582 0.32554C16.834 1.32554 17.9423 4.70054 17.0165 7.65054C16.4915 9.15804 15.6332 10.5339 14.509 11.658C12.8999 13.2164 11.134 14.5997 9.23318 15.7914L9.02485 15.9172L8.80818 15.783C6.90068 14.5997 5.12485 13.2164 3.50068 11.6497C2.38402 10.5255 1.52485 9.15804 0.991518 7.65054C0.0498511 4.70054 1.15818 1.32554 4.26735 0.30804C4.50902 0.224707 4.75818 0.166373 5.00818 0.133873H5.10818C5.34235 0.0997066 5.57485 0.0838733 5.80818 0.0838733H5.89985C6.42485 0.0997066 6.93318 0.191373 7.42568 0.358873H7.47485C7.50818 0.374707 7.53318 0.392207 7.54985 0.40804C7.73402 0.467207 7.90818 0.533873 8.07485 0.62554L8.39152 0.767207C8.46804 0.808017 8.55392 0.870374 8.62815 0.924266C8.67518 0.958411 8.71753 0.989158 8.74985 1.00887C8.76345 1.0169 8.77727 1.02496 8.7912 1.0331C8.86265 1.07481 8.93709 1.11826 8.99985 1.16637C9.92568 0.458873 11.0499 0.07554 12.2082 0.0838733ZM14.4248 6.08387C14.7665 6.07471 15.0582 5.80054 15.0832 5.44971V5.35054C15.1082 4.18304 14.4007 3.12554 13.3248 2.71721C12.9832 2.59971 12.6082 2.78387 12.4832 3.13387C12.3665 3.48387 12.5498 3.86721 12.8998 3.99137C13.434 4.19137 13.7915 4.71721 13.7915 5.29971V5.32554C13.7757 5.51637 13.8332 5.70054 13.9498 5.84221C14.0665 5.98387 14.2415 6.06637 14.4248 6.08387Z" fill="#B3BAC3" />
          </svg>

        </div>
        <Image
          fill
          src={items_data?.image_url}
          objectFit='cover'
          alt="Logo"
        />
      </div>
      <h1>
        {items_data?.title}
      </h1>
      <h2>
        {items_data?.subtitle}
      </h2>
      <div className={styles.card_image} >

        <div className={styles.profile}>
          <p> {items_data?.lectureure}  </p>
          <div className={styles.avatar}>
            <Image
              alt="AV"
              src={items_data?.lecturer_img}
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
    </Link>
   
  )
}

export default Card