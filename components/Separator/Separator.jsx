import React from 'react'
import './_Separator.scss'
import Image from 'next/image'
import SeparatorImg from '@/public/assets/img/white-bd.jpg'


export default function Separator() {
  return (
    <Image src={SeparatorImg} alt="banniere" className="line"/>
  )
}
