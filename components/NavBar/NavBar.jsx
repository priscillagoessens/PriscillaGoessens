import Logo from '../Logo/Logo'
import logo from '@/public/assets/img/logo2.png'
import './_NavBar.scss';

export default function Nav() {
  return (
      <nav className='navigation-container'>
        <Logo source={logo} className='navigation-container-logo'/>
        <ul className='navigation-container-wrapper'>
            <li className='navigation-container-wrapper_link'>
                <a href="#description">A propos</a>
            </li>
            <li className='navigation-container-wrapper_link'>
                <a href="#projects">Projets</a>
            </li>
            <li className='navigation-container-wrapper_link'>
                <a href="#skills">Skills</a>
            </li>
            <li className='navigation-container-wrapper_link'>
                <a href="#contact">Contact</a>
            </li>
        </ul>
      </nav>
  )
}
