import { Container } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Header() {
  return ( 
  <Container maxWidth="lg">
  <h1><Link to={"/"}>Poket Monster Fight</Link></h1>
  <Outlet />
  </Container>
  )
}
