import React from 'react'
import FirstPage from './First Page/FirstPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<FirstPage />} path="/" />
      </Routes>
    </BrowserRouter>
  )
}

export default App