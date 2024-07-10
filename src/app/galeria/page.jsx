"use client";

import { useState } from 'react';
import style from './page.module.css';
import dynamic from 'next/dynamic';
import CoverPhotoItems from "@/components/PhotoGallery/CoverPhotoItems";
import { Orelega_One } from "next/font/google";
import Spinner from '@/components/UI/Spinner/Spinner'; // Import the Spinner component

const dosis = Orelega_One({ subsets: ['latin'], weight: "400" });

const PhotoGallery = dynamic(() => import('@/components/PhotoGallery/PhotoGallery'), {
  loading: () => <Spinner />, // Use the Spinner component here
  ssr: false,
});

const Gallery = () => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedImageId, setSelectedImageId] = useState(null);

  const openGallery = (id) => {
    setSelectedImageId(id);
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setSelectedImageId(null);
    setGalleryOpen(false);
  };

  return (
    <>
      {!galleryOpen && <h1 className={`${style.h1} ${dosis.className}`}>Galéria</h1>}
      {!galleryOpen && (
        <div className={style.container}>
          <CoverPhotoItems photoGalleryHandler={openGallery} />
        </div>
      )}
      {galleryOpen && <PhotoGallery clickedItem={selectedImageId} galleryClose={closeGallery} />}
    </>
  );
};

export default Gallery;
