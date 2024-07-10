"use client";

import React, { useState, useEffect } from "react";
import style from "./PhotoGallery.module.css";
import Image from "next/image";
import left from "../../../public/assets/icons/left.svg";
import right from "../../../public/assets/icons/right.svg";

import photo2 from "../../../public/assets/gallery/photos/Gallery3.webp";
import photo3 from "../../../public/assets/gallery/photos/Gallery4.webp";
import photo4 from "../../../public/assets/gallery/photos/Gallery5.webp";
import photo5 from "../../../public/assets/gallery/photos/Gallery6.webp";
import photo6 from "../../../public/assets/gallery/photos/Gallery7.webp";
import photo8 from "../../../public/assets/gallery/photos/Gallery9.webp";
import photo10 from "../../../public/assets/gallery/photos/Gallery11.webp";
import photo12 from "../../../public/assets/gallery/photos/Gallery13.webp";
import photo13 from "../../../public/assets/gallery/photos/Gallery14.webp";
import photo15 from "../../../public/assets/gallery/photos/Gallery16.webp";
import photo16 from "../../../public/assets/gallery/photos/Gallery17.webp";
import photo17 from "../../../public/assets/gallery/photos/Gallery18.webp";
import photo18 from "../../../public/assets/gallery/photos/Gallery19.jpg";
import photo19 from "../../../public/assets/gallery/photos/Gallery20.jpg";
import photo20 from "../../../public/assets/gallery/photos/Gallery21.jpg";
import photo21 from "../../../public/assets/gallery/photos/Gallery22.jpg";
import photo22 from "../../../public/assets/gallery/photos/Gallery23.jpg";


import galleryCloseIcon from "../../../public/assets/icons/close.svg";

const PhotoGallery = ({ galleryClose, clickedItem }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(clickedItem - 1);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);

  const photos = [
   
   
    {
      id: 1,
      title:"Ultramarinos Martínez geléria",
      imageUrl: photo2,
    },
    {
      id: 2,
      title: "Ultramarinos Martínez geléria",
      imageUrl: photo3,
    },
    {
      id: 3,
      title: "Ultramarinos Martínez geléria",
      imageUrl: photo4,
    },
    {
      id: 4,
      title: "Ultramarinos Martínez geléria",
      imageUrl: photo5,
    },
    {
      id: 5,
      title: "Ultramarinos Martínez geléria",
      imageUrl: photo6,
    },
  
    {
      id: 6,
      title: "Ultramarinos Martínez geléria",
      imageUrl: photo8,
    },
   
    {
      id: 7,
      title: "Ultramarinos Martínez geléria",
      imageUrl: photo10,
    },
   
    {
      id: 8,
      title: "Ultramarinos Martínez geléria",
      imageUrl: photo12,
    },
    {
      id: 8,
      title: "Ultramarinos Martínez geléria",
      imageUrl: photo13,
    },
   
    {
      id: 10,
      title: "Ultramarinos Martínez geléria",
      imageUrl: photo15,
    },
    {
      id: 11,
      title: "Ultramarinos Martínez geléria",
      imageUrl: photo16,
    },
    {
      id: 12,
      title: "Ultramarinos Martínez geléria",
      imageUrl: photo17,
    },
    {
      id: 13,
      title: "Ultramarinos Martínez geléria",
      imageUrl: photo18,
    },
    {
      id: 14,
      title: "Ultramarinos Martínez geléria",
      imageUrl: photo19,
    },
    {
      id: 15,
      title: "Ultramarinos Martínez geléria",
      imageUrl: photo20,
    },
    {
      id: 16,
      title: "Ultramarinos Martínez geléria",
      imageUrl: photo21,
    },
    {
      id: 17,
      title: "Ultramarinos Martínez geléria",
      imageUrl: photo22,
    },
  ];

  const currentPhoto = photos[currentPhotoIndex];

  const handleNextPhoto = () => {
    if (currentPhotoIndex < photos.length - 1 && imageLoaded) {
      setCurrentPhotoIndex((prevIndex) => prevIndex + 1);
      setImageLoaded(false);
    } else if (imageLoaded) {
      setCurrentPhotoIndex(0);
      setImageLoaded(false);
    }
  };

  const handlePrevPhoto = () => {
    if (currentPhotoIndex > 0 && imageLoaded) {
      setCurrentPhotoIndex((prevIndex) => prevIndex - 1);
      setImageLoaded(false);
    } else if (imageLoaded) {
      setCurrentPhotoIndex(photos.length - 1);
      setImageLoaded(false);
    }
  };

  useEffect(() => {
    // Update the imageLoaded state when the photo changes
    setImageLoaded(false);
  }, [currentPhotoIndex]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchEnd = (event) => {
    const touchEndX = event.changedTouches[0].clientX;
    const touchDiffX = touchEndX - touchStartX;

    if (touchDiffX > 50) {
      handlePrevPhoto();
    } else if (touchDiffX < -50) {
      handleNextPhoto();
    }
  };

  return (
    <>
      <div className={style.container}>
        <div
          onClick={galleryClose}
          className={style.layerToCloseTheGallery}
        ></div>
        <div
          className={style.containerImage}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <Image
            className={style.galleryClose}
            onClick={galleryClose}
            src={galleryCloseIcon}
            alt="bezár gomb"
          />

          {imageLoaded ? (
            <Image
              src={currentPhoto.imageUrl}
              alt={currentPhoto.title}
              priority
              onLoad={handleImageLoad}
            />
          ) : (
            <Image
              src={currentPhoto.imageUrl}
              alt={currentPhoto.title}
              style={{ filter: "blur(10px)" }}
              onLoad={handleImageLoad}
            />
          )}

          <div className={style.clickHandelerContainer}>
            <Image
              width={15}
              height={15}
              onClick={handlePrevPhoto}
              alt="képgaléria gomb"
              src={left}
            ></Image>
            <p className={style.photoCounter}>
              {currentPhoto.id}/{photos.length}
            </p>
            <Image
              width={15}
              height={15}
              onClick={handleNextPhoto}
              alt="képgaléria gomb"
              src={right}
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoGallery;
