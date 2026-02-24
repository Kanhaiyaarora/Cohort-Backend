import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { Link, useNavigate } from 'react-router'
import { useAuth } from '../hooks/useAuth'

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)

  const [username, setUsername] = useState(null)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const { loading, handleRegister } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await handleRegister(username, email, password)
    navigate('/')
  }

  if (loading) {
    return (<main> <h1>Loading.....</h1></main>)
  }

  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit} >
          <input onInput={(e) => {
            setUsername(e.target.value)
          }} type="text" name='username' placeholder='Enter username' required />

          <input onInput={(e) => {
            setEmail(e.target.value)
          }} type="email" name='email' placeholder='Enter email' required />

          <div className="password-field">
            <input onInput={(e) => {
              setPassword(e.target.value)
            }}
              type={showPassword ? "text" : "password"}
              name='password'
              placeholder='Enter password'
            />

            <span
              className="toggle-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          </div>

          <button type="submit">Submit</button>
        </form>
        <p>Already have an account? <Link className='toggleAuthForm' to="/login">Login</Link>   </p>
      </div>
    </main>
  )
}

export default Register
