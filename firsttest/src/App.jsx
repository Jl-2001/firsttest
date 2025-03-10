// import { useState } from 'react'
import React from 'react'
import './App.css'
import UserForm from './components/UserForm'
import useStore from './zustand/store'
// import Header from './components/Header'
// import AppBar from '@mui/material/AppBar';
// import { Container } from '@mui/material';
// import Toolbar from '@mui/material';
// import Typography from '@mui/material';

function App() {
  const {cigCount, increaseCigs, decreaseCigs} = useStore()


  return (
    <>
      <div>
        <form action="">what is your name?</form>
        

        <UserForm/>
        <button onClick={increaseCigs}>increase</button>
        <p> i have {cigCount} ciggerettes left in my pocket </p>
        <button onClick={decreaseCigs}>decrease</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

    </>
  )
}

export default App
