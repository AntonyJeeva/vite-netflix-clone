import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Profile from './Pages/Profile'
import Navbar from './Components/Navbar'
import AuthContextProvider from './API/AuthContext'

function App() {


  return (
    <>
    {/* context */}
    <AuthContextProvider>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup /> } />
        <Route path='/profile' element={<Profile />} />
    </Routes>
    </AuthContextProvider>
    </>
  )
}

export default App
