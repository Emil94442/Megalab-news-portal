import React from 'react'
import MegalabTitle from '../Header/MegalabTitle/MegalabTitle'
import './Footer.scss'

const Footer = ({...props}) => {
  return (
    <footer className='footer' {...props}>
        <div className="footer__content">
            <div className="footer__title">
                <MegalabTitle style={{marginTop: '37px'}}/>
            </div>
            <div className="footer__links">
                <div className="footer__link-profile">
                   Мой профиль
                </div>
                <div className="footer__likes-news">
                   Избранные новости
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer