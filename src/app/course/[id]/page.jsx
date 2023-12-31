"use client"

import React, { useState } from 'react';
import styles from '@/styles/components/course_detail_page.module.scss'
import Image from 'next/image'
import Aside from './aside';
import Course_dropdown from './components/course_dropdw';

import result_data from "../../../../mok_data.js"

import { Progress } from 'antd';


const CourseDetailPage = ({ params }) => {


  const data = result_data.filter((e) => e.id == params.id)[0];

  console.log(data, params, params.id);


  const [open_Dropdown, setDropdown] = useState(false);
  const [Seemore, setSeeless] = useState(false);
  return (
    <>


      <div className={styles.main}>

        <div className={styles.desktop}> <Aside /> </div>

        <div className={styles.course_details}>
          <h1 className={styles.title}>   {data ? data.title : "MOK | מכינת מתמטיקה - סמסטר ראשון"}  </h1>

          <div className={styles.rate}>
            <span>
              {Array(5).fill().map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 18 16" fill="none">
                  <path d="M13.9317 9.9335C13.7159 10.1427 13.6167 10.4452 13.6659 10.7418L14.4067 14.8418C14.4692 15.1893 14.3226 15.541 14.0317 15.7418C13.7467 15.9502 13.3676 15.9752 13.0567 15.8085L9.36591 13.8835C9.23758 13.8152 9.09508 13.7785 8.94925 13.7743H8.72341C8.64508 13.786 8.56841 13.811 8.49841 13.8493L4.80675 15.7835C4.62425 15.8752 4.41758 15.9077 4.21508 15.8752C3.72175 15.7818 3.39258 15.3118 3.47341 14.816L4.21508 10.716C4.26425 10.4168 4.16508 10.1127 3.94925 9.90016L0.940079 6.9835C0.688412 6.73933 0.600912 6.37266 0.715912 6.04183C0.827579 5.71183 1.11258 5.471 1.45675 5.41683L5.59841 4.816C5.91341 4.7835 6.19008 4.59183 6.33175 4.3085L8.15674 0.566829C8.20008 0.483496 8.25591 0.406829 8.32341 0.341829L8.39841 0.283496C8.43758 0.240163 8.48258 0.204329 8.53258 0.175163L8.62341 0.141829L8.76508 0.0834961H9.11591C9.42924 0.115996 9.70508 0.303496 9.84925 0.583496L11.6984 4.3085C11.8317 4.581 12.0909 4.77016 12.3901 4.816L16.5317 5.41683C16.8817 5.46683 17.1742 5.7085 17.2901 6.04183C17.3992 6.376 17.3051 6.74266 17.0484 6.9835L13.9317 9.9335Z" fill="#F7AC3E" />
                </svg>
              ))}
            </span>
            <p>4.8</p>
            <span className={styles.course_name}>
              מתמטיקה
            </span>
          </div>

          <div className={styles.course_info}>

            <div className={styles.share_tab} >

              <button className={styles.share}>
                <p>  שתף ותרוויח </p>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3.30033 12.2584C2.65589 12.2584 2.02592 12.0673 1.49009 11.7092C0.954264 11.3512 0.536635 10.8423 0.29002 10.2469C0.043404 9.65156 -0.0211219 8.99642 0.104602 8.36436C0.230325 7.73231 0.540651 7.15173 0.996337 6.69604C1.45202 6.24036 2.0326 5.93003 2.66466 5.80431C3.29671 5.67859 3.95185 5.74311 4.54724 5.98973C5.14262 6.23634 5.6515 6.65397 6.00953 7.1898C6.36756 7.72563 6.55866 8.3556 6.55866 9.00003C6.55646 9.86352 6.21247 10.691 5.60189 11.3016C4.99131 11.9122 4.16381 12.2562 3.30033 12.2584ZM3.30033 6.9917C2.90312 6.9917 2.51483 7.10949 2.18456 7.33017C1.85429 7.55084 1.59687 7.8645 1.44487 8.23148C1.29286 8.59845 1.25309 9.00226 1.33058 9.39184C1.40808 9.78142 1.59935 10.1393 1.88022 10.4201C2.16109 10.701 2.51894 10.8923 2.90852 10.9698C3.2981 11.0473 3.70191 11.0075 4.06888 10.8555C4.43586 10.7035 4.74952 10.4461 4.9702 10.1158C5.19087 9.78554 5.30866 9.39724 5.30866 9.00003C5.30866 8.46739 5.09707 7.95656 4.72043 7.57993C4.3438 7.20329 3.83297 6.9917 3.30033 6.9917Z" fill="#1A2134" />
                  <path d="M14.7007 6.99177C14.0563 6.99177 13.4263 6.80067 12.8905 6.44264C12.3547 6.08461 11.937 5.57573 11.6904 4.98034C11.4438 4.38496 11.3793 3.72982 11.505 3.09776C11.6307 2.46571 11.941 1.88513 12.3967 1.42944C12.8524 0.973757 13.433 0.663431 14.065 0.537707C14.6971 0.411984 15.3522 0.476509 15.9476 0.723125C16.543 0.96974 17.0519 1.38737 17.4099 1.9232C17.768 2.45903 17.9591 3.08899 17.9591 3.73343C17.9569 4.59692 17.6129 5.42441 17.0023 6.03499C16.3917 6.64557 15.5642 6.98957 14.7007 6.99177ZM14.7007 1.73343C14.3032 1.73344 13.9145 1.85144 13.5841 2.07248C13.2536 2.29353 12.9962 2.60769 12.8445 2.97515C12.6927 3.34261 12.6534 3.74684 12.7316 4.13665C12.8098 4.52645 13.0019 4.88429 13.2836 5.16482C13.5653 5.44536 13.9239 5.63597 14.314 5.71252C14.7042 5.78907 15.1082 5.74811 15.4751 5.59482C15.8419 5.44154 16.155 5.18283 16.3746 4.85146C16.5943 4.5201 16.7107 4.13099 16.7091 3.73343C16.7068 3.20223 16.4943 2.69355 16.1179 2.31871C15.7415 1.94388 15.2319 1.73343 14.7007 1.73343Z" fill="#1A2134" />
                  <path d="M14.7007 17.5167C14.0559 17.5167 13.4256 17.3254 12.8896 16.967C12.3536 16.6086 11.936 16.0992 11.6896 15.5033C11.4432 14.9074 11.3792 14.2519 11.5056 13.6196C11.632 12.9873 11.9432 12.4067 12.3997 11.9514C12.8562 11.496 13.4376 11.1864 14.0702 11.0616C14.7028 10.9368 15.3582 11.0025 15.9534 11.2504C16.5486 11.4983 17.0569 11.9172 17.414 12.4542C17.771 12.9911 17.9607 13.6219 17.959 14.2667C17.9568 15.1294 17.6126 15.956 17.0018 16.5653C16.3909 17.1745 15.5634 17.5167 14.7007 17.5167ZM14.7007 12.2583C14.3035 12.2583 13.9152 12.3761 13.5849 12.5968C13.2547 12.8175 12.9973 13.1311 12.8452 13.4981C12.6932 13.8651 12.6535 14.2689 12.731 14.6585C12.8085 15.0481 12.9997 15.4059 13.2806 15.6868C13.5615 15.9676 13.9193 16.1589 14.3089 16.2364C14.6985 16.3139 15.1023 16.2741 15.4693 16.1221C15.8362 15.9701 16.1499 15.7127 16.3706 15.3824C16.5913 15.0522 16.709 14.6639 16.709 14.2667C16.709 13.734 16.4974 13.2232 16.1208 12.8466C15.7442 12.4699 15.2334 12.2583 14.7007 12.2583Z" fill="#1A2134" />
                  <path d="M12.5253 13.4C12.4181 13.399 12.3127 13.3733 12.217 13.325L5.61697 9.54171C5.5221 9.48695 5.44353 9.4079 5.38934 9.3127C5.33515 9.2175 5.30729 9.10958 5.30864 9.00005C5.31064 8.88819 5.34262 8.77892 5.40125 8.68364C5.45989 8.58836 5.54302 8.51057 5.64197 8.45838L12.4586 4.95005C12.6067 4.8738 12.779 4.85949 12.9376 4.91028C13.0963 4.96108 13.2282 5.0728 13.3045 5.22088C13.3807 5.36896 13.395 5.54126 13.3442 5.69989C13.2934 5.85851 13.1817 5.99046 13.0336 6.06671L7.24197 9.00005L12.842 12.2C12.9616 12.2689 13.0551 12.3755 13.1079 12.5031C13.1606 12.6307 13.1695 12.7722 13.1334 12.9054C13.0972 13.0387 13.0179 13.1562 12.9079 13.2397C12.7979 13.3231 12.6634 13.3678 12.5253 13.3667V13.4Z" fill="#1A2134" />
                </svg>
              </button>

              <button className={styles.like}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.761 21.4978C8.5904 19.9926 6.57111 18.221 4.73929 16.2148C3.45144 14.77 2.47101 13.0086 1.8731 11.0656C0.797144 7.29636 2.05393 2.98134 5.57112 1.70435C7.41961 1.03381 9.43845 1.41705 10.9961 2.73418C12.5543 1.41866 14.5725 1.03555 16.4211 1.70435C19.9383 2.98134 21.2041 7.29636 20.1281 11.0656C19.5302 13.0086 18.5498 14.77 17.2619 16.2148C15.4301 18.221 13.4108 19.9926 11.2402 21.4978L11.0051 21.6626L10.761 21.4978Z" stroke="#1A2134" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M14.7393 5.94727C15.8046 6.33071 16.5615 7.40838 16.6561 8.67633" stroke="#1A2134" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>

            </div>


            <div className={styles.tutor_info}>

              <span>
                <p>שעות וידאו</p>
                <h3>340 שעות</h3>
              </span>


              <span>
                <p>שיעורים</p>
                <h3>85</h3>
              </span>

            </div>


          </div>

          <button className={styles.video}>


            <span></span>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.833496 30.0168C0.833496 13.9182 13.9247 0.833252 30.0002 0.833252C46.0756 0.833252 59.1668 13.9182 59.1668 30.0168C59.1668 46.0817 46.0756 59.1666 30.0002 59.1666C13.9247 59.1666 0.833496 46.0817 0.833496 30.0168ZM40.6983 32.9686C41.008 32.6591 41.4022 32.1807 41.4866 32.0682C41.9371 31.4772 42.1623 30.7456 42.1623 30.0168C42.1623 29.1979 41.9089 28.4382 41.4303 27.8191C41.3911 27.7799 41.3143 27.6963 41.2142 27.5873C41.0269 27.3835 40.7581 27.0909 40.5013 26.8342C38.1927 24.3579 32.1679 20.3058 29.0148 19.0677C28.5362 18.8735 27.3256 18.4486 26.6781 18.4205C26.0587 18.4205 25.4675 18.5612 24.9044 18.8426C24.2006 19.2365 23.6375 19.8556 23.3279 20.5872C23.1308 21.0937 22.8211 22.6133 22.8211 22.6414C22.5114 24.3017 22.3425 27.003 22.3425 29.9858C22.3425 32.8308 22.5114 35.4168 22.7648 37.1052C22.7718 37.1121 22.796 37.2329 22.8336 37.4205C22.948 37.9908 23.1862 39.1788 23.4405 39.6659C24.0598 40.8477 25.2704 41.5793 26.5655 41.5793H26.6781C27.5227 41.5512 29.2963 40.8196 29.2963 40.7914C32.2806 39.5533 38.1646 35.6982 40.5294 33.1375L40.6983 32.9686Z" fill="#F7AC3E" />
            </svg>

         
              <Image
                fill
                objectFit='cover'
                src={data ? data.image_url : "/images/video.png"}
              />
       


          </button>

          <div className={styles.course_content}>
            <div className={styles.course_content_nav} >

              <button onClick={() => { setDropdown(!open_Dropdown); console.log("===> ", open_Dropdown) }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2196 6.61714C13.5191 6.5759 13.75 6.31535 13.75 6.00008C13.75 5.65615 13.4753 5.37734 13.1364 5.37734L2.35005 5.37734L6.24648 1.43899L6.30604 1.36927C6.48478 1.12586 6.46568 0.779852 6.24828 0.558309C6.00913 0.314611 5.6206 0.313795 5.38047 0.556486L0.439206 5.55033C0.409774 5.57894 0.383145 5.6105 0.35978 5.64454C0.192525 5.88772 0.216102 6.22506 0.430501 6.44171L5.3805 11.4436L5.44945 11.5037C5.69006 11.6841 6.03093 11.6632 6.24831 11.4417C6.48744 11.1979 6.4866 10.8036 6.24644 10.561L2.34908 6.62282L13.1364 6.62282L13.2196 6.61714Z" fill="#200E32" />
                </svg>
                <p>    {open_Dropdown ? "לכווץ את כל הנושאים" : "  הרחבת כל הנושאים "} </p>
              </button>

              <div>

                <h3>תוכן הקורס</h3>
                <p> שיעורים / 340 שעות וידאו 85 </p>
              </div>

            </div>


            <Course_dropdown open={open_Dropdown} />
            <Course_dropdown open={open_Dropdown} />
            <Course_dropdown open={open_Dropdown} />
            <Course_dropdown open={open_Dropdown} />


          </div>
          <div className={styles.descriptions}>
            <h3>  ?למי הקורס מיועד  </h3>
            <p>  לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק. </p>
          </div>


          <div className={styles.descriptions}>
            <h3>  תכירו את המרצה </h3>
            <p>
              לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.
              <br /> <br />
              ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.
            </p>
          </div>


          <div className={styles.mobile}> <Aside /> </div>



          <div className={`${styles.status} , ${Seemore && styles.status_extend}`} >
            <h1>המלצות תלמידים</h1>
            <h2>התלמידים שלנו ממליצים על המורה הזה</h2>

            <div className={styles.status_bar}>
              <span className={styles.Progress}>
                <div> <p className={styles.percent}>30% </p> <Progress className={styles.progrss_bar} strokeColor="#0E695C" percent={30} showInfo={false} status="active" />   <p>    מְעוּלֶה     </p> </div>
                <div> <p className={styles.percent}>50% </p> <Progress className={styles.progrss_bar} strokeColor="#0E695C" percent={50} showInfo={false} status="active" />   <p>    טוב מאוד  </p> </div>
                <div> <p className={styles.percent}>70% </p> <Progress className={styles.progrss_bar} strokeColor="#0E695C" percent={70} showInfo={false} status="active" />   <p>    מְמוּצָע     </p> </div>
                <div> <p className={styles.percent}>100% </p> <Progress className={styles.progrss_bar} strokeColor="#0E695C" percent={100} showInfo={false} status="active" /> <p>   עני        </p> </div>
                <div> <p className={styles.percent}>50% </p> <Progress className={styles.progrss_bar} strokeColor="#0E695C" percent={50} showInfo={false} status="active" />  <p>    נורא      </p> </div>
              </span>

              <span className={styles.rating}>
                <h1> 5</h1>
                <div>

                  {Array(2).fill().map((_, i) => (<>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                      <path d="M12.8457 9.59434C12.6506 9.78343 12.561 10.0569 12.6054 10.3251L13.2751 14.0315C13.3316 14.3456 13.199 14.6635 12.9361 14.8451C12.6785 15.0334 12.3357 15.056 12.0547 14.9053L8.71822 13.1651C8.60221 13.1034 8.47339 13.0702 8.34155 13.0665H8.1374C8.06659 13.077 7.99728 13.0996 7.934 13.1343L4.59674 14.8827C4.43176 14.9656 4.24493 14.995 4.06187 14.9656C3.6159 14.8812 3.31833 14.4564 3.3914 14.0081L4.06187 10.3017C4.10632 10.0313 4.01667 9.75631 3.82156 9.56421L1.10127 6.92754C0.873762 6.70681 0.794662 6.37535 0.898622 6.07627C0.999569 5.77795 1.25721 5.56024 1.56834 5.51127L5.3124 4.96812C5.59716 4.93874 5.84727 4.76547 5.97534 4.50934L7.62513 1.12687C7.66431 1.05154 7.71478 0.982235 7.7758 0.923475L7.8436 0.870741C7.87901 0.831568 7.91969 0.799175 7.96489 0.772808L8.047 0.742675L8.17507 0.689941H8.49222C8.77547 0.719321 9.02483 0.888821 9.15515 1.14194L10.8268 4.50934C10.9473 4.75568 11.1816 4.92669 11.4521 4.96812L15.1961 5.51127C15.5125 5.55647 15.777 5.77494 15.8817 6.07627C15.9804 6.37836 15.8952 6.70983 15.6632 6.92754L12.8457 9.59434Z" fill="#F7AC3E" />
                    </svg>
                  </>))}
                </div>
                <p> 12 ביקורות </p>
              </span>

            </div>

            {Array(4).fill().map((data, index) => (<>
              <div className={`${styles.profile} , ${index > 1 ? styles.seemore_overflow : ''} `}>

                <div className=''>
                  <span className={styles.name_rate}>
                    <h3> דני מזרחי  </h3>
                    <span>
                      {Array(5).fill().map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                          <path d="M13.9317 9.9335C13.7159 10.1427 13.6167 10.4452 13.6659 10.7418L14.4067 14.8418C14.4692 15.1893 14.3226 15.541 14.0317 15.7418C13.7467 15.9502 13.3676 15.9752 13.0567 15.8085L9.36591 13.8835C9.23758 13.8152 9.09508 13.7785 8.94925 13.7743H8.72341C8.64508 13.786 8.56841 13.811 8.49841 13.8493L4.80675 15.7835C4.62425 15.8752 4.41758 15.9077 4.21508 15.8752C3.72175 15.7818 3.39258 15.3118 3.47341 14.816L4.21508 10.716C4.26425 10.4168 4.16508 10.1127 3.94925 9.90016L0.940079 6.9835C0.688412 6.73933 0.600912 6.37266 0.715912 6.04183C0.827579 5.71183 1.11258 5.471 1.45675 5.41683L5.59841 4.816C5.91341 4.7835 6.19008 4.59183 6.33175 4.3085L8.15674 0.566829C8.20008 0.483496 8.25591 0.406829 8.32341 0.341829L8.39841 0.283496C8.43758 0.240163 8.48258 0.204329 8.53258 0.175163L8.62341 0.141829L8.76508 0.0834961H9.11591C9.42924 0.115996 9.70508 0.303496 9.84925 0.583496L11.6984 4.3085C11.8317 4.581 12.0909 4.77016 12.3901 4.816L16.5317 5.41683C16.8817 5.46683 17.1742 5.7085 17.2901 6.04183C17.3992 6.376 17.3051 6.74266 17.0484 6.9835L13.9317 9.9335Z" fill="#F7AC3E" />
                        </svg>
                      ))}
                    </span>
                  </span>
                  <div className={styles.avatar}>
                    <Image
                      alt="AV"
                      src="https://xsgames.co/randomusers/avatar.php?g=male"
                      width={2250}
                      height={1390}
                    // layout="responsive"
                    />
                  </div>
                </div>
                <p>
                  לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף.
                </p>
              </div>

              {index != 3 && <div className={`${styles.horizontal_divider} ${index > 0 && styles.seemore_overflow}`}   ></div>}


            </>))}

            <button className={styles.seemore} onClick={() => setSeeless(!Seemore)}>
              <svg style={{ transform: Seemore ? "rotate(180deg)" : "" }} xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                <path d="M15 1.5L8 8.5L1 1.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              לראות עוד המלצות

            </button>

          </div>

        </div>

      </div>

      <div className={styles.footer}>
        <h1>
          "בדרך כלל עם הקורס "מכינת מתמטיקה-סמסטר ראשון" רוכשים גם "מכינת מתמטיקה - סמסטר שני
        </h1>
        <h2>
          רכישה שלהם ביחד, נותנת הנחה של 10%
        </h2>

        <div className={styles.card}>

          <div className={styles.left}>
            <div className={styles.price}>
              <p>  <span className={styles.discount}>-10%</span> ₪165.00 14 <span>שיעורים  </span>  </p>
              <p>₪185  <span> החל מ  </span> </p>
              
              <button className={styles.action_btn}>
                <p> הוסף לסל קניות  </p>  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.1855 14.765C5.53716 14.765 5.823 15.0509 5.823 15.4025C5.823 15.7542 5.53716 16.0392 5.1855 16.0392C4.83383 16.0392 4.54883 15.7542 4.54883 15.4025C4.54883 15.0509 4.83383 14.765 5.1855 14.765Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5623 14.765C14.914 14.765 15.1998 15.0509 15.1998 15.4025C15.1998 15.7542 14.914 16.0392 14.5623 16.0392C14.2106 16.0392 13.9248 15.7542 13.9248 15.4025C13.9248 15.0509 14.2106 14.765 14.5623 14.765Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M1.29199 0.956451L3.02533 1.25645L3.82783 10.8173C3.89283 11.5965 4.54366 12.1948 5.32533 12.1948H14.4187C15.1653 12.1948 15.7987 11.6465 15.9062 10.9065L16.697 5.44145C16.7945 4.76729 16.272 4.16395 15.5912 4.16395H3.30366" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M10.7715 7.24394H13.0823" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>

            </div>

          </div>

          <div className={styles.right}>



            <div>
              <h3> ינש רטסמס - הקיטמתמ תניכמ</h3>
              <span className={styles.rate}>

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M12.4392 9.74009C12.2449 9.92834 12.1557 10.2006 12.1999 10.4676L12.8667 14.1576C12.9229 14.4703 12.7909 14.7868 12.5292 14.9676C12.2727 15.1551 11.9314 15.1776 11.6517 15.0276L8.32991 13.2951C8.21441 13.2336 8.08616 13.2006 7.95491 13.1968H7.75166C7.68116 13.2073 7.61216 13.2298 7.54916 13.2643L4.22666 15.0051C4.06241 15.0876 3.87641 15.1168 3.69416 15.0876C3.25016 15.0036 2.95391 14.5806 3.02666 14.1343L3.69416 10.4443C3.73841 10.1751 3.64916 9.90134 3.45491 9.71009L0.746657 7.08509C0.520157 6.86534 0.441407 6.53534 0.544907 6.23759C0.645407 5.94059 0.901907 5.72384 1.21166 5.67509L4.93916 5.13434C5.22266 5.10509 5.47166 4.93259 5.59916 4.67759L7.24166 1.31009C7.28066 1.23509 7.33091 1.16609 7.39166 1.10759L7.45916 1.05509C7.49441 1.01609 7.53491 0.983842 7.57991 0.957592L7.66166 0.927592L7.78916 0.875092H8.10491C8.38691 0.904342 8.63516 1.07309 8.76491 1.32509L10.4292 4.67759C10.5492 4.92284 10.7824 5.09309 11.0517 5.13434L14.7792 5.67509C15.0942 5.72009 15.3574 5.93759 15.4617 6.23759C15.5599 6.53834 15.4752 6.86834 15.2442 7.08509L12.4392 9.74009Z" fill="#F7AC3E" />
                </svg>
                <p>4.8 </p>
                <div className={styles.profile}>
                  <p> ארז כהן </p>
                  <div className={styles.avatar}>
                    <Image
                      alt="AV"
                      src="https://xsgames.co/randomusers/avatar.php?g=male"
                      width={2250}
                      height={1390}
                    // layout="responsive"
                    />
                  </div>
                </div>
              </span>
            </div>
            <div className={styles.img}>
              <Image
                src={"/images/discount.png"}
                fill
                objectFit='contain'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetailPage;
