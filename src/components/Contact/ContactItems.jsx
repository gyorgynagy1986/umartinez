import React from 'react'


const textContent = {
  day: 'Hétfő - Vasárnap',
  time: '12:00 - 23:30'
}

const textContentEn = {
  day: 'Monday - Sunday',
  time: '12:00 - 23:30'
}

const ContactItems = ({lang}) => {

  const textLangLogic = !lang ? textContent.day : textContentEn.day;
  const textLangLogic2 = !lang ? textContent.time : textContentEn.time;


  return (
    <>
        <div>
            <p>{textLangLogic}</p>
            <p>{textLangLogic2}</p>
         </div>
         <div>
            <p>{textLangLogic}</p>
            <p>{textLangLogic2}</p>
         </div>
    </>
  )
}

export default ContactItems