import text from '../assets/F6D175921AB16A6DFD59D8EAC37F5038.txt'
import {saveAs} from 'file-saver'

import React, {useEffect} from 'react'
import {useHistory} from "react-router-dom"

const TextFile = () => {

  const history = useHistory()

  useEffect(() => {
    if(window.location.pathname === '/.well-known/pki-validation/F6D175921AB16A6DFD59D8EAC37F5038.txt'){
      saveAs(
        text,
        "F6D175921AB16A6DFD59D8EAC37F5038.txt"
      )
    }
  }, [])


  const saveFile = () => {
history.push('/.well-known/pki-validation/F6D175921AB16A6DFD59D8EAC37F5038.txt')
saveAs(
  text,
  "F6D175921AB16A6DFD59D8EAC37F5038.txt"
)
  }

  return (
    <button onClick={saveFile} >Click</button>
  )
}

export default TextFile