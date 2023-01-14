import React from 'react'
import { useNavigate } from 'react-router-dom'
import MegalabTitle from '../Header/MegalabTitle/MegalabTitle'
import './Footer.scss'

const Footer = ({...props}) => {

  const navigate = useNavigate()

  return (
    <footer className='footer' {...props}>
        <div className="footer__content">
            <div className="footer__title">
                <MegalabTitle style={{marginTop: '37px'}}/>
            </div>
            <div className="footer__links">
                <div className="footer__link-profile" onClick={() => navigate('/Profile')}>
                   Мой профиль
                </div>
                <div className="footer__likes-news" onClick={() => navigate('/LikePage')}>
                   Избранные новости
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer