import React from 'react'
import './Registration.scss'
import TitleMegalab from './titleMegalab/TitleMegalab'

const Registration = () => {
  return (
    <div className='Registration'>
      <div className="Registration__content">
        <div className="Registration__row-1">
         <br />
           <TitleMegalab style={{position: 'relative' , bottom: 7}}/>
           <div className="Registration__form">
               <div className="Registration__form-one form-one">
                  <div className="form-one__text">Фамилия</div>
                  <input type="text" className='form-one__input'/>
               </div>
               <div className="Registration__form-one form-one">
                  <div className="form-one__text">Имя</div>
                  <input type="text" className='form-one__input'/>
               </div>
               <div className="Registration__form-one form-one">
                  <div className="form-one__text">Никнейм</div>
                  <input type="text" className='form-one__input'/>
               </div>
               <div className="Registration__form-one form-one">
                  <div className="form-one__text">Пароль</div>
                  <div className="form-one__input-details">
                     <input type="text" className='form-one__input'/>
                     <p>лимит символы</p>
                  </div>
               </div>
               <div className="Registration__form-one form-one">
                  <div className="form-one__text">Подтверждение пароля</div>
                  <input type="text" className='form-one__input'/>
               </div>
           </div> 
        </div>
        <div className="Registration__row-2">
            <div className="Registration__button">
              <span>Регистрация</span>
            </div>
            <div className="Registration__have-acc">
               Уже есть логин? <span>Войти</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Registration