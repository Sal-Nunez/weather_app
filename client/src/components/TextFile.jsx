import text from '../assets/84C4BFFC0988A75445588F96C5CA9669.txt'
import {saveAs} from 'file-saver'

import React, {useEffect} from 'react'
import {useHistory} from "react-router-dom"

const TextFile = () => {

  const history = useHistory()

  useEffect(() => {
    if(window.location.pathname === '/.well-known/pki-validation/84C4BFFC0988A75445588F96C5CA9669.txt'){
      saveAs(
        text,
        "84C4BFFC0988A75445588F96C5CA9669.txt"
      )
    }
  }, [])


  const saveFile = () => {
history.push('/.well-known/pki-validation/84C4BFFC0988A75445588F96C5CA9669.txt')
saveAs(
  text,
  "84C4BFFC0988A75445588F96C5CA9669.txt"
)
  }

  return (
    <button onClick={saveFile} >Click</button>
  )
}

export default TextFile