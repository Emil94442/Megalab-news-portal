import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormInput from '../Registration/FormInput/FormInput'
import TitleMegalab from '../Registration/titleMegalab/TitleMegalab'
import './Autorization.scss'

const Autorization = () => {

  const [nickname , setNickname] = useState('')
  const [password , setPassword] = useState('')

  const [errorLogin , setErrorLogin] = useState(false)

  const verifingAutorization = async () => {

      const body = {
        'nickname': nickname,
        'password': password
      }

      const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }



      const fetchData = await fetch('https://megalab.pythonanywhere.com/login/' , {
        method: 'POST',
        body: JSON.stringify(body),
        headers: headers
      })

      const jsonData = await fetchData.json()

      if (typeof jsonData.non_field_errors === 'object') {
        console.log('Неправильно отработало')
        setErrorLogin(true)
      }

      if (typeof jsonData.token === 'string') {
        navigate('/MainPage')
      }
      console.log(jsonData)
  }

  const navigate = useNavigate()

  console.log('nickname:' , nickname , ' password: ' , password)

  const heightAutContent = (elem) => {
    if (errorLogin && elem === 'content') {
      return {
        minHeight: 305
      }
    }
  }

  const buttonStyle = (elem) => {
      if (errorLogin && elem === 'button') {
        return {
          position: 'relative',
          top: 55
        }
    }
  }

  return (
    <div className='Autorization'>
        <div className="Autorization__content" style={heightAutContent('content')}>
            <TitleMegalab style={{position: 'relative' , top: '15px'}}/>
            <div className="Autorization__form">
                <FormInput valueInp={nickname} changeInpValue={e => setNickname(e.target.value)}>Никнейм</FormInput>
                <FormInput valueInp={password} changeInpValue={e => setPassword(e.target.value)}>Пароль</FormInput>
                {errorLogin && (
                  <p style={{color: 'red', margin: '10px 0 0 0'}}>Ошибка авторизации, пожалуйста введите данные корректно (никнейм, пароль)</p>
                )}
            </div>
            <div className="Autorization__button" onClick={verifingAutorization} style={buttonStyle('button')}>
                Войти
            </div>
        </div>
    </div>
  )
}

export default Autorization