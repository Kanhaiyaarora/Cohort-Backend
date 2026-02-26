import { Plus } from 'lucide-react'
import React from 'react'
import "../style/nav.scss"
import { useNavigate } from 'react-router'



const Nav = () => {
  const navigate = useNavigate()
  return (
    <nav className='nav-bar'>
      <i><p>Devgram</p> </i>
      <button onClick={() => { navigate("/create-post") }}> <Plus /></button>
    </nav>
  )
}

export default Nav
