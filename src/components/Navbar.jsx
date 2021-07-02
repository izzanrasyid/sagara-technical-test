import React from 'react'
import '../App.css'
import { useHistory } from 'react-router'
import logo from '../assets/logo.png'

const Navbar = ( props ) => {
  const history = useHistory()

  const goToRegister = () => {
    history.push("/register")
  }

  const goToLogin = () => {
    history.push("/")
  }

  return (
    <>
      <nav>
        <div>
          <img className="Logo" src={logo} alt="logo"></img>
        </div>
        <div className="Nav-link">
          {
            props.page === 'login' ? 
            (
              <p className="Nav-link-font" onClick={goToRegister}>register</p>
            ) 
            :
            (
              <p className="Nav-link-font" onClick={goToLogin}>login</p>
            )
          }
        </div>
      </nav>
    </>
  )
}

export default Navbar