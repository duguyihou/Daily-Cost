import RealmContext from '@shared/RealmContext'
import React from 'react'

import { Routes } from './routes'

const { RealmProvider } = RealmContext
function App() {
  return (
    <RealmProvider>
      <Routes />
    </RealmProvider>
  )
}

export default App
