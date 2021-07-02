import React from 'react'
import '../App.css'
import Navbar from '../components/Navbar'

const Register = () => {
  return (
    <>
      <Navbar />
      <div className="Main">
        <div className="Main-content-register">
          <form className="Main-content-form">
            <div className="Register-form-left">
              <h1>Register</h1>
              <div className="Login-form">
                <label htmlFor="firstName">First name</label>
                <input type="text" className="Input-box"></input>
                <br />
                <label htmlFor="lastName">Last name</label>
                <input type="text" className="Input-box"></input>
                <br />
                <label htmlFor="email">Email</label>
                <input type="text" className="Input-box"></input>
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" className="Input-box"></input>
                <br />
                <label htmlFor="select">Gender</label>
                <div className="Radio">
                  <div>
                    <label htmlFor="female">Female</label>
                    <input type="radio" value="female" name="gender" />
                  </div>
                  <div>
                    <label htmlFor="male">Male</label>
                    <input type="radio" value="male" name="gender" />
                  </div>
                </div>
                <br />
              </div>
            </div>
            <div className="Register-form-right">
            <div className="Login-form">
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
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
