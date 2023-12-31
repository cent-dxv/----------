'use client' 

import React, { useEffect, useState } from 'react'
import styles from '@/styles/components/course_detail_page.module.scss'


function Course_dropdown({open}) {
  const [open_Dropdown, setDropdown] = useState(false);

  useEffect(() => {
    setDropdown(open)

  }, [open])
  

  return (
    <button className={`${styles.dropdown__container} `}
    onClick={() => { setDropdown(!open_Dropdown ) }}
  >

    <div className={styles.dropdown__content} style={{ "max-height": open_Dropdown ? '1000px' : '60px' }} >

      <div className={styles.action_btn} >
      <div className=''>
          <p>הרצאות / 28 דקות</p>
          <h4>מחיר הפרק: 50 ₪    </h4>
        </div>


        <div className={styles.course_title}>  
          <p>
            סילבוס הקורס
          </p>

          <svg    style={{ transform: open_Dropdown ? 'rotate(180deg)' : 'none' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.0625 8C1.0625 11.831 4.16825 14.9375 8 14.9375C11.831 14.9375 14.9375 11.831 14.9375 8C14.9375 4.169 11.831 1.0625 8 1.0625C4.16825 1.0625 1.0625 4.169 1.0625 8Z" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M5.39648 6.91821L7.99973 9.53271L10.603 6.91821" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>



      {Array(5).fill().map((_, index) =>  (
      <li key={index}>
        <span>05:28</span>
        <span> 
        פתרון תרגיל 62
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.333008 7.00378C0.333008 3.32409 3.32529 0.333252 6.99967 0.333252C10.6741 0.333252 13.6663 3.32409 13.6663 7.00378C13.6663 10.6758 10.6741 13.6666 6.99967 13.6666C3.32529 13.6666 0.333008 10.6758 0.333008 7.00378ZM9.44497 7.67848C9.51575 7.60773 9.60584 7.49839 9.62514 7.47266C9.72811 7.33759 9.77958 7.17036 9.77958 7.00377C9.77958 6.81661 9.72167 6.64294 9.61228 6.50144C9.60331 6.49248 9.58576 6.47338 9.56288 6.44848C9.52008 6.40189 9.45863 6.33501 9.39992 6.27633C8.87225 5.71032 7.49516 4.78412 6.77444 4.50112C6.66504 4.45674 6.38834 4.35962 6.24033 4.35319C6.09876 4.35319 5.96363 4.38535 5.83493 4.44967C5.67405 4.53971 5.54535 4.68121 5.47457 4.84844C5.42952 4.96422 5.35874 5.31154 5.35874 5.31797C5.28795 5.69746 5.24934 6.31492 5.24934 6.9967C5.24934 7.64696 5.28795 8.23806 5.34587 8.62397C5.34746 8.62556 5.35299 8.65316 5.36159 8.69604C5.38774 8.8264 5.4422 9.09796 5.50031 9.20927C5.64188 9.47941 5.91858 9.64664 6.21459 9.64664H6.24033C6.43338 9.64021 6.83879 9.47298 6.83879 9.46655C7.5209 9.18355 8.86581 8.30238 9.40635 7.71707L9.44497 7.67848Z" fill="#200E32" />
        </svg></span>
      </li>
    ))}




    </div>



  </button>
  )
}

export default Course_dropdown