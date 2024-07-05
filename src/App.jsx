import React from "react"
import Header from "./components/Header"
import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import UserContextProvider from "./contexts/userContext/UserContextProvider"
import ThemeContextProvider from "./contexts/themeContext/ThemeContextProvider"

function App() {

  return (
    <ThemeContextProvider>
       <UserContextProvider>
    <Header/>
    <Outlet/>
    <Footer/>
    </UserContextProvider>
    </ThemeContextProvider>
  )
}

export default App
