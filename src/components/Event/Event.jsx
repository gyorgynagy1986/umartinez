import React from "react";
import style from "./Event.module.css";
import Button from "../UI/Buttons/Button";
import { Orelega_One } from "next/font/google";

const font = Orelega_One({ subsets: ["latin"], weight: '400' });

const textContent = {
  h2: "Szeretnél egy rendezvényt az",
  h2n: "Ultramarinos Martínezben?",

  p: "Bátran keress minket telefonon, vagy írj nekünk, ha rendezvényt szeretnél nálunk tartani!",
  btn: "kapcsolat",
  url: "/kapcsolat",
};

const textContentEn = {
  h2: "Interested in hosting an event at",
  h2n: "Ultramarinos Martínez?",
  p: "Give us a call or drop a message, and we’ll coordinate the details!",
  btn: "Get in touch",
  url: "/en/contact",
};

const Event = ({ lang }) => {
  const h2Logic = !lang ? textContent.h2 : textContentEn.h2;
  const h2LogicN = !lang ? textContent.h2n : textContentEn.h2n;

  const pLogic = !lang ? textContent.p : textContentEn.p;
  const buttonNameLogic = !lang ? textContent.btn : textContentEn.btn;
  const urlLogic = !lang ? textContent.url : textContentEn.url;

  return (
    <section className={style.container}>
      <div className={style.containerText}>
        <h2 className={font.className}>{h2Logic}</h2>
        <h2 className={`${font.className} ${style.upper}`}>{h2LogicN}</h2>
        <p className={style.h2}>{pLogic}</p>
        <Button
          btnBlue={true}
          engColorPrefixBlueContact={lang ? true : false}
          buttonContact={true}
          name={buttonNameLogic}
          url={urlLogic}
        />
      </div>
    </section>
  );
};

export default Event;
