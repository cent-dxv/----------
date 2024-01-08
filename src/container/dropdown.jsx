import React, { useState, useRef, useEffect } from 'react';
import styles from '@/styles/container/drop.module.scss';



// import React, { useState, useRef, useEffect } from 'react';
// import styles from './Dropdown.module.css'; // Add your custom styles

const Dropdown = ({ children, content, arrow }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 35, left: -150 });
  const triggerRef = useRef(null);

  const handleMouseEnter = () => {

    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    console.log("mouse leav")

    setIsOpen(false);
  };



  return (
    <div
      className={styles.dropdown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={triggerRef}>{children}</div>
      {/* {isOpen && ( */}

      <div className={styles.placeholder}></div>

      <div style={{ display: isOpen ? 'block' : 'none' }}
      // onMouseEnter={handleMouseEnter}
      >

        <div className={styles.dropdownContent} style={position}
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
           >
          <div className={styles.arrow} style={{ left: arrow }} ></div>
          {content}
        </div>
      </div>
      {/* // )} */}
    </div>
  );
};

export default Dropdown;
