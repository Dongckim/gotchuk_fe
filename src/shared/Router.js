import React from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Main from '../pages/Main'
import MatchPage from '../pages/MatchPage'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="match" element={<MatchPage/>} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router