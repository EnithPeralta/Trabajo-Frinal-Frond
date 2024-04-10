import React from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";
const ModalComponent = ({isOpen,onClose,children}) => {
  return (
    <div className='modal-container' style={{display:isOpen ?"grid":"none"}}>
        <div className='modal-body'>
            <button className='boton' onClick={onClose}  style={{ border: 'none', backgroundColor: 'white' }}><IoCloseCircleOutline /></button>
            {children}
      </div>
    </div>
  )
}

export default ModalComponent;