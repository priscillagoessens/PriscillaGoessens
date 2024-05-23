'use client'
import Logo from '../Logo/Logo'
import logo from '@/public/assets/img/logo2.webp'
import './_NavBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';


export default function Nav() {
    const [isOpen, setIsOpen]= useState(false)

    const toggleMenu =()=>{
        setIsOpen((open) => !open);
        console.log('Menu is now', !isOpen ? 'open' : 'closed');
    }
    
    const closeMenu=()=>{
        setIsOpen(false)
    }

  return (
      <nav className='navigation-container'>
        <Logo source={logo} className='navigation-container-logo'/>
        <ul className={`navigation-container-wrapper ${isOpen ? "is-open" : ""}`}>
            <li className='navigation-container-wrapper_link' onClick={closeMenu}>
                <a href="#description">A propos</a>
            </li>
            <li className='navigation-container-wrapper_link' onClick={closeMenu}>
                <a href="#projects">Projets</a>
            </li>
            <li className='navigation-container-wrapper_link' onClick={closeMenu}>
                <a href="#skills">Skills</a>
            </li>
            <li className='navigation-container-wrapper_link' onClick={closeMenu}>
                <a href="#contact">Contact</a>
            </li>
        </ul>
        <button className='navigation-container-burger' onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
            </button>        
      </nav>
  )
}
