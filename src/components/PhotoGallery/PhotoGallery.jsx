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



import galleryCloseIcon from "../../../public/assets/icons/close.svg";

const PhotoGallery = ({ galleryClose, clickedItem }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(clickedItem - 1);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);

  const photos = [
   
   
    {
      id: 1,
      title: "Photo 3",
      imageUrl: photo2,
    },
    {
      id: 2,
      title: "Photo 4",
      imageUrl: photo3,
    },
    {
      id: 3,
      title: "Photo 5",
      imageUrl: photo4,
    },
    {
      id: 4,
      title: "Photo 6",
      imageUrl: photo5,
    },
    {
      id: 5,
      title: "Photo 7",
      imageUrl: photo6,
    },
  
    {
      id: 6,
      title: "Photo 9",
      imageUrl: photo8,
    },
   
    {
      id: 7,
      title: "Photo 11",
      imageUrl: photo10,
    },
   
    {
      id: 8,
      title: "Photo 13",
      imageUrl: photo12,
    },
    {
      id: 8,
      title: "Photo 14",
      imageUrl: photo13,
    },
   
    {
      id: 10,
      title: "Photo 16",
      imageUrl: photo15,
    },
    {
      id: 11,
      title: "Photo 17",
      imageUrl: photo16,
    },
    {
      id: 12,
      title: "Photo 18",
      imageUrl: photo17,
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
