import React from 'react'
import './Modal.scss'

const Modal = ({modal , children , setModal}) => {
  return (
    modal && (
        <div className='Modal' onClick={() => setModal(false)}>
           <div className="Modal__content" onClick={(e) => e.stopPropagation()}>
               {children}
           </div>
        </div>
    )
  )
}

export default Modal