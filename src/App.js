import React from 'react'
import FirstPage from './First Page/FirstPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SecondPage from './Second Page/SecondPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<FirstPage />} path="/" />
        <Route element={<SecondPage />} path="/details" />
      </Routes>
    </BrowserRouter>
  )
}

export default App