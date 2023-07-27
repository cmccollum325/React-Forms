import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUpForm from './Components/SignUpForm.jsx'
import Authenticate from './Components/Authenitcate.jsx'

export default function App() {
  
  
  return (
    <>
      <SignUpForm setToken = {setToken}/>
      <Authenticate token = {token}/>
      
    </>
  )
}


