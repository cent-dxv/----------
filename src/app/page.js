import Image from 'next/image'
import style_navbar from '@/styles/components/navbar.module.scss'
import Course_Main from '../components/courses_page/main'
import Footer from '../components/footer'

export default function Home() {
  return (
    <>
      <div className={``}>
      <Course_Main/>


      </div>
      <Footer/>


    </>
  )
}
