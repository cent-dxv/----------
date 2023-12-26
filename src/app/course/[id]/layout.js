import Footer from "@/src/components/footer_2";
import Navbar from "@/src/components/navbar_2";

import styles from '@/styles/components/course_detail_page.module.scss'


export default function courseLayout({
  children, // will be a page or nested layout
}) {
  return (
    <div className={styles.root}>
      <Navbar />

      {children}
      <Footer />
    </div>
  )
}