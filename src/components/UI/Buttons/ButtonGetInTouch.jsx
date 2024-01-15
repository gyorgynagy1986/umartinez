import React from 'react'
import Link from 'next/link'
import style from './Button.module.css'
import { Mukta } from 'next/font/google'


const bebas = Mukta({ subsets: ['latin'], weight: "700" })


const ButtonGetInTouch = ({url, name, underline}) => {

  return (
    <Link target="_blank" href={url}><button className={`${style.buttonGetInTouch} ${underline && style.underline} ${bebas.className}`}>{name}</button></Link>
    )
}

export default ButtonGetInTouch