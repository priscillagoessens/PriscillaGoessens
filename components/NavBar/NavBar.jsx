'use client'
import Logo from '../Logo/Logo'
import logo from '@/public/assets/img/logo2.webp'
import './_NavBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faEnvelope} from '@fortawesome/free-solid-svg-icons'
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
      <nav className='navigation-section'>
        <div className='navigation-section-container'>
            <Logo source={logo} className='navigation-section-container-logo'/>
            <div className='navigation-section-container-nav'>
                <span className='navigation-section-container-burger' onClick={toggleMenu}>
                    {isOpen ?(
                        <FontAwesomeIcon icon={faXmark} />
                    ) : ( 
                        <FontAwesomeIcon icon={faBars} />
                    )}
                </span>
                <ul className={`navigation-section-container-nav-wrapper ${isOpen ? "is-open" : ""}`}>
                
                    <li className='navigation-section-container-nav-wrapper_link' onClick={closeMenu}>
                        <Link href="#description">A propos</Link>
                    </li>
                    <li className='navigation-section-container-nav-wrapper_link' onClick={closeMenu}>
                        <Link href="#projects">Mes projets</Link>
                    </li>
                    <li className='navigation-section-container-nav-wrapper_link' onClick={closeMenu}>
                        <Link href="#skills">Compétences</Link>
                    </li>
                    <li className='navigation-section-container-nav-wrapper_link ' onClick={closeMenu}>
                        <Link href="#contact" className='navigation-section-container-nav-wrapper_link-contact'><FontAwesomeIcon icon={faEnvelope} /></Link>
                    </li>
                </ul>
                        
            </div>
        </div>
      </nav>
  )
}
