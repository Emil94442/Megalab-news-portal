import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changeInputRegLastName, changeInputRegName, changeInputRegNickName, changeInputRegPassword, changeInputRegPassword2, ErrorLastName, ErrorLastNameOff, ErrorName, ErrorNameOff, ErrorNickname, ErrorNicknameOff, ErrorNicknameText, LessThan8, nicknameAction, nicknameRegistrated, PasswordErrOf, similarPassword, verifiedReg } from '../../redux/action'
import './Registration.scss'
import TitleMegalab from './titleMegalab/TitleMegalab'

const Registration = () => {

  //const nickname = useSelector(state => state.registrationReducer.nickname)
  //const name = useSelector(state => state.registrationReducer.name)
  //const last_name = useSelector(state => state.registrationReducer.last_name)
  //const password = useSelector(state => state.registrationReducer.password)
  //const password2 = useSelector(state => state.registrationReducer.password2)

  const [nickname , setNickname] = useState('')
  const [name , setName] = useState('')
  const [last_name , setLast_name] = useState('')
  const [password , setPassword] = useState('')
  const [password2 , setPassword2] = useState('')

  const [passRegistrated , setPassRegistrated] = useState(false)

  const errorLastName = useSelector(state => state.verifReducer.errorLastNameOfReg)
  const errorNameOfReg = useSelector(state => state.verifReducer.errorNameOfReg)
  const errorNicknameOfReg = useSelector(state => state.verifReducer.errorNicknameOfReg)
  const errorNicknameTextOfReg = useSelector(state => state.verifReducer.errorNicknameTextOfReg)
  const similarPasswordErr = useSelector(state => state.verifReducer.similarPasswordErr)
  const errorPasswordOfReg = useSelector(state => state.verifReducer.errorPasswordOfReg)
  const NicknameRegistrated = useSelector(state => state.verifReducer.NicknameRegistrated)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  localStorage.removeItem('token')

  const loadDate = async () => {
   const body = {
     'nickname': nickname,
     'last_name': last_name,
     'name': name,
     'password': password,
     'password2': password2
   }

   const headers = {
     'Content-Type': 'application/json',
     'Accept': 'application/json'
   }
   
   const data = await fetch('https://megalab.pythonanywhere.com/registration/', {
     method: 'POST',
     body: JSON.stringify(body),
     headers: headers
   })
   const response = await data.json()
     

   /*.then(response => response.json())
   .then(json => setPosts(json))*/
   console.log(response)
   
   

   if (!last_name) {
      dispatch(ErrorLastName())
   } else {
      dispatch(ErrorLastNameOff())
   }

   if (!name) {
      dispatch(ErrorName())
   } else {
      dispatch(ErrorNameOff())
   }

   if (!nickname) {
      dispatch(ErrorNickname())
   } else {
      dispatch(ErrorNicknameOff())
   }

   if (password !== password2 && password.length < 8) {
      dispatch(similarPassword())
   } else {
      dispatch(PasswordErrOf())
   }

   if (password !== password2) {
      dispatch(similarPassword())
   }
   
   if (password.length < 8) {
      dispatch(similarPassword())
   }


   if (name && last_name && nickname && password === password2 && password2.length >= 8 && !passRegistrated) {
      navigate('/Autorization')
      localStorage.setItem('last_name' , last_name)
      localStorage.setItem('name' , name)
      localStorage.setItem('nickname' , nickname)
      localStorage.setItem('password' , password)
      dispatch(nicknameAction(nickname))
   }

   if (response.nickname.includes('user with this nickname already exists.')) {
      dispatch(ErrorNicknameText())
      // dispatch(nicknameRegistrated())
      setPassRegistrated(true)
      console.log('Сработало пролверкаsqsq')
   }
   
}
  
 
  useEffect(() => {
     if (localStorage.getItem('Registrated')) {
      // dispatch(verifiedReg())
     }
  }, [])

  const marginTop = (row) => {
   if (errorLastName && row === 'row-1') {
      return {
        marginTop: 30
      }
    }

   if (errorNameOfReg && row === 'row-2') {
      return {
        marginTop: 30
      }
    }

   if (similarPasswordErr && row === 'button') {
      return {
        marginTop: 30
      }
    }
  }

  

  const heightContent = () => {
   

   if (similarPasswordErr) {
      return {
        minHeight: 550
      }
    }

   if (errorNameOfReg && errorLastName) {
      return {
        minHeight: 523
      }
    }
  }

  const passErrFunc = () => {
    if (similarPasswordErr) {
       
    }
  }

  return (
    <div className='Registration'>
      <div className="Registration__content" style={heightContent()}>
        <div className="Registration__row-1">
         <br />
           <TitleMegalab style={{position: 'relative' , bottom: 7}}/>
           <div className="Registration__form">
               <div className="Registration__form-one form-one">
                  <div className="form-one__text">Фамилия</div>
                  <div className="form-one__input-details">
                     <input 
                        type="text" 
                        className='form-one__input' 
                        value={last_name} 
                        onChange={e => setLast_name(e.target.value)}
                     />
                     {errorLastName && (
                        <p style={{color: 'red', marginBottom: -20}}>введите фамилию пожалуйста</p>
                     )}
                  </div>
                  
               </div>
               <div className="Registration__form-one form-one" style={marginTop('row-1')}>
                  <div className="form-one__text">Имя</div>
                  <div className="form-one__input-details">
                     <input 
                        type="text" 
                        className='form-one__input' 
                        value={name} 
                        onChange={e => setName(e.target.value)}
                     />
                     {errorNameOfReg && (
                        <p style={{color: 'red', marginBottom: -20}}>введите имя пожалуйста</p>
                     )}
                  </div>
               </div>
               <div className="Registration__form-one form-one" style={marginTop('row-2')}>
                  <div className="form-one__text">Никнейм</div>
                  <div className="form-one__input-details">
                     <input 
                        type="text" 
                        className='form-one__input' 
                        value={nickname} 
                        onChange={e => setNickname(e.target.value)}
                     />
                     {errorNicknameOfReg && (
                        <p style={{color: 'red', marginBottom: -20}}>{errorNicknameTextOfReg}</p>
                     )}
                  </div>
               </div>
               <div className="Registration__form-one form-one">
                  <div className="form-one__text">Пароль</div>
                  <div className="form-one__input-details">
                     <input type="text" className='form-one__input' value={password} onChange={e => setPassword(e.target.value)}/>
                     <p>лимит символы</p>
                  </div>
               </div>
               <div className="Registration__form-one form-one">
                  <div className="form-one__text">Подтверждение пароля</div>
                  <div className="form-one__input-details" style={{marginLeft: '84px'}}>
                     <input 
                        type="text" 
                        className='form-one__input' 
                        value={password2} 
                        onChange={e => setPassword2(e.target.value)}
                     />
                     {similarPasswordErr && (
                        <p style={{color: 'red', marginBottom: -55}}>{errorPasswordOfReg}</p>
                     )}
                  </div>
               </div>
           </div> 
        </div>
        <div className="Registration__row-2" style={marginTop('button')}>
            <div className="Registration__button" onClick={loadDate}>
              <span>Регистрация</span>
            </div>
            <div className="Registration__have-acc">
               Уже есть логин? <span onClick={() => navigate('/Autorization')}>Войти</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Registration