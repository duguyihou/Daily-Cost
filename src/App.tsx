import BillContext from '@features/bill/models/Bill'
import React from 'react'

import { Routes } from './routes'

const { RealmProvider } = BillContext
function App() {
  return (
    <RealmProvider>
      <Routes />
    </RealmProvider>
  )
}

export default App
