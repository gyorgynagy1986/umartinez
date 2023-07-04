import React, { useState, useEffect } from 'react'
import style from './Navbar.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const LanguageLinks = ({mobilStyle, mobileClose}) => {
    const pathname = usePathname();
    const [langHandlerEn, setLangHandlerEn] = useState('/');
    const [langHandlerHu, setLangHandlerHu] = useState('/');

    const activeHandler = `${pathname === '/' || pathname === '/etlap' || pathname === '/galeria' ||  pathname === '/kapcsolat' ? style.activeLang : ''}`
    const activeHandlerEn = `${pathname === '/en' || pathname === '/en/menu' || pathname === '/en/contact' ||  pathname === '/en/gallery' ? style.activeLang : ''}`


    useEffect(() => {
      if (pathname === '/') {
        setLangHandlerEn('/en');
      } else if (pathname === '/en') {
        setLangHandlerEn('/en')
      } else if (pathname === '/en/gallery') {
        setLangHandlerEn('/en/gallery')
        setLangHandlerHu('/galeria')
      } else if (pathname === '/en/menu') {
        setLangHandlerEn('/en/menu')
        setLangHandlerHu('/etlap')
      } else if (pathname === '/en/contact') {
        setLangHandlerEn('/en/contact')
        setLangHandlerHu('/kapcsolat')
      }
    }, [pathname]);

    useEffect(() => {
      if (pathname === '/en') {
        setLangHandlerHu('/');
      } else if (pathname === '/galeria') {
        setLangHandlerEn('/en/gallery')
        setLangHandlerHu('/galeria')
      } else if (pathname === '/etlap') {
        setLangHandlerEn('/en/menu')
        setLangHandlerHu('/etlap')
      } else if (pathname === '/kapcsolat') {
        setLangHandlerEn('/en/contact')
        setLangHandlerHu('/kapcsolat')
      }
    }, [pathname]);

  
  return (
    <div className={mobilStyle && style.mobilStyle }>
         <Link onClick={mobileClose}  href={langHandlerEn}><span className={activeHandlerEn}>EN</span></ Link>
            <span className={style.activeLang}> / </span>
         <Link onClick={mobileClose} href={langHandlerHu}><span className={activeHandler} >HU</span></ Link>
    </div>
  )
}

export default LanguageLinks