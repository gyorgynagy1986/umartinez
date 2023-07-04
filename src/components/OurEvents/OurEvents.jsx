import style from './OurEvents.module.css'
import { Dosis } from 'next/font/google'
import Image from 'next/image'

import Button from '../UI/Buttons/ButtonGetInTouch'
import facebook from '../../../public/assets/social/facebook.svg'
import instagram from '../../../public/assets/social/instagram.svg'

import ourEvents from '../../../public/section_1_tablet.png'


const dosis = Dosis({ subsets: ['latin'] })

const textContent = {
    h2: 'Check out our events!',
    p: 'Suspendisse in bibendum lorem, ac ullamcorper turpis.  Etiam et diam orci. Phasellus vitae gravida dolor.Etiam et diam orci. Phasellus vitae gravida dolor. Nunc sollicitudin diam. ',
    btn:'étlapunk',
}

const OurEvents = () => {
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <div className={style.layer}></div>
        <Image alt='Fuego' src={ourEvents}/>
    </div>
    <div className={style.textContainer}>
      <h2 className={dosis.className}>{textContent.h2}</h2>
      <p>{textContent.p}</p>
        <div className={style.socialContainer}>
            <div className={style.socialContainerItem}>
              <Image alt='Fuego étterem facebbok oldala' src={facebook} />
              <Button url={'/'} name={'facebbok'}/>
            </div>
            <div className={style.socialContainerItem}>
              <Image alt='Fuego étterem isntagram oldala' src={instagram} />
              <Button url={'/'} name={'instagram'}/>
            </div>
        </div>
    </div>
  </div>
  )
}

export default OurEvents