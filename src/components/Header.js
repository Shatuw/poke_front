import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Header() {
  return ( 
  <div>
  <h1>Hello World</h1>
  <Outlet />
  </div>
  )
}
