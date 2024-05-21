import React from 'react'
import Logo from '../Logo/Logo'
import logoBlack from '@/public/assets/img/logo-black.webp'
import './_Footer.scss'

export default function Footer() {
  return (
    <div className='footer-section'>
        <div className='footer-section-container'>
            <Logo source={logoBlack} className='footer-section-container-logo'/>
            <a href="#header">^</a>
        </div>
    </div>
  )
}
