import React, { useState } from 'react'
import "./Signup.css"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { toast, ToastContainer } from "react-toast"
function Signup() {
    const navigate = useNavigate()
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const signupHandler = async (e) => {
        try {
            e.preventDefault()
            if (!email || !password || !fname || !lname) {
                toast.warn('Please fill the Signup form')
            }
            else if (password.length < 6) {
                toast.warn('Password length must be atleast 6')
            }
            else {

                const response = await axios.post(`/api/auth/signup`, JSON.stringify({
                    firstName: fname,
                    lastName: lname,
                    email: email,
                    password: password,
                }));
                if (response.data.errors) {
                    toast.error(response.data.errors[0])
                } else {
                    localStorage.setItem("authtoken", response.data.encodedToken);
                    navigate('/login')
                }
                setEmail("")
                setFname("")
                setLname("")
                setPassword("")
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <ToastContainer />
            <div className="authbox">
                <form>
                    <h3>Signup</h3>
                    <label htmlFor="">First name</label>
                    <input type="text" className='user-input'
                        value={fname}
                        onChange={(e) => { setFname(e.target.value) }} />
                    <label htmlFor="">Last name</label>
                    <input type="text" className='user-input'
                        value={lname}
                        onChange={(e) => { setLname(e.target.value) }} />
                    <label htmlFor="">Email</label>
                    <input type="email" className='user-input'
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }} />
                    <label htmlFor="">Password</label>
                    <input type="password" className='user-input'
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }} />
                    <div className="term-input">
                        <input type="checkbox" />
                        <label>I accept all the Terms & Conditions</label>
                    </div>
                    <div className="input_btn">
                        <button onClick={signupHandler}>Create new account</button>
                    </div>
                    <p>Already have account ? <Link to="/login">login here</Link></p>
                </form>
            </div>
        </>
    )
}

export default Signup