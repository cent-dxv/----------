"use client"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import styles from '@/styles/container/swiper.module.scss'
import Image from "next/image"

import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useRef, useState } from 'react';
import Card from './card';
import WindowSize from '../utils/windowsize';

export default ({ data }) => {


  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / 4);

  const startIndex = (currentPage - 1) * 4;
  const endIndex = startIndex + 4;


  const { width, height } = WindowSize()

  const swiperRef1 = useRef(null);

  const goNext1 = () => {
    if (swiperRef1.current && swiperRef1.current.swiper) {
      swiperRef1.current.swiper.slideNext();
    }
  };

  const goPrev1 = () => {
    if (swiperRef1.current && swiperRef1.current.swiper) {
      swiperRef1.current.swiper.slidePrev();
    }
  };


  const preview = width > 1080 ? 4 : width >= 800 ? 3 : 500 < width ? 2 : 1

  return (
    <div>
      <div className={`${styles.swiper} `}>


        {preview == 1 ? (
          <div className={styles.mobile}>

            {data.slice(startIndex, endIndex).map((items, index) =>
              (<Card key={index} items_data={items} />)
            )}

            <div className={styles.navigation}>

              <button className={styles.nav_prev} onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                <p>
                  <Image
                    width={15}
                    height={15}
                    src="/icons/arrow-right-2.svg"
                  />
                </p>
              </button>
              {/* <span> Page {currentPage} of {totalPages} </span> */}
              <button className={styles.nav_next} onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
                <p>
                  <Image
                    width={15}
                    height={15}
                    src="/icons/next_arrow.svg"
                  />
                </p>
              </button>


            </div>


          </div>
        ) :

          (<Swiper
            className={`${styles.swip} `}
            modules={[Navigation, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={preview}
            onSwiper={(swiper) => {}}
            onSlideChange={() => console.log('slide change')}
            ref={swiperRef1}
          
            
          >

{/* <Link href="/course/[id]" as={`/course/${id}`}></Link> */}

            {data.map((items) => {
              // console.log(items)
              return (  <SwiperSlide> <Card items_data={items} /></SwiperSlide> )
            })}

          </Swiper>)
        }

        <div className={`${styles.button_next} button_next1`} onClick={goNext1}>
          <p>
            <Image
              width={15}
              height={15}
              src="/icons/next_arrow.svg"
            />
          </p>
        </div>
        <div className={`${styles.button_prev} button_prev1`} onClick={goPrev1}>
          <p>
            <Image
              width={15}
              height={15}
              src="/icons/arrow-right-2.svg"
            />
          </p>
        </div>
      </div>

    </div>
  );
};
