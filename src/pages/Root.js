import React from 'react'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
    <div>Root</div>
    <Outlet />
    </>
  )
}

export default RootLayout