import React from 'react'
import UserCard from './UserCard'

const Hero = (props) => {
  return (
    <div>
        <img src="https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{width:"500px"}} alt="" />

        <UserCard userName={props.userName} btnColor={props.btnColor}/>
    </div>
  )
}

export default Hero