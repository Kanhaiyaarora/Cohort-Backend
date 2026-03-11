import React, { useState } from 'react'
import "../styles/login.scss"
import FormGroup from '../components/FormGroup'
import { Link, useNavigate } from 'react-router'
import { UseAuth } from '../hooks/useAuth'

const Login = () => {
  const { loading, handleLogin } = UseAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  async function handleSubmit(e) {
    e.preventDefault()
    await handleLogin({ email, password })
    navigate("/")
  }

  return (
    <main className='login-form'>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <FormGroup value={email} onChange={(e) => setEmail(e.target.value)} label="Email" placeholder="Enter your Email" />
          <FormGroup value={password} onChange={(e) => setPassword(e.target.value)} label="Password" placeholder="Enter your Password" />
          <button type='submit'>Login</button>
        </form>
        <p>Don't have an account? <Link to="/register">Register</Link> </p>

      </div>
    </main>
  )
}

export default Login
