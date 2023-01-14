import React from 'react'
import { useState } from 'react'
import ModalMenu from '../../../Moleculas/Header/ModalMenu/ModalMenu'
import './Menu.scss'

const Menu = () => {

  const [modalMenu , setModalMenu] = useState(false)

  return (
    <div className='Menu'>
        <ModalMenu modalMenu={modalMenu} setModalMenu={setModalMenu}/>
        <div className="lpc__block-menu">
            <div className="lpc__logo">
                <img src="Images/LikePage/title.svg" alt=""/>
            </div>
            <div className="lpc__nav-menu">
                <img src="Images/LikePage/search.svg" alt=""/>
                <img src="Images/LikePage/profile.svg" alt=""/>
                <img src="Images/LikePage/menu.svg" alt="" onClick={() => setModalMenu(true)}/>
            </div>
        </div>
    </div>
  )
}

export default Menu