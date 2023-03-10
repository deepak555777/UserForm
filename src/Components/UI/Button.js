import React from 'react'
import Classes from './Button.module.css'

function Button(props) {

  return (
    <button 
    className={Classes.button}
    type={props.type || 'button'}
    onClick={props.onClick}
    >{props.children}</button>
  )
}

export default Button