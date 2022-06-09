import React, { useState, useContext } from 'react'
import "../signup/Signup.css"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { AuthContext } from "../../context/AuthContext"
import { ToastContainer, toast } from "react-toast"
function Login() {
  const navigate = useNavigate()
  const { setAuthuserdata } = useContext(AuthContext)
  const [logindata, setLogindata] = useState({ email: "", password: "" })
  const loginHandler = async (e) => {
    e.preventDefault()
    try {
      if (!logindata.email || !logindata.password) {
        toast.warn('please enter email and password')
        setLogindata({ email: "", password: "" })
      } else {
        const response = await axios.post(`/api/auth/login`,
          JSON.stringify({ email: logindata.email, password: logindata.password }))

        if (response.data.errors) {
          toast.error(response.data.errors[0])
        } else {
          setAuthuserdata(response.data.foundUser)
          localStorage.setItem("authtoken", response.data.encodedToken);
          navigate('/product')
        }
        setLogindata({ email: "", password: "" })
      }
    }
    catch (error) {
      console.log(error)
      setLogindata({ email: "", password: "" })
    }
  }
  const testLoginHadler = async (e) => {

    e.preventDefault()
    try {
      setLogindata({ email: "someone@gmail.com", password: "Someone@123" })
      const response = await axios.post(`/api/auth/login`,
        JSON.stringify({ email: "someone@gmail.com", password: "Someone@123" })
      )

      if (response.data.errors) {
        toast.error(response.data.errors[0])
      } else {
        console.log(response.data.foundUser)
        setAuthuserdata(response.data.foundUser)
        localStorage.setItem("authtoken", response.data.encodedToken);
        navigate('/product')
      }
      setLogindata({ email: "", password: "" })
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <ToastContainer />
      <div className="authbox">
        <form>
          <h3>Login</h3>
          <label htmlFor="">Email</label>
          <input type="email" className='user-input'
            value={logindata.email}
            onChange={(e) => { setLogindata((data) => ({ ...data, email: e.target.value })) }}
          />
          <label htmlFor="">Password</label>
          <input type="password" className='user-input'
            value={logindata.password}
            onChange={(e) => { setLogindata((data) => ({ ...data, password: e.target.value })) }}
          />
          <div className="term-input">
            <input type="checkbox" />
            <label>I accept all the Terms & Conditions</label>
          </div>
          <div className="input_btn">
            <button onClick={testLoginHadler}>Test Login</button>
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