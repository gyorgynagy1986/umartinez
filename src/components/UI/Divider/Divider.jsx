import React from 'react'
import Image from 'next/image'
import style from  './Divider.module.css'
import photo from '../../../../public/assets/icons/devider.svg'


const Divider = ({marginPrefix}) => {
  return (
    <div className={`${style.container} ${marginPrefix && style.heightPrefix}`}>
        <Image src={photo} alt='design pattern devider' />
    </div>
  )
}

export default Divider