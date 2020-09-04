import React, {useState} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

const Signup = () =>{
    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [confirmPassword, setConfirmPassword] = useState('')
    let [redirect, setRedirect] = useState(false)

    const handleName =(e) =>{
        setName(e.target.value)
    }
    const handleEmail = (e) =>[
        setEmail(e.target.calue)
    ]
    const handlePassword = (e) =>{
        setPassword(e.target.value)
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        if (password === confirmPassword) {
            const newUser ={name, email, password}

            axios.post(`${REACT_APP_SERVER_URL}/api/users/register`, newUser)
            .then(response => {
                setRedirect(true)
            })
            .catch(error=> console.log(error))
     
        }
    }
    if (redirect) return <Redirect path='./login'/>
    return (
        <div className="row mi-4">
            <div className="col-md-7 offset-md-3">
                <div className="card card-body">
                    <h2 className="py-2">Signup</h2>
                        <form action="/ideas" method="POST" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" value={name} onChange={handleName} className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" value={email} onChange={handleEmail} className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" value={password} onChange={handlePassword} className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Name</label>
                                <input type="Password" name="confirmPassword" value={confirmPassword} onChange={handleConfirmPassword} className="form-control"></input>
                            </div>
                            <button type="submit" className="btn btn-primary float-right">Submit</button>
                        </form>
                </div>

            </div>
        </div>
    )
}
export default Signup
