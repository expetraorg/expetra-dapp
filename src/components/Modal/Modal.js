import React from 'react'
import { IoClose } from 'react-icons/io5'
import { Button } from '../../globalStyles'
import ReactDom from 'react-dom'
import './Modal.css'

export const HasModal = ({ open, onClose }) => {
  if (!open) return null
  return ReactDom.createPortal(
      <div className='overlay'>
      <div className='modalContainer'>
        <div className='modalRight'>
          <IoClose onClick={onClose} className='close'/>
          <div className='content'>
            <h1>Congratulations!</h1>
            <p>You've got a subscription. Please, reload mobile app</p>
            <p></p>
          </div>
          <div className='btnContainer'>
            <Button onClick={onClose}>ok</Button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")   
  )
}

export const NoModal = ({ open, onClose }) => {
  if (!open) return null
  return ReactDom.createPortal(
      <div className='overlay'>
      <div className='modalContainer'>
        <div className='modalRight'>
          <IoClose onClick={onClose} className='close'/>
          <div className='content'>
            <h1>Sorry...</h1>
            <p>Your $ELF token balance is less than 100 $ELF. Please, get more $ELF tokens to unlock premium</p>
            <p></p>
          </div>
          <div className='btnContainer'>
            <Button onClick={onClose}>ok</Button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")   
  )
}
