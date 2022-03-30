import React, { useState, useContext } from 'react'
import "../signup/Signup.css"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { AuthContext } from "../../context/AuthContext"
import { ToastContainer, toast } from "react-toast"
function Login() {
  const navigate = useNavigate()
  const { setAuthuserdata } = useContext(AuthContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const loginHandler = async (e) => {
    e.preventDefault()
    try {
      if (!email || !password) {
        toast.warn('please enter email and password')
        setEmail("")
        setPassword("")
      } else {
        const response = await axios.post(`/api/auth/login`, JSON.stringify({ email, password }))

        if (response.data.errors) {
          toast.error(response.data.errors[0])
        } else {
          setAuthuserdata(response.data.foundUser)
          localStorage.setItem("authtoken", response.data.encodedToken);
          navigate('/product')
        }
        setEmail("")
        setPassword("")
      }
    }
    catch (error) {
      console.log(error)

      setEmail("")
      setPassword("")
    }
  }
  return (
    <>
      <ToastContainer />
      <div className="authbox">
        <form>
          <h3>Signup</h3>
          <label htmlFor="">Email</label>
          <input type="email" className='user-input'
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
          />
          <label htmlFor="">Password</label>
          <input type="password" className='user-input'
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
          />
          <div className="term-input">
            <input type="checkbox" />
            <label>I accept all the Terms & Conditions</label>
          </div>
          <div className="input_btn">
            <button onClick={loginHandler}>Log in</button>
          </div>
          <p>Don't have any account ? <Link to="/signup">signup here</Link></p>
        </form>
      </div>
    </>
  )
}

export default Login