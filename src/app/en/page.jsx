"use client";


import { useEffect, useState } from 'react';

import Hero from "@/components/Hero/Hero";
import SectionStory from "@/components/Story/Story";
import Event from "@/components/Event/Event";
import JoinUs from "@/components/JoinUs/JoinUs";
import Contact from "@/components/Contact/Contact";
import Services from "@/components/Services/Services";
import Divider from "@/components/UI/Divider/Divider";
import VideoPopup from "@/components/UI/PopUp/VideoPopup";


const links = {
  facebook:
    "https://www.facebook.com/Ultramarinos Martínezchicken/?locale=hu_HU",
  instagram: "https://www.instagram.com/Ultramarinos Martínezbp/?hl=hu",
  reservation:
    "https://reservours.com/Ultramarinos Martínez/tablereservation?s=website",
};

const POPUP_KEY = 'videoPopupClosedAt';
const POPUP_TIMEOUT = 30 * 60 * 1000; // 30 minutes in milliseconds

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const lastClosedAt = localStorage.getItem(POPUP_KEY);
    const now = new Date().getTime();

    if (!lastClosedAt || (now - lastClosedAt) > POPUP_TIMEOUT) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 1000); // Show the popup after 1 second

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
    localStorage.setItem(POPUP_KEY, new Date().getTime());
  };

export default function Home() {
  return (
    <>
          {showPopup && <VideoPopup videoUrl="https://www.youtube.com/embed/zljsi4r9v4s" onClose={handleClosePopup} />}

      <Hero lang={true} reservation={links.reservation} />
      <main>
        <Divider marginPrefix={true} />
        <SectionStory lang={true} />
        <Divider />
        <Services lang={true} />
        <Event lang={true} />
        <Divider />
        <JoinUs lang={true} />
        <Divider />
        <Contact lang={true} reservation={links.reservation} />
      </main>
    </>
  );
}
