import React from 'react'
import '../App.css'
import { useHistory } from 'react-router'

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
          <p>Logo</p>
        </div>
        <div>
          {
            props.page === 'login' ? 
            (
              <p onClick={goToRegister}>register</p>
            ) 
            :
            (
              <p onClick={goToLogin}>login</p>
            )
          }
        </div>
      </nav>
    </>
  )
}

export default Navbar