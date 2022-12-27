import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeInputRegLastName, changeInputRegName, changeInputRegNickName, changeInputRegPassword, changeInputRegPassword2, verifiedReg } from '../../redux/action'
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

  const dispatch = useDispatch()

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
   
   dispatch(verifiedReg())
   

 }

  useEffect(() => {
     
  }, [])

  return (
    <div className='Registration'>
      <div className="Registration__content">
        <div className="Registration__row-1">
         <br />
           <TitleMegalab style={{position: 'relative' , bottom: 7}}/>
           <div className="Registration__form">
               <div className="Registration__form-one form-one">
                  <div className="form-one__text">Фамилия</div>
                  <input 
                     type="text" 
                     className='form-one__input' 
                     value={last_name} 
                     onChange={e => setLast_name(e.target.value)}
                  />
               </div>
               <div className="Registration__form-one form-one">
                  <div className="form-one__text">Имя</div>
                  <input type="text" className='form-one__input' value={name} onChange={e => setName(e.target.value)}/>
               </div>
               <div className="Registration__form-one form-one">
                  <div className="form-one__text">Никнейм</div>
                  <input 
                  type="text" 
                  className='form-one__input' 
                  value={nickname} 
                  onChange={e => setNickname(e.target.value)}
               />
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
                  <input type="text" className='form-one__input' value={password2} onChange={e => setPassword2(e.target.value)}/>
               </div>
           </div> 
        </div>
        <div className="Registration__row-2">
            <div className="Registration__button" onClick={loadDate}>
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