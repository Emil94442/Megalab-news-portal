import React from 'react'
import Footer from '../Moleculas/Footer/Footer'
import Header from '../Moleculas/Header/Header'
import InnerPageContent from './InnerPageContent/InnerPageContent'

const InnerPageThis = ({post , setPost , params}) => {
    
  return (
    <div className='InnerPageThis'>
        <Header/>
        <h1>{params}</h1> 
        <InnerPageContent post={post} setPost={setPost}/>
        <Footer/>
    </div>
  )
}

export default InnerPageThis