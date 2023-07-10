import React from 'react'


const textContent = {
  day: 'Hétfő - Csütörtök',
  time: '17:00 - 23:00',
  day2: 'Péntek - Vasárnap',
  time2: '12:00 - 23:00'
}

const textContentEn = {
  day: 'Monday - Thursday',
  time: '17:00 - 23:00',
  day2: 'Friday - Sunday',
  time2: '12:00 - 23:00'
}

const ContactItems = ({lang}) => {

  const textLangLogic1 = !lang ? textContent.day : textContentEn.day;
  const textLangLogic2 = !lang ? textContent.time : textContentEn.time;
  const textLangLogic3 = !lang ? textContent.day2 : textContentEn.day2;
  const textLangLogic4 = !lang ? textContent.time2 : textContentEn.time2;


  return (
    <>
        <div>
            <p>{textLangLogic1}</p>
            <p>{textLangLogic2}</p>
         </div>
         <div>
            <p>{textLangLogic3}</p>
            <p>{textLangLogic4}</p>
         </div>
    </>
  )
}

export default ContactItems