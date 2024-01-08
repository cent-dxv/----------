import Image from 'next/image'
import style_navbar from '@/styles/components/navbar.module.scss'
import Course_Main from './components/main'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'

export default function Home() {
  return (
    <>
      <div className={``}>
        <Navbar />
        <Course_Main />
      </div>
      <Footer />


    </>
  )
}
