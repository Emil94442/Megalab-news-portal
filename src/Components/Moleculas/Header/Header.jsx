import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.scss'
import ModalMenu from '../Header/ModalMenu/ModalMenu'
import { useState } from 'react'

const Header = () => {

  const navigate = useNavigate()

  const [modalMenu , setModalMenu] = useState(false)

  return (
    <header className="header">
        <ModalMenu modalMenu={modalMenu} setModalMenu={setModalMenu}/>
        <div className="header__content">

            <div className="header__block">
                <div className="header__logo logo">
                    <img src="/Images/Header/Vector.png" alt="m" className='logo__first-letter'/>
                    <img src="/Images/Header/Vector (1).png" alt="e" className='logo__second-letter'/>
                    <img src="/Images/Header/Vector (2).png" alt="e" className='logo__second-letter-two'/>
                    <img src="/Images/Header/Vector (3).png" alt="g" className='logo__3th-letter'/>
                    <img src="/Images/Header/Vector (4).png" alt="a" className='logo__4th-letter'/>
                    <img src="/Images/Header/Vector (5).png" alt="l" className='logo__5th-letter'/>
                    <img src="/Images/Header/Vector (6).png" alt="a" className='logo__6th-letter'/>
                    <img src="/Images/Header/Vector (7).png" alt="a" className='logo__6th-letter-two'/>
                    <img src="/Images/Header/Vector (8).png" alt="b" className='logo__7th-letter'/>
                </div>
            </div>

            <div className="header__block">
                <div className="header__title">
                    Новости
                </div>
            </div>

            <div className="header__block">
                <div className="header__menu">
                    <img src="/Images/Header/My-search.svg" alt="search" style={{cursor: 'pointer'}}/>
                    <img src="/Images/Header/My-user.svg" alt="user" style={{cursor: 'pointer'}} className='header__user-img' onClick={() => navigate(`/Profile`)}/>
                    <img src="/Images/Header/My-burger-menu.svg" alt="burger-menu" style={{cursor: 'pointer'}} onClick={() => setModalMenu(true)}/>
                </div>
            </div>

        </div>
    </header>
  )
}

export default Header