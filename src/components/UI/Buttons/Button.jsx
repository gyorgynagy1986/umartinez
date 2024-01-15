import Link from 'next/link'
import React from 'react'
import style from './Button.module.css'
import { Mukta } from 'next/font/google'

const mukta = Mukta({ subsets: ['latin'], weight: "700" })

const Button = ({name, url, btnBlue, }) => {

  return (
    <Link href={url} target="_blank">
      <button 
        className={
          `${style.button}
           ${btnBlue && style.butnBlue}
           ${mukta.className}`}>
          {name}
      </button>
    </Link>
  )
}

export default Button