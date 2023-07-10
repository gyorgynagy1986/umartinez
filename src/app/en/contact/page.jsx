"use client"

import style from "./page.module.css";
import Image from "next/image";
import Button from "@/components/UI/Buttons/Button";
import ButtonGetInTouch from "@/components/UI/Buttons/ButtonGetInTouch";
import mapPhoto from "../../../../public/assets/sections/map_contact.webp";
import facebook from "../../../../public/assets/social/facebook.svg";
import instagram from "../../../../public/assets/social/instagram.svg";
import { Orelega_One } from "next/font/google";
import Link from "next/link";
import Direction from './../../../../public/assets/icons/directions.svg'
const dosis = Orelega_One({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Contact - Ultramarinos Martínez",
};

const textContent = {
  h1: "Contact",
  h3: "Ultramarinos Martínez",
  btn: "book a table now",
  btn2: "Contact",
  facebook:
    "https://www.facebook.com/ultramarinosbp/",
  instagram: "https://www.instagram.com/ultramarinosbp/",
  reservation:
    "https://reservours.com/ultramarinosmartinezspanyoldeli/tablereservation?s=instagram",
};

  const Contact = () => {

    const handleClickMap = () => {
      window.location.href = "https://goo.gl/maps/dhNWT2SNQjV4JENh8";
    };


    return (
      <>
        <h1 className={`${style.h1} ${dosis.className}`}>{textContent.h1}</h1>
        <div className={style.container}>
          <div className={style.imageContainer}>
            <Image
              onClick={handleClickMap}
              className={style.imagehover}
              placeholder="blur"
              priority
              alt="Ultramarinos Martínez"
              src={mapPhoto}
            />
          </div>
          <div className={style.itemsContainer}>
            <div className={style.textContainer}>
              <h2 className={dosis.className}>{textContent.h3}</h2>
              <div className={style.addresscontainer}>
                <p className={style.contactText}>
                  1075 Budapest, Kazinczy utca 3b.
                </p>
                <Link href='https://goo.gl/maps/dhNWT2SNQjV4JENh8' ><Image alt='direction' src={Direction} /></Link> 
              </div>
  
              <p className={style.contactText}>+ 36 30 317 69 65</p>
              <p className={style.contactText}>hello@umartinez.hu</p>
            </div>
  
            <div className={style.btnContainer}>
              <div className={style.socialContainerItem}>
                <Image
                  alt="Facebook page of Ultramarinos Martínez restaurant"
                  src={facebook}
                />
                <ButtonGetInTouch url={textContent.facebook} name={"facebook"} />
              </div>
              <div className={style.socialContainerItem}>
                <Image
                  alt="Instagram page of Ultramarinos Martínez restaurant"
                  src={instagram}
                />
                <ButtonGetInTouch
                  url={textContent.instagram}
                  name={"instagram"}
                />
              </div>
              <div className={style.btnContainerItem}>
                <Button
                  btnBlue={true}
                  url={textContent.reservation}
                  name={"book a table now"}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

export default Contact;
