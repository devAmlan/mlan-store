import React, { useState } from 'react'
import "./Signup.css"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { toast, ToastContainer } from "react-toast"
function Signup() {
    const navigate = useNavigate()
    const [userdata, setUserdata] = useState({ fname: "", lname: "", email: "", password: "" })
    const signupHandler = async (e) => {
        try {
            e.preventDefault()
            if (!userdata.email || !userdata.password || !userdata.fname || !userdata.lname) {
                toast.warn('Please fill the Signup form')
            }
            else if (userdata.password.length < 6) {
                toast.warn('Password length must be atleast 6')
            }
            else {

                const response = await axios.post(`/api/auth/signup`, JSON.stringify({
                    firstName: userdata.fname,
                    lastName: userdata.lname,
                    email: userdata.email,
                    password: userdata.password,
                }));
                if (response.data.errors) {
                    toast.error(response.data.errors[0])
                } else {
                    localStorage.setItem("authtoken", response.data.encodedToken);
                    navigate('/login')
                }
                setUserdata({ fname: "", lname: "", email: "", password: "" })
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
                        value={userdata.fname}
                        onChange={(e) => { setUserdata((data) => ({ ...data, fname: e.target.value })) }} />
                    <label htmlFor="">Last name</label>
                    <input type="text" className='user-input'
                        value={userdata.lname}
                        onChange={(e) => { setUserdata((data) => ({ ...data, lname: e.target.value })) }} />
                    <label htmlFor="">Email</label>
                    <input type="email" className='user-input'
                        value={userdata.email}
                        onChange={(e) => { setUserdata((data) => ({ ...data, email: e.target.value })) }} />
                    <label htmlFor="">Password</label>
                    <input type="password" className='user-input'
                        value={userdata.password}
                        onChange={(e) => { setUserdata((data) => ({ ...data, password: e.target.value })) }} />
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