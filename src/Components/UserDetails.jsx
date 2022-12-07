import React, { useContext } from 'react'
import { mycontext } from '../App'

const UserDetails = () => {

    const data = useContext(mycontext)

    return (
    <div>My name is {data.name} </div>
  )
}

export default UserDetails