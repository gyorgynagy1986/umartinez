import style from "./page.module.css";
import Image from "next/image";
import Button from "@/components/UI/Buttons/Button";
import ButtonGetInTouch from "@/components/UI/Buttons/ButtonGetInTouch";
import mapPhoto from "../../../../public/assets/sections/map_contact.png";
import facebook from "../../../../public/assets/social/facebook.svg";
import instagram from "../../../../public/assets/social/instagram.svg";
import { Orelega_One } from "next/font/google";

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
    "https://www.facebook.com/Ultramarinos Martínezchicken/?locale=hu_HU",
  instagram: "https://www.instagram.com/Ultramarinos Martínezbp/?hl=hu",
  reservation:
    "https://reservours.com/Ultramarinos Martínez/tablereservation?s=website",
};

const Contact = () => {
  return (
    <>
      <h1 className={`${style.h1} ${dosis.className}`}>{textContent.h1}</h1>
      <section className={style.container}>
        <div className={style.imageContainer}>
          <div className={style.layer}></div>
          <Image
            placeholder="blur"
            priority
            alt="Ultramarinos Martínez"
            src={mapPhoto}
          />
        </div>
        <div className={style.itemsContainer}>
          <div className={style.textContainer}>
            <h2 className={dosis.className}>{textContent.h3}</h2>
            <p className={style.contactText}>
              1075 Budapest, Kazinczy utca 3b.
            </p>
            <p className={style.contactText}>+ 36 30 317 69 65</p>
            <p className={style.contactText}>hola@Ultramarinos Martínezbp.hu</p>
          </div>

          <div className={style.btnContainer}>
            <div className={style.socialContainerItem}>
              <Image
                alt="Ultramarinos Martínez étterem facebbok oldala"
                src={facebook}
              />
              <ButtonGetInTouch url={textContent.facebook} name={"facebook"} />
            </div>
            <div className={style.socialContainerItem}>
              <Image
                alt="Ultramarinos Martínez étterem isntagram oldala"
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
                name={textContent.btn}
              />{" "}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
