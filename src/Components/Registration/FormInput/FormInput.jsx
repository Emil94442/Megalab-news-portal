import React from 'react'
import './FormInput.scss'

const FormInput = ({children , valueInp , changeInpValue}) => {
  return (
    <div className='FormInput'>
        <div className="Registration__form-one form-one">
            <div className="form-one__text">{children}</div>
            <input type="text" className='form-one__input' value={valueInp} onChange={changeInpValue}/>
        </div>
    </div>
  )
}

export default FormInput