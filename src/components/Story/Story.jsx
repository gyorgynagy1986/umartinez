"use client";

import style from "./Story.module.css";
import { Orelega_One } from "next/font/google";
import Button from "../UI/Buttons/Button";
import Image from "next/image";

import ourStoryCoverPhoto from "../../../public/assets/sections/our_story.webp";

const dosis = Orelega_One({ subsets: ["latin"], weight: "400" });

const textContent = {
  h4: "Rólunk",
  p: "Mióta megnyitottuk Budapest első igazi spanyol colmadóját a Bartókon, a Szent Gellért tér közvetlen közelében, igyekszünk megnyerni minden hozzánk betérő vendég szívét.",
  p1: "Bárunkban érlelt sonkák, ínycsiklandozó sajtok, olívabogyók és más kulináris finomságok várnak. Boltunk polcain pedig többek között különleges krémek és szószok, kiváló minőségű halkonzervek, borok, sörök és cavák sorakoznak, melyek mind Spanyolországból érkeznek.",
  p2: "Ráadásul mindent, amit a boltban találsz, helyben is elfogyaszthatod, vagy akár haza is viheted!",
  btn: "Étlapunk",
  url: "/etlap",
};

const textContentEn = {
  h4: "About us",
  p: 'Since we opened the first authentic Spanish colmado in Budapest, next to Bartók Béla Street, next to St. Gellért Square, our mission has been to win the hearts of every guest who walks through our doors. ',
  p1: "Within our bar, you’ll find cured hams, delectable cheeses, olives, and a variety of culinary delights. On the shelves of our store, you'll discover special creams and sauces, high-quality canned fish, wines, beers, cavas, and many more, all sourced directly from Spain.",
  p2: "And the best part is that everything you find in the store can be enjoyed on-site or even taken home with you!",
  btn: "See the Menu",
  url: "/en/menu",
};

const Story = ({ lang }) => {
  const pText = `${!lang ? textContent.p : textContentEn.p}`;
  const pText2 = `${!lang ? textContent.p1 : textContentEn.p1}`;
  const pText3 = `${!lang ? textContent.p2 : textContentEn.p2}`;
  const h2Text = `${!lang ? textContent.h4 : textContentEn.h4}`;
  const btnUrl = `${!lang ? textContent.url : textContentEn.url}`;
  const btnName = `${!lang ? textContent.btn : textContentEn.btn}`;

  return (
    <section className={style.container}>
      <div className={style.prefixContainer}>
        <div className={style.imageContainer}>
          <Image
            placeholder="blur"
            priority
            alt="Ultramarinos Martínez"
            src={ourStoryCoverPhoto}
          />
        </div>

        <div className={style.textContainer}>
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
