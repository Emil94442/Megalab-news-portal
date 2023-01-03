import React from 'react'
import Footer from '../Moleculas/Footer/Footer'
import Header from '../Moleculas/Header/Header'
import InnerPageContent from './InnerPageContent/InnerPageContent'

const InnerPageThis = ({post , params}) => {
    
  return (
    <div className='InnerPageThis'>
        <Header/>
        <h1>{params}</h1> 
        <InnerPageContent post={post}/>
        <Footer style={{position: 'relative', bottom: 100}}/>
    </div>
  )
}

export default InnerPageThis