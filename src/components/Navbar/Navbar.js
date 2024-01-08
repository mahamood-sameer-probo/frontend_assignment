import React from 'react'
import Button from '../Button/Button'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar' >
        <h1>MovieApp</h1>
        <div className='authentication_box'>
            <Button text="Sign in" />
            <Button text="Sign up" />
        </div>
    </div>
  )
}

export default Navbar