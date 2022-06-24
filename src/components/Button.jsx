import React from 'react'
import styles from '../styles/Global'

const Button = ({imgUrl,link}) => {
  return (
    <div className={`${styles.btnBlack}`}
    onClick={()=> window.open(link,'_blank')}>
      <img className={`${styles.btnIcon}`} src={imgUrl} />
      <div className={`flex flex-col pl-4`}>
        <p className={`text-white text-xs font-normal`}>Click to view the app</p>
        <h1 className={`${styles.btnText} font-bold `}>On Expo Store</h1>
      </div>

    </div>
  )
}

export default Button