import React, { useState, useMemo } from 'react'
import '../App.css'
import Navbar from '../components/Navbar'
import useHook from '../hooks/useHook'
import { useHistory } from 'react-router'

const Register = () => {
  const history = useHistory()
  const provinces = useHook()
  const [selectProvince, setSelectProvince] = useState('')
  const [userInput, setUserInput] = useState({
    firstName: '',
    lastName: '', 
    email: '',
    password: '',
    gender: '',
    province: '',
    city: ''
  })

  const [isValidated, setIsValidated] = useState({
    firstName: true,
    lastName: true, 
    email: true,
    password: true,
    gender: true,
    province: true,
    city: true
  })

  const goToLogin = () => {
    history.push('/')
  }

  const submitInput = () => {
    for (let key in userInput) {
      if (!userInput[key]) {
        setIsValidated(prev => ({...prev, [key]: false}))
      }
    }
  }

  const options = useMemo(() => {
    return provinces.map(el => {
      return {
        value: el.province,
        label: el.province
      }
    })
  }, [])
  

  const optionsCities = useMemo(() => {
    if (userInput.province) {
      return provinces.find(el => el.province === userInput.province).cities.map(el => {
        return {
          value: el,
          label: el
        }
      })
    } else {
      return []
    }
  }, [userInput])

  return (
    <>
      <Navbar />
      <div className="Main">
        <div className="Main-content-register">
          <form className="Main-content-form">
            <div className="Register-form-left">
              <div className="Login-form">
                <label className htmlFor="firstName"  className={`${ isValidated.firstName ? 'Input-label' : 'Input-label-red' }`}>First name</label>
                <input onFocus={() => setIsValidated(prev => ({...prev, firstName: true}))} onChange={e => setUserInput(prev => ({...prev, firstName: e.target.value}))} type="text" className={`Input-box ${ isValidated.firstName ? 'Border-bottom' : 'Border-bottom-red' }`}></input>
                <br />
                <label htmlFor="lastName" className={`${ isValidated.lastName ? 'Input-label' : 'Input-label-red' }`}>Last name</label>
                <input onFocus={() => setIsValidated(prev => ({...prev, lastName: true}))} onChange={e => setUserInput(prev => ({...prev, lastName: e.target.value}))} type="text" className={`Input-box ${ isValidated.lastName ? 'Border-bottom' : 'Border-bottom-red' }`}></input>
                <br />
                <label htmlFor="email" className={`${ isValidated.email ? 'Input-label' : 'Input-label-red' }`}>Email</label>
                <input onFocus={() => setIsValidated(prev => ({...prev, email: true}))} onChange={e => setUserInput(prev => ({...prev, email: e.target.value}))} type="text" className={`Input-box ${ isValidated.email ? 'Border-bottom' : 'Border-bottom-red' }`}></input>
                <br />
                <label htmlFor="password" className={`${ isValidated.password ? 'Input-label' : 'Input-label-red' }`}>Password</label>
                <input onFocus={() => setIsValidated(prev => ({...prev, password: true}))} onChange={e => setUserInput(prev => ({...prev, password: e.target.value}))} type="password" className={`Input-box ${ isValidated.password ? 'Border-bottom' : 'Border-bottom-red' }`}></input>
                <br />
                <label htmlFor="select" className={`${ isValidated.gender ? 'Input-label' : 'Input-label-red' }`}>Gender</label>
                <div className="Radio">
                  <div>
                    <label htmlFor="female">Female</label>
                    <input onFocus={() => setIsValidated(prev => ({...prev, gender: true}))} onChange={e => setUserInput(prev => ({...prev, gender: e.target.value}))} type="radio" value="female" name="gender" />
                  </div>
                  <div>
                    <label htmlFor="male">Male</label>
                    <input onFocus={() => setIsValidated(prev => ({...prev, gender: true}))} onChange={e => setUserInput(prev => ({...prev, gender: e.target.value}))} type="radio" value="male" name="gender" />
                  </div>
                </div>
                <br />
              </div>
            </div>
            <div className="Register-form-right">
              <div className="Login-form">
                <label htmlFor="email" className={`${ isValidated.province ? 'Input-label' : 'Input-label-red' }`}>Province</label>
                <select value={userInput.province} onChange={e => {
                  setIsValidated(prev => ({...prev, province: true}))
                  return setUserInput(prev => ({...prev, province: e.target.value}))}}  
                className="Select">
                  <option disabled value="">Select Province</option>
                  {
                    options.map(el => {
                      return (
                        <option value={el.value}>{el.label}</option>
                      )
                    })
                  }
                </select>
                <br />
                {
                  userInput.province && (
                    <>
                      <label htmlFor="email" className={`${ isValidated.city ? 'Input-label' : 'Input-label-red' }`}>City</label>
                        <select className="Select" onChange={e => {
                          setIsValidated(prev => ({...prev, city: true}))
                          return setUserInput(prev => ({...prev, city: e.target.value}))}
                        }>
                          {
                            optionsCities.map(el => {
                              return (
                                <option value={el.value}>{el.label}</option>
                              )
                            })
                          }
                        </select>
                      <br />
                    </>
                  )
                }
                <small onClick={goToLogin} className="Small-txt">Already have an account?</small>
                <br />
                <div className="Login-btn" onClick={submitInput}>
                  <p>Sign up</p>
                </div>
                <br />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
