"use client"

import React from 'react'
import Image from "next/image"
import style from './PhotoGallery.module.css'

import photo from '../../../public/assets/gallery/covers/Gallery1.png'
import photo1 from '../../../public/assets/gallery/covers/Gallery2.png'
import photo2 from '../../../public/assets/gallery/covers/Gallery3.png'
import photo3 from '../../../public/assets/gallery/covers/Gallery4.png'
import photo4 from '../../../public/assets/gallery/covers/Gallery5.png'
import photo5 from '../../../public/assets/gallery/covers/Gallery6.png'
import photo6 from '../../../public/assets/gallery/covers/Gallery7.png'
import photo7 from '../../../public/assets/gallery/covers/Gallery8.png'

  const photoGalleryCoverPhots = [
    { 
      id:1, 
      alt:'fuego geléria cover photos',
      url:photo
    },
    { 
      id:2, 
      alt:'fuego geléria cover photos',
      url:photo1
    },
    { 
      id:3, 
      alt:'fuego geléria cover photos',
      url:photo2
    },
    { 
      id:4, 
      alt:'fuego geléria cover photos',
      url:photo3
    },
    { 
      id:5, 
      alt:'fuego geléria cover photos',
      url:photo4
    },
    { 
      id:6, 
      alt:'fuego geléria cover photos',
      url:photo5
    },
    { 
      id:7, 
      alt:'fuego geléria cover photos',
      url:photo6
    },
    { 
      id:8, 
      alt:'fuego geléria cover photos',
      url:photo7
    },
  
  ]

  const CoverPhotoItems = ({ photoGalleryHandler }) => {
   
    const handleClick = (id) => {
      photoGalleryHandler(id);
    };

  return (
    <> 
      {photoGalleryCoverPhots.map((coverPhoto)=>
      (<div onClick={() => handleClick(coverPhoto.id,)} className={style.hoverProperty}><Image 
       // priority
        placeholder="blur"  
        onClick={() => handleClick(coverPhoto.id,)}
        key={coverPhoto.id}
        alt={coverPhoto.alt}
        src={coverPhoto.url}>
      </Image></div>))}
    </>
  )
}

export default CoverPhotoItems