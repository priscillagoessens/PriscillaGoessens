import Nav from '../NavBar/NavBar'
import Banner from '../Banner/Banner'
import './_Header.scss'


export default function Header() {
  return (
    <>
      <div className='header-container' id="header">
        <Nav/>
      </div>
      <Banner className='banner-img'/>
    </>
  )
}

