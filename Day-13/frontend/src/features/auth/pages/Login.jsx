import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import '../style/form.scss'
import { Link } from 'react-router'
import axios from 'axios'

const Login = () => {

  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    axios.post("http://localhost:3000/api/auth/login", { username, password }, { withCredentials: true }).then(res => {
      console.log(res.data);

      const token = res.data.token

      if (rememberMe) {
        localStorage.setItem("token", token)
      } else {
        sessionStorage.setItem("token", token)
      }
    })



  }

  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>

          <input onInput={(e) => setUsername(e.target.value)}
            type="text"
            name='username'
            placeholder='Enter username'
          />

          <div className="password-field">
            <input onInput={(e) => setPassword(e.target.value)}
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

          <div className="remember-row">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              Remember me
            </label>
          </div>

          <button type='submit'>Submit</button>

        </form>

        <p>Don't have an account? <Link className='toggleAuthForm' to="/register">Register</Link>   </p>
      </div>
    </main>
  )
}

export default Login