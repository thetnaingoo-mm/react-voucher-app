import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <main className='flex flex-col min-h-screen p-5'>
        <Header />
        <Outlet />
    </main>
  )
}

export default Layout