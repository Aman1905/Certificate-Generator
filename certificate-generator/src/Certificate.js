import React from 'react'
import './App.css'
import Config from './config.js'
import Header from './Header'
import Main from './Main'

const Certificate = () => {

  window.document.title = Config.Name +" : Claim your Certificate"

  return (
    <div className="App">
      <Header Config={Config} />
      <Main Config={Config} />
    </div>
  )
}

export default Certificate