import React from 'react'
import styles from '../styles/Global' 
import assets from '../assets'

export const FeatureCard = ({imgUrl,text}) =>(
  <div className={`${styles.featureCard}`}>
    <img src={imgUrl} alt='feature'/>
    <p className={`${styles.featureText}`}>{text}</p>
  </div>
)
export const Features = () => {
  
  return (
    // parent container 
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      {/* text and feature_card container  */}
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} text-white`}>Technologies</h1>
          <p className={`${styles.pText} text-white`}>ProNef has been developed using a cross-platform technology, React Native.</p>
        </div>
        {/* feature_card container  */}
        <div className={`${styles.flexWrap}`}>
          <FeatureCard text={'React Native'} imgUrl={assets.react}/>
          <FeatureCard text={'Javascript'} imgUrl={assets.javascript}/>
        </div>
        
      </div>
    </div>
  )
}
