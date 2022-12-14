import React from 'react'
import './TitleMegalab.scss'

const TitleMegalab = ({...props}) => {
  return (
    <div className='TitleMegalab' {...props}>
         <div className="Registration__title title">
              <img src="Images/Vector.png" alt="" className='title__first-letter'/>
              <div className="title__second-letters">
                 <img src="Images/Vector (1).png" alt="" className='title__second-letter'/>
                 <img src="Images/Vector (2).png" alt="" className='title__second-letter-two'/>
              </div>
              <img src="Images/Vector (3).png" alt="" className='title__third-letter'/>
              <img src="Images/Vector (4).png" alt="" className='title__4th-letter'/>
              <img src="Images/Vector (5).png" alt="" className='title__5th-letter'/>
              <div className="title__6th-letters">
                 <img src="Images/Vector (6).png" alt="" className='title__6th-letter'/>
                 <img src="Images/Vector (7).png" alt="" className='title__6th-letter-two'/>
              </div>
              <img src="Images/Vector (8).png" alt="" className='title__7th-letter'/>
           </div>
    </div>
  )
}

export default TitleMegalab