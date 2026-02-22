import React from 'react'
import { AppRoutes } from './appRoutes'
import './style.scss'
import { RouterProvider } from 'react-router'
import { AuthProvider } from './features/auth/auth.context'

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={AppRoutes} />
    </AuthProvider>
  )
}

export default App
