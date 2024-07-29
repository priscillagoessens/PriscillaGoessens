import Nav from '../NavBar/NavBar'
import Banner from '../Banner/Banner'
import imgBackground from '@/public/assets/img/banner-montagne.jpg'
import './_Header.scss'


export default function Header() {
    const homeTitle = "Priscilla Goessens Developpeuse Front end"
  return (
    <div className='header-container' id="header">
      <Nav/>
      <Banner className='header-container-wrapper_banner-img'/>
    </div>
  )
}

