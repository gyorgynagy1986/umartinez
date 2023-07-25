import React from "react";
import style from "./Fotter.module.css";
import Link from "next/link";
import {Bebas_Neue } from 'next/font/google'

const bebas = Bebas_Neue({ subsets: ['latin'], weight: "400" })


const bromoStyle = {
  marginTop: "1px",
  textDecorationLine: "unset",
  color: "#184892",
  fontSize: "12px",
};

const creatorlink = "https://studiobromo.hu/";

const Footer = () => {
  return (
    <footer className={style.container}>
      <div className={style.containerTextleft}>
        <p className={style.containerTextleftCookieMobile}>Cookie policy</p>
       <Link href='/' ><h2 className={`${style.h2} ${bebas.className}`}>GRUPO10</h2></Link> 
        <div className={style.containerTextP}>
          <p className={style.containerTextleftP}></p>
        </div>
        <Link className={style.learnMore} href="https://www.grupo10.hu/">Learn more about Grupo10</Link>
        <div className={style.containerCookie}>
          <div className={style.containerTextleftReserved}>
            {" "}
            <p>
              {" "}
              All rights reserved<span>©</span>
            </p>
            <p>Grupo10.hu</p><p className={style.mobileTurn}>|</p><p>2023</p><p className={style.stdbromo}> <Link href="https://studiobromo.hu/">Designed and developed by Studiobromo</Link></p>
          </div>
          <p className={style.containerTextleftCookie}>Cookie policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
