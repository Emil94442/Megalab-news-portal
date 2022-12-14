import React from 'react'
import './FormInput.scss'

const FormInput = ({children}) => {
  return (
    <div className='FormInput'>
        <div className="Registration__form-one form-one">
            <div className="form-one__text">{children}</div>
            <input type="text" className='form-one__input'/>
        </div>
    </div>
  )
}

export default FormInput