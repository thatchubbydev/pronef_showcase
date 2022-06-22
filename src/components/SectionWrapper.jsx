import React from 'react'
import styles from '../styles/Global'
import assets from '../assets'
import Button from '../components/Button'


export const SectionWrapper = ({title,description,imgPhone,banner,showBtn, reverse}) => {
  return (
    // parent body 
    <div className={`min-h-screen ${styles.section} ${reverse ? styles.bgWhite: styles.bgPrimary} ${banner}`}>
        {/* container body  */}
        <div className={`flex items-center ${reverse ? styles.boxReverseClass:styles.boxClass} w-11/12 sm:w-full minmd:w-3/4`}>
            {/* text and button */}
            <div className={`${styles.descDiv} ${reverse ? 'fadeRightMini':'fadeLeftMini'} ${reverse? styles.textRight : styles.textLeft} `}>
                <h1 className={`${styles.h1Text} ${reverse? styles.blackText : styles.whiteText}`}>{title}</h1>
                <h1 className={`${styles.descriptionText}  ${reverse? styles.blackText : styles.whiteText}`}>{description}</h1>
                {showBtn && (<Button link='https://expo.dev/@thatchubbydev/react_native1_1?serviceType=classic&distr' imgUrl={assets.expo}/>)}
            </div>

            {/* mockup container  */}
            <div className={`flex-1 ${styles.flexCenter} ${reverse ? 'fadeLeftMini':'fadeRightMini'} p-8 sm:px-0`}>
                <img className={`${styles.sectionImg} max-w-1/2 `} src={imgPhone} alt='mockup'/>
            </div>
        </div>      
    </div>
   
  )
}

