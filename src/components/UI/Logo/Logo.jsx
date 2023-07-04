import React from 'react'
import logo from '../../../../public/assets/logo/logo.svg'
import Link from 'next/link'
import Image from 'next/image'
import style from './Logo.module.css'


const Logo = ({onClick, mobileClose}) => {
  
  
  
  return (
    <>
    <Link onClick={onClick} className={style.logoMain} href='/'><Image onClick={mobileClose} priority alt='Fuego étterem logója' src={logo}/></Link> 
    </>
  )
}

export default Logo