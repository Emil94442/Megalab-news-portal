import React from 'react'
import FormInput from '../Registration/FormInput/FormInput'
import TitleMegalab from '../Registration/titleMegalab/TitleMegalab'
import './Autorization.scss'

const Autorization = () => {
  return (
    <div className='Autorization'>
        <div className="Autorization__content">
            <TitleMegalab style={{position: 'relative' , top: '15px'}}/>
            <div className="Autorization__form">
                <FormInput>Никнейм</FormInput>
                <FormInput>Пароль</FormInput>
            </div>
            <div className="Autorization__button">
                Войти
            </div>
        </div>
    </div>
  )
}

export default Autorization