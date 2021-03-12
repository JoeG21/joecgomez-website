import React from 'react'
import ReactDOM from 'react-dom'

import close from '../pictures/close.webp'
import '../styling/modal.css'

const Modal = (props) => {
    if (!props.open) return null
    if (!props.sent) return null

    const sentMessage = (
        <div className='overlay'>
            <div className='modal-sent'>
                <div className='top-left'>
                    <button className='close-button' onClick={props.onClose}>
                        <img src={close} alt='Close' className='close' />
                    </button>
                </div>
                <div className='message'>
                    <p> Message Sent! </p>
                </div>
            </div>
        </div>
    )

    const sentError = (
        <div className='overlay'>
            <div className='modal-error'>
                <div className='top-left'>
                    <button className='close-button' onClick={props.onClose}>
                        <img src={close} alt='Close' className='close' />
                    </button>
                </div>
                <div className='message'>
                    <p> Error... Please try again later. </p>
                </div>
            </div>
        </div>
    )

    return ReactDOM.createPortal(
        <>
            {props.sent === true ? sentMessage : sentError}
        </>,
        document.getElementById('portal')
    )
}

export default Modal