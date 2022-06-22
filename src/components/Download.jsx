import React from 'react'
import styles from '../styles/Global'
import assets from '../assets'

export const Download = () => {
  return (
    // parent container 
    <div className={`${styles.section} ${styles.bgWhite}`}>
      {/* text button and image container  */}
      <div className={`${styles.subSection} flex-col items-center justify-center text-center` }>
        <div>
          {/* text and button container  */}
          <h1 className={`${styles.h1Text}`}>Download the Source Code</h1>
          <p className={`${styles.pText}`}>Get the full source code on GitHub</p>
          {/* button container  */}
          <div className=''>
            <a href="https://github.com/thatchubbydev/react_native" target="_blank"><button className={`${styles.btnPrimary} mr-8`}>Expo app</button></a>
            <a href="" target="_blank"><button className={`${styles.btnPrimary}`}>website</button></a>
          </div>
          
        </div>
        {/* image container  */}
        <div className={`${styles.fullImg}`}><img src={assets.scene}/></div>
      </div>

    </div>
  )
}

