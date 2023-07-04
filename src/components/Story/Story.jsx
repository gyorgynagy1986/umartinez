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
  p: "2023. januárban nyitottuk meg „Spanyolország határait” a Bartók Béla úton, a Szent Gellért tér közvetlen közelében, és azóta rendületlenül igyekszünk megnyerni minden hozzánk betérő vendég szívét. Bárunkban érlelt sonkák, ínycsiklanydozó sajtok, olívabogyók, falatkák, vermutok és más finomságok várnak.",
  p1: "Boltunk folyamatosan bővülő polcain pedig többek között izgalmas krémek, szószok, kiváló minőségű halkonzervek, borok, cavak és sörök sorakoznak, amelyek közvetlenül Spanyolországból érkeznek.",
  p2: "Ráadásul mindent, ami a boltban megtalálható, helyben elfogyaszthatod, de akár haza is viheted!",
  btn: "Étlap",
  url: "/etlap",
};

const textContentEn = {
  h4: "About us",
  p: "We opened the \"borders of Spain\" on Bartók Béla Street, in the immediate vicinity of St. Gellért Square in January 2023 and since then, we have been tirelessly striving to win the hearts of every guest who enters our doors.",
  p1: "Our bar offers cured hams, mouth-watering cheeses, olives, pinchos, vermouths and other delicacies, and on the constantly expanding shelves of our store you will find exciting creams, sauces, excellent quality canned fish, wines, cavas and beers, all coming directly from Spain.",
  p2: "And what is the best part? Everything you find in the store can be enjoyed on site, or even taken home with you!",
  btn: "Menu",
  url: "/en/menu",
};

const Story = ({ lang }) => {
  const pText = `${!lang ? textContent.p : textContentEn.p}`;
  const pText2 = `${!lang ? textContent.p1 : textContentEn.p1}`;
  const pText3 = `${!lang ? textContent.p2 : textContentEn.p2}`;
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
            <br /> <br />
            {pText3}
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
