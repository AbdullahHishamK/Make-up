import React from 'react'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Home from './components/home/Home'
import Products from './components/products/Products'
import Details from './components/Details/Details'
import Cart from './components/Cart/Cart'
import Layout from './components/Layout/Layout'
import Services from './components/Services/Services'
import Appointment from './components/Appointment/Appointment'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Profile from './components/Profile/Profile'
import { CartProvider } from './contexts/CartContext'
import { AuthProvider, useAuth } from './contexts/AuthContext'

const AppContent = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#151413] flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: user ? <Navigate to="/layout" replace /> : <Navigate to="/login" replace />
    },
    {
      path: '/login',
      element: user ? <Navigate to="/layout" replace /> : <Login />
    },
    {
      path: '/register',
      element: user ? <Navigate to="/layout" replace /> : <Register />
    },
    {
      path: '/layout',
      element: user ? <Layout /> : <Navigate to="/login" replace />,
      children: [
        { path: '', element: <Home /> },
        { path: 'home', element: <Home /> },
        { path: 'products', element: <Products /> },
        // details route (will resolve to /layout/products/:id)
        { path: 'products/:id', element: <Details /> },
        { path: 'cart', element: <Cart /> },
        { path: 'services', element: <Services /> },
        { path: 'appointment', element: <Appointment /> },
        { path: 'profile', element: <Profile /> },
        // fallback last
        { path: '*', element: <div className="min-h-screen bg-[#151413] text-white flex items-center justify-center">404 Not Found</div> },
      ]
    }
  ])

  return <RouterProvider router={router}/>
}

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </AuthProvider>
  )
}

export default App
