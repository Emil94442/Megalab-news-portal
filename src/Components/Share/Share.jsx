import React from 'react'
import './Share.scss'
import {
   TelegramShareButton,
   TwitterShareButton,
   FacebookShareButton,
   WhatsappShareButton
 } from "react-share";

const Share = () => {

   const shareUrl = 'http://localhost:3000/MainPage'

  return (
    <div className='share'>
        <div className="share__content">
           <div className="share__block-one">
              <div className="share__title">Поделиться</div>
              <img src="Images/Share/exit.svg" alt="" style={{position: 'relative' , bottom: 6 ,cursor: 'pointer'}}/>
           </div>
           <div className="share__block-two">
              {/*<img src="Images/Share/telegram.svg" alt="" style={{cursor: 'pointer'}}/>*/}
              <TelegramShareButton url={shareUrl}>
                 <img src="Images/Share/telegram.svg" alt="" style={{cursor: 'pointer'}}/>
              </TelegramShareButton>
              <TwitterShareButton url={shareUrl}>
                 <img src="Images/Share/twitter.svg" alt="" style={{cursor: 'pointer'}}/>
              </TwitterShareButton>
              <FacebookShareButton url={shareUrl}>
                 <img src="Images/Share/facebook.svg" alt="" style={{cursor: 'pointer'}}/>
              </FacebookShareButton>
              <WhatsappShareButton url={shareUrl}>
                 <img src="Images/Share/whatsapp.svg" alt="" style={{cursor: 'pointer'}}/>
              </WhatsappShareButton>
           </div>
           <div className="share__block-three">
               <div className="share__text-content">
                    <div className="share__title-text">Короткая ссылка</div>
                    <div className="share__text">
                        Какой-то текст ссылки
                    </div>
               </div>
               <div className="share__copy-img">
                  <img src="Images/Share/copy.svg" alt="" />
               </div>
           </div>
        </div>
    </div>
  )
}

export default Share