import React from 'react'
import style from './MobileMenu.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../UI/Logo/Logo'
import MobileMenuItem from './MobileMenuItem'
import Button from '../UI/Buttons/Button'
import { usePathname } from 'next/navigation';
import LanguageLinks from '../../components/Navbar/LanguageLinks'

import facebook from '../../../public/assets/social/facebook.svg'
import instagram from '../../../public/assets/social/instagram.svg'

const links = {
  facebook:
    "https://www.instagram.com/ultramarinosbp/",
  instagram: "https://www.instagram.com/ultramarinosbp/",
  reservation:
    "https://reservours.com/ultramarinosmartinezspanyoldeli/tablereservation?s=instagram",
};

const textContentHu = {
  btnName:'asztalfoglalás',
}

const textContentEng = {
btnName:'reservation',
}

const MobileMenu = ({mobileClose}) => {
  const pathname = usePathname()


  return (
    <>
    <div className={style.mobileMenu}>
      <div className={style.mobileMenuContainer}>
          <Logo mobileClose={mobileClose} />
          <ul className={style.mobileMenuUl}>
        <MobileMenuItem mobileClose={mobileClose} />
          </ul>
          <LanguageLinks mobileClose={mobileClose} mobilStyle={true} />
        <div className={style.mobileMenuSocialContainer}>
            <Link href={links.facebook}><Image src={facebook} /></Link>
            <Link href={links.instagram}><Image src={instagram} /></Link>
        </div>
        <Button url={links.reservation} name={pathname === '/en' || pathname === '/en/menu' || pathname === '/en/contact' ||  pathname === '/en/gallery' ? textContentEng.btnName : textContentHu.btnName } />
      </div>
    </div>
  </>
  )
}

export default MobileMenu