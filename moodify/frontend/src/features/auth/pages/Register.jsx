import React, { useState } from 'react'
import FormGroup from '../components/FormGroup'
import { Link } from 'react-router'
import "../styles/register.scss"
import { useNavigate } from 'react-router'
import { UseAuth } from '../hooks/useAuth'


const Register = () => {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const { loading, handleRegister } = UseAuth()

  async function handleSubmit(e) {
    e.preventDefault()
    await handleRegister({ username, email, password })
    navigate("/")
  }

  return (
    <main className='register-form'>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <FormGroup value={username} onChange={(e) => setUsername(e.target.value)} label="Name" placeholder="Enter your name" />
          <FormGroup value={email} onChange={(e) => setEmail(e.target.value)} label="Email" placeholder="Enter your Email" />
          <FormGroup value={password} onChange={(e) => setPassword(e.target.value)} label="Password" placeholder="Enter your Password" />
          <button type="submit">Register</button>
        </form>
        <p>Already have an account? <Link to="/login">Login</Link> </p>
      </div>
    </main>

  )
}

export default Register
