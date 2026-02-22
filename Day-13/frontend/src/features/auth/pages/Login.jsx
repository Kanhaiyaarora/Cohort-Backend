import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import '../style/form.scss'
import { Link, useNavigate } from 'react-router'
import { useAuth } from '../hooks/useAuth'

const Login = () => {

  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")



  const { loading, handleLogin } = useAuth()
  const navigate = useNavigate()



  const handleSubmit = async (e) => {
    e.preventDefault()

    await handleLogin(username, password, rememberMe)

    navigate('/')
    

  }

  if (loading) {
    return (<main>
      <h1>Loading.....</h1>
    </main>)
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

            <span className="toggle-icon" onClick={() => setShowPassword(!showPassword)}>
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