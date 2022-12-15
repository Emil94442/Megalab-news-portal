import React from 'react'
import './Menu.scss'

const Menu = () => {
  return (
    <div className='Menu'>
        <div className="lpc__block-menu">
            <div className="lpc__logo">
                <img src="Images/LikePage/title.svg" alt=""/>
            </div>
            <div className="lpc__nav-menu">
                <img src="Images/LikePage/search.svg" alt=""/>
                <img src="Images/LikePage/profile.svg" alt=""/>
                <img src="Images/LikePage/menu.svg" alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Menu