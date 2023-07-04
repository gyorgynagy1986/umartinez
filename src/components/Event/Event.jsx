import React from "react";
import style from "./Event.module.css";
import Button from "../UI/Buttons/Button";
import { Orelega_One } from "next/font/google";

const font = Orelega_One({ subsets: ["latin"], weight: '400' });

const textContent = {
  h2: "Want to have an event at Ultramarinos Martínez?",
  p: "Hívj minket vagy írj nekünk, ha rendezvényt tartanál nálunk!",
  btn: "kapcsolat",
  url: "/kapcsolat",
};

const textContentEn = {
  h2: "Want to have an event at Fuego?",
  p: "Call or drop us a message if you would like to host an event!",
  btn: "Get in touch",
  url: "/en/contact",
};

const Event = ({ lang }) => {
  const h2Logic = !lang ? textContent.h2 : textContentEn.h2;
  const pLogic = !lang ? textContent.p : textContentEn.p;
  const buttonNameLogic = !lang ? textContent.btn : textContentEn.btn;
  const urlLogic = !lang ? textContent.url : textContentEn.url;

  return (
    <section className={style.container}>
      <div className={style.containerText}>
        <h2 className={font.className}>{h2Logic}</h2>
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
