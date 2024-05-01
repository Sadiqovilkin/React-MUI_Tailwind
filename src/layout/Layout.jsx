import React from 'react'
import DrawerAppBar from './navbar/Appbar'
import Footer from './footer/Footer'

const Layout = ({children}) => {
  return (
    <>
    <DrawerAppBar/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout