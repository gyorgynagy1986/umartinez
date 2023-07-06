import style from './page.module.css'
import Image from 'next/image'
import Button from '@/components/UI/Buttons/Button'
import ButtonGetInTouch from '@/components/UI/Buttons/ButtonGetInTouch'
import mapPhoto from '../../../../public/assets/sections/map_contact.png' 
import facebook from '../../../../public/assets/social/facebook.svg'
import instagram from '../../../../public/assets/social/instagram.svg'
import { Orelega_One } from "next/font/google";

const dosis = Orelega_One({ subsets: ['latin'], weight:"400" })

export const metadata = {
  title: 'Contact - Fuego',
}

const textContent = {
  h3: 'Restaurante Fuego',
  btn:'book a table now',
  btn2: 'Contact' ,
  facebook: 'https://www.facebook.com/FUEGOchicken/?locale=hu_HU',
  instagram: 'https://www.instagram.com/fuegobp/?hl=hu',
  reservation: 'https://reservours.com/fuego/tablereservation?s=website' 
}

const Contact = () => {
  return (
    <>
    <section className={style.container}>
        <div className={style.imageContainer}>
          <div className={style.layer}></div>
          <Image placeholder="blur" priority alt='Fuego' src={mapPhoto}/>
        </div>
      <div className={style.itemsContainer}>
          <div className={style.textContainer}>
              <h1 className={dosis.className}>{textContent.h3}</h1>
              <p className={style.contactText}>1075 Budapest, Kazinczy utca 3b.</p>
              <p className={style.contactText}>+ 36 30 317 69 65</p>
              <p className={style.contactText}>hola@fuegobp.hu</p>
          </div>

          <div className={style.btnContainer}>
              <div className={style.socialContainerItem}>
                <Image alt='Fuego étterem facebbok oldala' src={facebook} />
                <ButtonGetInTouch url={textContent.facebook} name={'facebook'}/>
              </div>
              <div className={style.socialContainerItem}>
                <Image alt='Fuego étterem isntagram oldala' src={instagram} />
                <ButtonGetInTouch url={textContent.instagram} name={'instagram'}/>
              </div>
                <div className={style.btnContainerItem}>
                  <Button url={textContent.reservation} name={textContent.btn}/>
                </div>
          </div>
      </div>  
    </section>
    </>
  )
}

export default Contact