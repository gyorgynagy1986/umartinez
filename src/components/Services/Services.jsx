"use client"

import style from './Services.module.css'
import { Orelega_One } from 'next/font/google'
import Image from 'next/image'
import HeroCoverPhoto from '../../../public/assets/sections/Our_services2.png'
import { useParallax } from 'react-scroll-parallax';

const dosis = Orelega_One({ subsets: ['latin'], weight: "400" })

const textContent = {
    h2: 'Szolgáltatások ',
    p: 'Örömmel várjuk asztalfoglalásod éttermünkben, ha céges rendezvényt szervezel, vagy megünnepelnél egy különleges pillanatot családoddal vagy barátaiddal. Mi biztosítjuk a finom ételeket és a jó hangulatot!',
    p1:'Céges rendezvények',
    p2: 'baráti összejövetelek',
    p3: 'születésnapok'
  }

  const textContentEn = {
    h2: 'Services ',
    p: 'We are looking forward to your table reservation in our restaurant, whether it is for a corporate event or celebrating a special moment with your family or friends. We guarantee the delicious food and a great atmosphere!',
    p1:'Corporate events',
    p2: 'get-togethers',
    p3: 'birthday celebrations'
  }

const Services = ({lang}) => {

  const titleLogic = !lang ? textContent.h2 : textContentEn.h2;
  const liLogic = !lang ? textContent.p1 : textContentEn.p1;
  const liLogic2 = !lang ? textContent.p2 : textContentEn.p2;
  const liLogic3 = !lang ? textContent.p3 : textContentEn.p3;
  const pLgoic = !lang ? textContent.p : textContentEn.p;

  const parallax = useParallax({
    opacity	: [-1, 5],
    speed:-1
  });

  return (
    <section  className={style.container}>
         <div className={style.prefixContainer}>
         <div className={style.imageContainer}>
          <Image placeholder="blur" alt='Fuego' src={HeroCoverPhoto}/>
        </div>
        <div ref={parallax.ref} className={style.textContainer}>
            <h2 className={dosis.className}>{titleLogic}</h2>
            <ul className={style.ulContainer}>
              <li>{liLogic}</li>
              <li>{liLogic2}</li>
              <li>{liLogic3}</li>
            </ul>
            <p>{pLgoic}</p>
        </div>
        </div>
    </section>
  )
}

export default Services