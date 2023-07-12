import React, { useState, useEffect } from 'react'
import style from './MobileMenu.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation';


const items = [
    
  {
      id:1,
      name: 'Főoldal', 
      url: '/'
  }, 
  {
      id:2,
      name: 'Galéria', 
      url: '/galeria'
  }, 
  {
      id:3,
      name: 'Étlap',  
      url: '/etlap'
  }, 
  {
      id:4,
      name: 'Kapcsolat', 
      url: '/kapcsolat',
  }, 
  {
    id:5,
    name: 'Nyitvatartás', 
    url: '/#opening',
}, 
]

const itemsEng = [
    
  {
      id:1,
      name: 'Home', 
      url: '/en'
  }, 
  {
      id:2,
      name: 'Gallery', 
      url: '/en/gallery'
  }, 
  {
      id:3,
      name: 'Menu',  
      url: '/en/menu'
  }, 
  {
      id:4,
      name: 'Contact', 
      url: '/en/contact',
  }, 
  {
    id:5,
    name: 'Opening Hours', 
    url: 'en/#opening',
}, 
]
  

const MobileMenuItem = ({mobileClose}) => {
const pathname = usePathname();
const [langHandler, setLangHandler] = useState(false);

useEffect(() => {
  if (pathname.includes('/en')) {
    setLangHandler(true);
  } else {
    setLangHandler(false)
  }
}, [pathname]);
 
return (
    <>
      {!langHandler ? items.map((linkItem)=> (
       <Link onClick={mobileClose}
             className={style.mobileMenuLink }
             href={linkItem.url}
             key={linkItem.id}
             >
            
         <li className={pathname === linkItem.url ? style.active : ''}>
         {linkItem.name}
         </li>
        </Link>))
        :
        itemsEng.map((linkItem)=> (
       <Link onClick={mobileClose}
             className={style.mobileMenuLink }
             href={linkItem.url}
             key={linkItem.id}
             >
         <li className={pathname === linkItem.url ? style.active : ''}>
         {linkItem.name}
         </li>
        </Link>))} 

    </>
  )
}

export default MobileMenuItem