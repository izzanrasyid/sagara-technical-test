import React, { useEffect, useState } from 'react'
import '../App.css'
import Navbar from '../components/Navbar'

const Login = () => {
  const [globalWidth, setGlobalWidth] = useState(window.innerWidth)

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
                  <div>
                    <p>#1 Intelligent Time Tracking App for In Office, Mobile and Remote Teams.</p>
                  </div>
                  <div>
                    <img src="https://storyset.com/illustration/time-management/cuate#default&hide=&hide=false" alt="Time Management"/>
                  </div>
                </>
              )
            }
          </div>
          <div className="Main-content-right">
            <h1>Login</h1>
            <form className="Login-form">
              <label htmlFor="email">Email</label>
              <input type="text" className="Input-box"></input>
              <br />
              <label htmlFor="password">Password</label>
              <input type="password" className="Input-box"></input>
              <br />
              <small className="Small-txt">Already have an account?</small>
              <br />
              <div className="Login-btn">
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