import React from 'react'
import './MegalabTitle.scss'

const MegalabTitle = ({...props}) => {
  return (
    <div className='MegalabTitle' {...props}>
        <div className="header__logo logo">
            <img src="Images/Header/Vector.png" alt="" className='logo__first-letter'/>
            <img src="Images/Header/Vector (1).png" alt="" className='logo__second-letter'/>
            <img src="Images/Header/Vector (2).png" alt="" className='logo__second-letter-two'/>
            <img src="Images/Header/Vector (3).png" alt="" className='logo__3th-letter'/>
            <img src="Images/Header/Vector (4).png" alt="" className='logo__4th-letter'/>
            <img src="Images/Header/Vector (5).png" alt="" className='logo__5th-letter'/>
            <img src="Images/Header/Vector (6).png" alt="" className='logo__6th-letter'/>
            <img src="Images/Header/Vector (7).png" alt="" className='logo__6th-letter-two'/>
            <img src="Images/Header/Vector (8).png" alt="" className='logo__7th-letter'/>
        </div>
    </div>
  )
}

export default MegalabTitle