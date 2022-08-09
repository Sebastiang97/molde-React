import React from 'react'
import { AppRouter } from 'routers/AppRouter'
import { appService } from 'services'
import './App.css'

function App() {
  appService()
  return (
    <div className='App'>
      <AppRouter />
    </div>
  )
}

export default App
