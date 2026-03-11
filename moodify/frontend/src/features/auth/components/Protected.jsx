import React from 'react'
import { UseAuth } from '../hooks/useAuth'
import { Navigate } from 'react-router'

const Protected = ({ children }) => {
  const { user, loading } = UseAuth()
  

  if (loading) {
    return <main><h1>Loading...</h1></main>
  }

  if (!loading && !user) {
    return <Navigate to="/login" />
  }

  return children
}

export default Protected
