import React, { useEffect, useState } from 'react'
import '../App.css'
import Navbar from '../components/Navbar'
import image from '../assets/Time-management-cuate.png'
import { useHistory } from 'react-router-dom'

const Login = () => {
  const history = useHistory()
  const [globalWidth, setGlobalWidth] = useState(window.innerWidth)
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
  })

  const [isValidated, setIsValidated] = useState({
    email: true,
    password: true,
  }) 

  const login = () => {
    for (let key in userInput) {
      if (!userInput[key]) {
        setIsValidated(prev => ({...prev, [key]: false}))
      }
    }
  }

  const goToRegister = () => {
    history.push('/register')
  }

  useEffect(() => {
    window.addEventListener("resize", (parameter, tes) => {
      const windowWidth = window.innerWidth;
      setGlobalWidth(windowWidth)
      console.log(globalWidth)
    })
  }, [globalWidth])

  return (
    <>
      <Navbar 
        page="login"
      />
      <div className="Main">
        <div className="Main-content">
          <div className="Main-content-left">
            {
              globalWidth >= 768 && (
                <>
                  <div className="Img-container">
                    <img src={image} className="Login-img" alt="Time Management"/>
                  </div>
                </>
              )
            }
          </div>
          <div className="Main-content-right">
            <form className="Login-form">
              <label htmlFor="email" className={`${ isValidated.email ? 'Input-label' : 'Input-label-red' }`}>Email</label>
              <input onFocus={() => setIsValidated(prev => ({...prev, email: true}))} onChange={e => setUserInput(prev => ({...prev, email: e.target.value}))} type="text" className={`Input-box ${ isValidated.email ? 'Border-bottom' : 'Border-bottom-red' }`}></input>
              <br />
              <label htmlFor="password" className={`${ isValidated.password ? 'Input-label' : 'Input-label-red' }`}>Password</label >
              <input onFocus={() => setIsValidated(prev => ({...prev, password: true}))} onChange={e => setUserInput(prev => ({...prev, password: e.target.value}))} type="password" className={`Input-box ${ isValidated.password ? 'Border-bottom' : 'Border-bottom-red' }`}></input>
              <br />
              <small onClick={goToRegister} className="Small-txt">Sign up?</small>
              <br />
              <div className="Login-btn" onClick={login}>
                <p>Login</p>
              </div>
              <br />
              <div className="Login-btn-google">
                <p>Login With Google</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login