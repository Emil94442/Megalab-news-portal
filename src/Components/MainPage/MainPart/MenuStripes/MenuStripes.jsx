import React from 'react'
import './MenuStripes.scss'

const MenuStripes = () => {
  return (
    <div className='MenuStripes'>
        <div className="MenuStripes__content">
            <div className="MenuStripes__profile-link">
               Мой профиль
            </div>
            <div className="MenuStripes__line"></div>
            <div className="MenuStripes__exit-link">Выйти</div>
        </div>

        <div className="MenuStripes__like-content">
            <div className="MenuStripes__like-title">
               Избранные новости
            </div>
        </div>
    </div>
  )
}

export default MenuStripes