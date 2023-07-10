import React from "react";
import style from "./Contact.module.css";
import { Orelega_One } from "next/font/google";
import Button from "../UI/Buttons/Button";
import ButtonGetInTouch from "../UI/Buttons/ButtonGetInTouch";
import Image from "next/image";
import ContactItems from "./ContactItems";
import mapPhoto from "../../../public/assets/sections/map_contact.png";

const dosis = Orelega_One({ subsets: ["latin"], weight: "400" });

const textContent = {
  h2: "Nyitvatartás",
  btn: "asztalfoglalás",
  btn2: "kapcsolat",
  url: "/kapcsolat",
};

const textContentEn = {
  h2: "Opening Hours",
  btn: "reservation",
  btn2: "Get in Touch",
  url: "/en/contact",
};

const Contact = ({ reservation, lang }) => {
  const h3EngLogic = !lang ? textContent.h2 : textContentEn.h2;
  const btnNameLogic = !lang ? textContent.btn : textContentEn.btn;
  const btnNameLogic2 = !lang ? textContent.btn2 : textContentEn.btn2;

  return (
    <section id="opening" className={style.container}>
      <div className={style.prefixContainer}>
        <div className={style.imageContainer}>
          <Image
            placeholder="blur"
            alt="Ultramarinos Martínez"
            src={mapPhoto}
          />
        </div>
        <div className={style.textContainer}>
          <h2 className={dosis.className}>{h3EngLogic}</h2>
          <div className={style.textBoxContainer}>
            <ContactItems lang={lang} />
          </div>
          <div className={style.btnContainer}>
            <Button
              btnBlue={true}
              engColorPreReserv={lang ? true : false}
              url={reservation}
              name={btnNameLogic}
            />
            <ButtonGetInTouch
              url={!lang ? textContent.url : textContentEn.url}
              name={btnNameLogic2}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
