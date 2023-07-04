import React from 'react'
import style from './Fotter.module.css'
import Link from 'next/link'
import Button from '../UI/Buttons/ButtonGetInTouch'

const bromoStyle = {
  marginTop: '1px',
  textDecorationLine: 'unset',
  color: '#FFF4E5',
  fontSize: '12px'
}

const creatorlink = 'https://studiobromo.hu/'

const Footer = () => {
  return (
    <footer className={style.container}>
        <div className={style.containerTextleft}>
          <p className={style.containerTextleftCookieMobile} >Cookie policy</p>    
            <Button url={'/'} underline={true} name={'GRUPO 10'}/>
            <div className={style.containerTextP}>
                <p className={style.containerTextleftP}></p>
            </div>
            <Link href='https://www.grupo10.hu/'>Learn more about grupo 10</Link>
            <div className={style.containerCookie}>
                <div className={style.containerTextleftReserved}> <p> All rights reserved <span>©</span></p><p>Grupo10.hu</p> <p className={style.mobileTurn}>|</p> <p>2023</p> <Link style={bromoStyle} href={creatorlink}>Website by Studio Bromo</Link> </div>
                <p className={style.containerTextleftCookie} >Cookie policy</p>    
            </div>
        </div>
    </footer>
  )
}

export default Footer