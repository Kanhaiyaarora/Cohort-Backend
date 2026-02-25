import React from 'react'
import { AppRoutes } from './appRoutes'
import './style.scss'
import { RouterProvider } from 'react-router'
import { AuthProvider } from './features/auth/auth.context'
import { PostContextProvider } from './features/post/post.context'

const App = () => {
  return (
    <AuthProvider>
      <PostContextProvider>
        <RouterProvider router={AppRoutes} />

      </PostContextProvider>
    </AuthProvider>
  )
}

export default App
