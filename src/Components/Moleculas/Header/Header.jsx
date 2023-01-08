import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.scss'

const Header = () => {

  const navigate = useNavigate()

  return (
    <header className="header">
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
                    <img src="/Images/Header/My-search.svg" alt="search" />
                    <img src="/Images/Header/My-user.svg" alt="user" className='header__user-img' onClick={() => navigate(`/Profile`)}/>
                    <img src="/Images/Header/My-burger-menu.svg" alt="burger-menu" />
                </div>
            </div>

        </div>
    </header>
  )
}

export default Header