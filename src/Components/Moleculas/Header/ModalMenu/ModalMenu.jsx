import React from 'react'
import MenuStripes from '../../../MainPage/MainPart/MenuStripes/MenuStripes'
import './ModalMenu.scss'

const ModalMenu = ({modalMenu , setModalMenu}) => {
  return (
    <div>
      <div className={modalMenu ? 'ModalMenu opened' : 'ModalMenu'}>
         <h1 className='ModalMenu__close' onClick={() => setModalMenu(false)}>&times;</h1>
         <div className="ModalMenu__content">
           <MenuStripes/>
         </div>
      </div>
    </div>
  )
}

export default ModalMenu