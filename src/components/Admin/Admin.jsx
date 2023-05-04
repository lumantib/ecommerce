import React from 'react'
import SideNavbar from './SideNavbar'
import AppBar from './AppBar'
import About from './About'
import { Box } from '@mui/material'
const Admin = () => {
  return (
    <>
    <AppBar/>
    <Box height={30}/>
    <Box sx={{ display: 'flex' }}>
     <SideNavbar><h1>Hello</h1></SideNavbar>
      
    </Box>
   
    </>
  )
}

export default Admin
