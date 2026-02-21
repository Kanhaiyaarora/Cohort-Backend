import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { Link } from 'react-router'
import axios from 'axios'

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)

  const [username, setUsername] = useState(null)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()
    axios.post('http://localhost:3000/api/auth/register', { username, email, password }, { withCredentials: true }).then(res => {
      console.log(res.data);
    })

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
