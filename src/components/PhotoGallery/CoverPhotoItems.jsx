"use client";

import React from "react";
import Image from "next/image";
import style from "./PhotoGallery.module.css";

import photo2 from "../../../public/assets/gallery/covers/Gallery3.png";
import photo3 from "../../../public/assets/gallery/covers/Gallery4.png";
import photo4 from "../../../public/assets/gallery/covers/Gallery5.png";
import photo5 from "../../../public/assets/gallery/covers/Gallery6.png";
import photo6 from "../../../public/assets/gallery/covers/Gallery7.png";
import photo8 from "../../../public/assets/gallery/covers/Gallery9.png";
import photo10 from "../../../public/assets/gallery/covers/Gallery11.png";
import photo12 from "../../../public/assets/gallery/covers/Gallery13.png";
import photo13 from "../../../public/assets/gallery/covers/Gallery14.png";
import photo15 from "../../../public/assets/gallery/covers/Gallery16.png";
import photo16 from "../../../public/assets/gallery/covers/Gallery17.png";
import photo17 from "../../../public/assets/gallery/covers/Gallery18.png";


const photoGalleryCoverPhots = [

 
  {
    id: 1,
    alt: "Ultramarinos Martínez geléria cover photos",
    url: photo2,
  },
  {
    id: 2,
    alt: "Ultramarinos Martínez geléria cover photos",
    url: photo3,
  },
  {
    id: 3,
    alt: "Ultramarinos Martínez geléria cover photos",
    url: photo4,
  },
  {
    id: 4,
    alt: "Ultramarinos Martínez geléria cover photos",
    url: photo5,
  },
  {
    id: 5,
    alt: "Ultramarinos Martínez geléria cover photos",
    url: photo6,
  },

  {
    id: 6,
    alt: "Ultramarinos Martínez geléria cover photos",
    url: photo8,
  },
 
  {
    id: 7,
    alt: "Ultramarinos Martínez geléria cover photos",
    url: photo10,
  },
 
  {
    id: 8,
    alt: "Ultramarinos Martínez geléria cover photos",
    url: photo12,
  },
  {
    id: 9,
    alt: "Ultramarinos Martínez geléria cover photos",
    url: photo13,
  },

  {
    id: 10,
    alt: "Ultramarinos Martínez geléria cover photos",
    url: photo15,
  },
  {
    id: 11,
    alt: "Ultramarinos Martínez geléria cover photos",
    url: photo16,
  },
  {
    id: 12,
    alt: "Ultramarinos Martínez geléria cover photos",
    url: photo17,
  },
];

const CoverPhotoItems = ({ photoGalleryHandler }) => {
  const handleClick = (id) => {
    photoGalleryHandler(id);
  };

  return (
    <>
      {photoGalleryCoverPhots.map((coverPhoto) => (
        <div
          onClick={() => handleClick(coverPhoto.id)}
          className={style.hoverProperty}
        >
          <Image
            // priority
            placeholder="blur"
            onClick={() => handleClick(coverPhoto.id)}
            key={coverPhoto.id}
            alt={coverPhoto.alt}
            src={coverPhoto.url}
          ></Image>
        </div>
      ))}
    </>
  );
};

export default CoverPhotoItems;
