import Link from 'next/link'
import React from 'react'
import style from './Button.module.css'
import { Mukta } from 'next/font/google'

const mukta = Mukta({ subsets: ['latin'], weight: "700" })

const Button = ({name, url, btnBlue, btnHoverPrefix, engColorPreReserv,  buttonContact, engColorPrefixJoin,  differentTexMainColor, engColorPrefix, engColorPrefixBlue, engColorPrefixBlueContact}) => {

  return (
    <Link href={url}>
      <button 
        className={
          `${style.button}
           ${differentTexMainColor && style.differentTexMainColor}
           ${buttonContact && style.butnBlueContact}
           ${engColorPrefix && style.engColorPrefix}
           ${engColorPreReserv && style.engColorPreReserv}
           ${btnHoverPrefix && style.btnHoverPrefix}
           ${engColorPrefixJoin && style.engColorPrefixJoin}
           ${engColorPrefixBlueContact && style.engColorPrefixBlueContact}
           ${engColorPrefixBlue && style.engColorPrefixBlue}
           ${btnBlue && style.butnBlue}
           ${mukta.className}`}>
          {name}
      </button>
    </Link>
  )
}

export default Button