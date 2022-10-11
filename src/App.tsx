import { useState } from 'react'
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom'
import './App.css'
import { Header } from './Components/Header'
import { AdminLogIn } from './Pages/AdminLogIn'
import { Home } from './Pages/Home'
import { NotFound } from './Pages/NotFound'
import { UserLogIn } from './Pages/UserLogIn'

function App() {

  const navigate = useNavigate()

  return (
    <div className="App">
     <Header />
      <main>
        <Routes>
          <Route index element={<Navigate to="/home" />} />
          <Route
            path="/home"
            element={<Home />}
          />
          <Route path="/users/:id" element={<UserLogIn />} />
          <Route path="/admins/:id" element={<AdminLogIn />} />
          {/* <Route path="/signUp" element={<SignUpForm />} />
          <Route path="/signIn" element={<SignIn signIn={signIn} />} /> */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
