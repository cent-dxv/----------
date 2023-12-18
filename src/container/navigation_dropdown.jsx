import React, { useState } from 'react'

import styles from '@/styles/container/navigation_dropdown.module.scss'


const  Navigation_dropdown =({isOpen, setIsOpen}) => {
  // const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.dropdownContainer} ${isOpen ? styles.active : ''}`} >
      <div className={styles.dropdownContent}>
        <a href="#">Item 1</a>
        <a href="#">Item 2</a>
        <a href="#">Item 3</a>
        {/* Add more items as needed */}
      </div>
    </div>
  );
};

export default Navigation_dropdown