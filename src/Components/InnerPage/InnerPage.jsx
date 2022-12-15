import React from 'react'
import Footer from '../Moleculas/Footer/Footer'
import Header from '../Moleculas/Header/Header'
import './InnerPage.scss'
import InnerPageContent from './InnerPageContent/InnerPageContent'

const InnerPage = () => {
  return (
    <div className='InnerPage'>
        <Header/>
        <InnerPageContent/>
        <Footer style={{position: 'relative' , bottom: 15}}/>
    </div>
  )
}

export default InnerPage