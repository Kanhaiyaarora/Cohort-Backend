import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import '../style/form.scss'

const Login = () => {

  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()

    const username = e.target.username.value
    const password = e.target.password.value

    console.log(username, password, rememberMe)

    // 👉 Yahan tum login API call karoge
    // Aur agar rememberMe true hai to token localStorage me store karoge

    
    // if (rememberMe) {
    //   localStorage.setItem("token", token)
    // } else {
    //   sessionStorage.setItem("token", token)
    // }
  }

  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name='username'
            placeholder='Enter username'
          />

          <div className="password-field">
            <input
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
      </div>
    </main>
  )
}

export default Login