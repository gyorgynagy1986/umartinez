"use client";

import React from "react";
import Image from "next/image";
import style from "./PhotoGallery.module.css";

import photo from "../../../public/assets/gallery/covers/Gallery1.png";
import photo1 from "../../../public/assets/gallery/covers/Gallery2.png";
import photo2 from "../../../public/assets/gallery/covers/Gallery3.png";
import photo3 from "../../../public/assets/gallery/covers/Gallery4.png";
import photo4 from "../../../public/assets/gallery/covers/Gallery5.png";
import photo5 from "../../../public/assets/gallery/covers/Gallery6.png";
import photo6 from "../../../public/assets/gallery/covers/Gallery7.png";
import photo7 from "../../../public/assets/gallery/covers/Gallery8.png";
import photo8 from "../../../public/assets/gallery/covers/Gallery9.png";
import photo9 from "../../../public/assets/gallery/covers/Gallery10.png";
import photo10 from "../../../public/assets/gallery/covers/Gallery11.png";
import photo11 from "../../../public/assets/gallery/covers/Gallery12.png";

const photoGalleryCoverPhots = [
  {
    id: 1,
    alt: "Ultramarinos Martínez geléria cover photos",
    url: photo,
  },
  {
    id: 2,
    alt: "Ultramarinos Martínez geléria cover photos",
    url: photo1,
  },
  {
    id: 3,
    alt: "Ultramarinos Martínez geléria cover photos",
    url: photo2,
  },
  {
    id: 4,
    alt: "Ultramarinos Martínez geléria cover photos",
    url: photo3,
  },
  {
    id: 5,
    alt: "Ultramarinos Martínez geléria cover photos",
    url: photo4,
  },
  {
    id: 6,
    alt: "Ultramarinos Martínez geléria cover photos",
    url: photo5,
  },
  {
    id: 7,
    alt: "Ultramarinos Martínez geléria cover photos",
    url: photo6,
  },
  {
    id: 8,
    alt: "Ultramarinos Martínez geléria cover photos",
    url: photo7,
  },
  {
    id: 9,
    alt: "Ultramarinos Martínez geléria cover photos",
    url: photo8,
  },
  {
    id: 10,
    alt: "Ultramarinos Martínez geléria cover photos",
    url: photo9,
  },
  {
    id: 11,
    alt: "Ultramarinos Martínez geléria cover photos",
    url: photo10,
  },
  {
    id: 12,
    alt: "Ultramarinos Martínez geléria cover photos",
    url: photo11,
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
