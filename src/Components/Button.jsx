import React from 'react'
import { useContext } from 'react'
import { mycontext } from '../App'

const Button = (props) => {

    const data = useContext(mycontext)

  return (
    <div style={{backgroundColor: data.color}}>COLOR CHANGER</div>
  )
}

export default Button