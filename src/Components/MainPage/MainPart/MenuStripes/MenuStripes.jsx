import React from 'react'
import { useNavigate } from 'react-router-dom'
import './MenuStripes.scss'

const MenuStripes = () => {

  const navigate = useNavigate()

  return (
    <div className='MenuStripes'>
        <div className="MenuStripes__content">
            <div className="MenuStripes__profile-link" onClick={() => navigate(`/MainPage`)}>
               Главная
            </div>
            <div className="MenuStripes__line"></div>
            <div className="MenuStripes__exit-link" onClick={() => navigate(`/LikePage`)}>Избранные новости</div>
            <div className="MenuStripes__line"></div>
            <div className="MenuStripes__exit-link" onClick={() => navigate(`/Profile`)}>Мой профиль</div>
        </div>

        <div className="MenuStripes__like-content">
            <div className="MenuStripes__like-title" >
               Выйти
            </div>
        </div>
    </div>
  )
}

export default MenuStripes