import text from '../assets/EA034446558D55D89AFD121FAB7D20DC.txt'
import {saveAs} from 'file-saver'

import React, {useEffect} from 'react'
import {useHistory} from "react-router-dom"

const TextFile = () => {

  const history = useHistory()

  useEffect(() => {
    if(window.location.pathname === '/.well-known/pki-validation/EA034446558D55D89AFD121FAB7D20DC.txt'){
      saveAs(
        text,
        "EA034446558D55D89AFD121FAB7D20DC.txt"
      )
    }
  }, [])


  const saveFile = () => {
history.push('/.well-known/pki-validation/EA034446558D55D89AFD121FAB7D20DC.txt')
saveAs(
  text,
  "EA034446558D55D89AFD121FAB7D20DC.txt"
)
  }

  return (
    <button onClick={saveFile} >Click</button>
  )
}

export default TextFile