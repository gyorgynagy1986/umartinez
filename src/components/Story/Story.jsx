"use client";

import style from "./Story.module.css";
import { Orelega_One } from "next/font/google";
import Button from "../UI/Buttons/Button";
import Image from "next/image";
import { useParallax } from "react-scroll-parallax";

import ourStoryCoverPhoto from "../../../public/assets/sections/Our_story.png";

const dosis = Orelega_One({ subsets: ["latin"], weight: "400" });

const textContent = {
  h4: "Rólunk",
  p: "Ha egy ínycsiklandó sült csirkére vagy sült kacsára vágysz, akkor megtaláltad az ideális helyet Kazinczy utcai éttermünkben. A Fuegoban a csirkét és a kacsát titkos recept alapján fűszerezzük, tetejükön ropogós és aranyszínű a bőr, ami szaftos és omlós hússal párosul.",
  p1: "Fűszeres burgonyánk tökéletes kísérőül szolgál, íze és állaga harmonizál a sült hússal. Ne hagyd ki különleges, házi készítésű szószainkat sem! A hét minden napján a legjobb minőséggel és ízekkel várunk!",
  btn: "Rólunk",
  url: "/etlap",
};

const textContentEn = {
  h4: "About us",
  p: "If you would try a mouth-watering grilled chicken or grilled duck, you have found the ideal place in our Kazinczy Street restaurant in the 7th district of Budapest. At Fuego, both the chicken and the duck are marinated according to a secret recipe, with crispy and golden skin on top, which is combined with tasty and crumbly meat.",
  p1: "Our spicy potatoes serve as a perfect accompaniment, their taste and texture harmonize with the roast meat. Don't miss out our special homemade sauces either! We are waiting for you with the best quality and flavors every day of the week!",
  btn: "About us",
  url: "/en/menu",
};

const Story = ({ lang }) => {
  const pText = `${!lang ? textContent.p : textContentEn.p}`;
  const pText2 = `${!lang ? textContent.p1 : textContentEn.p1}`;
  const h2Text = `${!lang ? textContent.h4 : textContentEn.h4}`;
  const btnUrl = `${!lang ? textContent.url : textContentEn.url}`;
  const btnName = `${!lang ? textContent.btn : textContentEn.btn}`;

  const parallax = useParallax({
    opacity: [-1, 5],
    speed: 1,
  });

  return (
    <section className={style.container}>
      <div className={style.prefixContainer}>
        <div className={style.imageContainer}>
          <Image
            placeholder="blur"
            priority
            alt="Fuego"
            src={ourStoryCoverPhoto}
          />
        </div>

        <div ref={parallax.ref} className={style.textContainer}>
          <h2 className={dosis.className}>{h2Text}</h2>
          <p>
            {pText} <br />
            <br />
            {pText2}
          </p>
          <Button
            engColorPrefixBlue={lang ? true : false}
            btnBlue={true}
            url={btnUrl}
            name={btnName}
          />
        </div>
      </div>
    </section>
  );
};

export default Story;
