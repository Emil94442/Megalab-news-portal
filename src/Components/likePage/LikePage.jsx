import React from 'react'
import Footer from '../Moleculas/Footer/Footer'
import './LikePage.scss'
import LikePageContent from './LikePageContent/LikePageContent'

const LikePage = () => {
  return (
    <div className='LikePage'>
        <LikePageContent/>
        <Footer/>
    </div>
  )
}

export default LikePage