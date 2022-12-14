import React from 'react'
import Footer from '../Moleculas/Footer/Footer'
import Header from '../Moleculas/Header/Header'
import MainPart from './MainPart/MainPart'

const MainPage = () => {
  return (
    <div className='MainPage'>
        <Header/>
        <MainPart/>
        <Footer/>
    </div>
  )
}

export default MainPage