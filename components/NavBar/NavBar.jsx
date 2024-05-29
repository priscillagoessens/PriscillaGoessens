'use client'
import Logo from '../Logo/Logo'
import logo from '@/public/assets/img/logo2.webp'
import './_NavBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Link from 'next/link'


export default function Nav() {
    const [isOpen, setIsOpen]= useState(false)

    const toggleMenu =()=>{
        setIsOpen(!isOpen);
    }
    
    const closeMenu=()=>{
        setIsOpen(false)
    }

  return (
      <nav className='navigation-container'>
        <Logo source={logo} className='navigation-container-logo'/>
        <ul className={`navigation-container-wrapper ${isOpen ? "is-open" : ""}`}>
            <li className='navigation-container-wrapper_link' onClick={closeMenu}>
                <Link href="#description">A propos</Link>
            </li>
            <li className='navigation-container-wrapper_link' onClick={closeMenu}>
                <Link href="#projects">Projets</Link>
            </li>
            <li className='navigation-container-wrapper_link' onClick={closeMenu}>
                <Link href="#skills">Compétences</Link>
            </li>
            <li className='navigation-container-wrapper_link' onClick={closeMenu}>
                <Link href="#contact">Contact</Link>
            </li>
        </ul>
        <span className='navigation-container-burger' onClick={toggleMenu}>
            {isOpen ?(
                <FontAwesomeIcon icon={faXmark} />
            ) : ( 
                <FontAwesomeIcon icon={faBars} />
            )}
        </span>        
      </nav>
  )
}
